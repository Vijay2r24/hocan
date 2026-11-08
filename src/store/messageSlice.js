import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_MESSAGES } from '../data/mockData';
import { loadState, saveState } from '../utils/storage';

const initialState = {
  messages: loadState('messages', INITIAL_MESSAGES),
  isTyping: false
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const newMsg = {
        id: `msg-${Date.now()}`,
        sender: 'patient',
        senderName: action.payload.senderName || 'You',
        senderAvatar: '',
        text: action.payload.text,
        attachment: action.payload.attachment || null,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: true
      };
      state.messages.push(newMsg);
      saveState('messages', state.messages);
    },
    receiveCoordinatorReply: (state, action) => {
      const replyMsg = {
        id: `msg-${Date.now()}`,
        sender: 'coordinator',
        senderName: 'Priya Sharma (Hokena Care)',
        senderAvatar: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=300&q=80',
        text: action.payload,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: false
      };
      state.messages.push(replyMsg);
      saveState('messages', state.messages);
    },
    setTyping: (state, action) => {
      state.isTyping = action.payload;
    }
  }
});

export const { sendMessage, receiveCoordinatorReply, setTyping } = messageSlice.actions;
export default messageSlice.reducer;
