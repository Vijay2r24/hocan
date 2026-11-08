import { createSlice } from '@reduxjs/toolkit';
import {
  INITIAL_QUOTATION,
  INITIAL_VISA_DETAILS,
  INITIAL_TRAVEL_DETAILS,
  INITIAL_TREATMENT_DETAILS,
  INITIAL_RECOVERY_DETAILS,
  INITIAL_RETURN_HOME_DETAILS
} from '../data/mockData';
import { loadState, saveState } from '../utils/storage';

const initialState = {
  currentStage: loadState('currentStage', 3),
  journeyProgress: loadState('journeyProgress', 37),
  quotation: loadState('quotation', INITIAL_QUOTATION),
  visa: loadState('visa', INITIAL_VISA_DETAILS),
  travel: loadState('travel', INITIAL_TRAVEL_DETAILS),
  treatment: loadState('treatment', INITIAL_TREATMENT_DETAILS),
  recovery: loadState('recovery', INITIAL_RECOVERY_DETAILS),
  returnHome: loadState('returnHome', INITIAL_RETURN_HOME_DETAILS)
};

const journeySlice = createSlice({
  name: 'journey',
  initialState,
  reducers: {
    setStage: (state, action) => {
      state.currentStage = action.payload;
      state.journeyProgress = Math.round((action.payload / 8) * 100);
      saveState('currentStage', state.currentStage);
      saveState('journeyProgress', state.journeyProgress);
    },
    acceptQuotation: (state) => {
      state.quotation.status = 'ACCEPTED';
      state.currentStage = 4; // Advance to Medical Visa
      state.journeyProgress = 50;
      state.visa.currentStatus = 'Documents Pending';
      saveState('quotation', state.quotation);
      saveState('currentStage', 4);
      saveState('journeyProgress', 50);
      saveState('visa', state.visa);
    },
    requestQuotationClarification: (state, action) => {
      state.quotation.status = 'REVISION_REQUESTED';
      state.quotation.patientQuestion = action.payload;
      saveState('quotation', state.quotation);
    },
    updateVisaStatus: (state, action) => {
      state.visa.currentStatus = action.payload;
      if (action.payload === 'Approved') {
        state.visa.progressStep = 5;
        state.currentStage = 5; // Advance to travel
        state.journeyProgress = 62;
        saveState('currentStage', 5);
        saveState('journeyProgress', 62);
      }
      saveState('visa', state.visa);
    },
    toggleVisaChecklist: (state, action) => {
      const idx = action.payload;
      if (state.visa.checklist[idx]) {
        state.visa.checklist[idx].completed = !state.visa.checklist[idx].completed;
        saveState('visa', state.visa);
      }
    },
    updateTravelDetails: (state, action) => {
      state.travel = {
        ...state.travel,
        ...action.payload
      };
      saveState('travel', state.travel);
    },
    updateTreatmentData: (state, action) => {
      state.treatment = {
        ...state.treatment,
        ...action.payload
      };
      saveState('treatment', state.treatment);
    },
    updateRecoveryData: (state, action) => {
      state.recovery = {
        ...state.recovery,
        ...action.payload
      };
      saveState('recovery', state.recovery);
    },
    submitFeedback: (state, action) => {
      state.returnHome.patientFeedbackSubmitted = true;
      state.returnHome.feedbackData = action.payload;
      state.currentStage = 8;
      state.journeyProgress = 100;
      saveState('returnHome', state.returnHome);
      saveState('journeyProgress', 100);
    }
  }
});

export const {
  setStage,
  acceptQuotation,
  requestQuotationClarification,
  updateVisaStatus,
  toggleVisaChecklist,
  updateTravelDetails,
  updateTreatmentData,
  updateRecoveryData,
  submitFeedback
} = journeySlice.actions;

export default journeySlice.reducer;
