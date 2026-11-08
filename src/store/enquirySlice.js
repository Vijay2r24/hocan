import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_ENQUIRIES } from '../data/mockData';
import { loadState, saveState } from '../utils/storage';

const initialState = {
  enquiries: loadState('enquiries', INITIAL_ENQUIRIES),
  draftEnquiry: loadState('draftEnquiry', null),
  lastSubmittedId: null
};

const enquirySlice = createSlice({
  name: 'enquiry',
  initialState,
  reducers: {
    addEnquiry: (state, action) => {
      const newEnquiry = {
        id: `HKN-ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        status: 'Under Clinical Review',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        documentsCount: action.payload.documents ? action.payload.documents.length : 1,
        ...action.payload
      };
      state.enquiries.unshift(newEnquiry);
      state.lastSubmittedId = newEnquiry.id;
      state.draftEnquiry = null;
      saveState('enquiries', state.enquiries);
      saveState('draftEnquiry', null);
    },
    saveDraft: (state, action) => {
      state.draftEnquiry = action.payload;
      saveState('draftEnquiry', action.payload);
    },
    clearDraft: (state) => {
      state.draftEnquiry = null;
      saveState('draftEnquiry', null);
    }
  }
});

export const { addEnquiry, saveDraft, clearDraft } = enquirySlice.actions;
export default enquirySlice.reducer;
