import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  message: '',
  color: null,
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotifications(state, action) {
      state.visible = true;
      state.message = action.payload;
    },
    hideNotifications(state, action) {
      state.visible = false;
      state.message = '';
    },
    changeColorNotification(state, action) {
      state.visible = true;
      state.color = action.payload;
    },
  },
});

export const { addNotifications, hideNotifications, changeColorNotification } =
  notificationsSlice.actions;
