import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_DOCUMENTS } from '../data/mockData';
import { loadState, saveState } from '../utils/storage';

const initialState = {
  documents: loadState('documents', INITIAL_DOCUMENTS),
  selectedCategory: 'All'
};

const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    uploadDocument: (state, action) => {
      const newDoc = {
        id: `doc-${Date.now()}`,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        verified: false,
        size: '2.4 MB',
        doctor: 'Uploaded by Patient',
        ...action.payload
      };
      state.documents.unshift(newDoc);
      saveState('documents', state.documents);
    },
    deleteDocument: (state, action) => {
      state.documents = state.documents.filter(doc => doc.id !== action.payload);
      saveState('documents', state.documents);
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const { uploadDocument, deleteDocument, setCategory } = documentSlice.actions;
export default documentSlice.reducer;
