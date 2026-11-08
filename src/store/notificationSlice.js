import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_NOTIFICATIONS } from '../data/mockData';
import { loadState, saveState } from '../utils/storage';

const initialState = {
  notifications: loadState('notifications', INITIAL_NOTIFICATIONS),
  unreadCount: loadState('notifications', INITIAL_NOTIFICATIONS).filter(n => !n.read).length
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const notif = state.notifications.find(n => n.id === action.payload);
      if (notif && !notif.read) {
        notif.read = true;
        state.unreadCount = Math.max(0, state.unreadCount - 1);
        saveState('notifications', state.notifications);
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach(n => { n.read = true; });
      state.unreadCount = 0;
      saveState('notifications', state.notifications);
    },
    addNotification: (state, action) => {
      const newNotif = {
        id: `notif-${Date.now()}`,
        timestamp: 'Just now',
        read: false,
        ...action.payload
      };
      state.notifications.unshift(newNotif);
      state.unreadCount += 1;
      saveState('notifications', state.notifications);
    }
  }
});

export const { markAsRead, markAllAsRead, addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
