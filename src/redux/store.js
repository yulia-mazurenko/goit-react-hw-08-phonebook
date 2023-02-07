import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './features/auth/authSlice';
import { contactsReducer } from './features/contacts/contactsSlice';
import { notificationsMiddleware } from './features/notifications/notifications.middleware';
import { notificationsSlice } from './features/notifications/notificationsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    notifications: notificationsSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([notificationsMiddleware]);
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
