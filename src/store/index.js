import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import journeyReducer from './journeySlice';
import enquiryReducer from './enquirySlice';
import documentReducer from './documentSlice';
import notificationReducer from './notificationSlice';
import messageReducer from './messageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    journey: journeyReducer,
    enquiry: enquiryReducer,
    documents: documentReducer,
    notifications: notificationReducer,
    messages: messageReducer
  }
});

export default store;
