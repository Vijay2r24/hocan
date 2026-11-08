import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_PATIENT } from '../data/mockData';
import { loadState, saveState } from '../utils/storage';

export const DEMO_PROFILES = [
  {
    id: 'HKN-2024-8841',
    fullName: 'Michael Chen',
    email: 'michael.chen@gmail.com',
    phone: '+44 7911 123456',
    dialCode: '+44',
    country: 'United Kingdom',
    nationality: 'British',
    dob: '1972-04-18',
    gender: 'Male',
    bloodGroup: 'O Positive',
    currentStage: 3,
    journeyProgress: 37,
    status: 'Quotation Ready for Review',
    preferredTreatment: 'Robotic Total Knee Replacement',
    speciality: 'Orthopedics & Joint Replacement'
  },
  {
    id: 'HKN-2024-9102',
    fullName: 'Amina Yusuf',
    email: 'amina.yusuf@gmail.com',
    phone: '+254 712 345678',
    dialCode: '+254',
    country: 'Kenya',
    nationality: 'Kenyan',
    dob: '1986-09-12',
    gender: 'Female',
    bloodGroup: 'A Positive',
    currentStage: 1,
    journeyProgress: 12,
    status: 'Enquiry Received - Under Clinical Triage',
    preferredTreatment: 'Heart Valve Replacement (CABG)',
    speciality: 'Cardiology & Cardiac Surgery'
  },
  {
    id: 'HKN-2024-7730',
    fullName: 'Rashid Al-Maktoum',
    email: 'rashid.maktoum@gmail.com',
    phone: '+968 9123 4567',
    dialCode: '+968',
    country: 'Oman',
    nationality: 'Omani',
    dob: '1979-11-23',
    gender: 'Male',
    bloodGroup: 'B Positive',
    currentStage: 5,
    journeyProgress: 62,
    status: 'Arrived in Delhi - Hotel Check-in Done',
    preferredTreatment: 'Endoscopic Spine Decompression',
    speciality: 'Neurology & Spine Surgery'
  }
];

const savedUser = loadState('user', INITIAL_PATIENT);
const savedIsAuth = loadState('isAuthenticated', true);

const initialState = {
  user: savedUser,
  isAuthenticated: savedIsAuth,
  demoProfiles: DEMO_PROFILES,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = {
        ...INITIAL_PATIENT,
        ...action.payload
      };
      saveState('user', state.user);
      saveState('isAuthenticated', true);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      saveState('isAuthenticated', false);
      saveState('user', null);
    },
    register: (state, action) => {
      const newUser = {
        ...INITIAL_PATIENT,
        id: `HKN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
        ...action.payload,
        currentStage: 1,
        journeyProgress: 12,
        status: 'Enquiry Pending Submission'
      };
      state.isAuthenticated = true;
      state.user = newUser;
      saveState('user', newUser);
      saveState('isAuthenticated', true);
    },
    switchProfile: (state, action) => {
      const selected = DEMO_PROFILES.find(p => p.id === action.payload);
      if (selected) {
        state.user = {
          ...INITIAL_PATIENT,
          ...selected
        };
        state.isAuthenticated = true;
        saveState('user', state.user);
        saveState('isAuthenticated', true);
      }
    },
    updateProfile: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
      saveState('user', state.user);
    }
  }
});

export const { login, logout, register, switchProfile, updateProfile } = authSlice.actions;
export default authSlice.reducer;
