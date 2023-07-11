import { createAction } from '@reduxjs/toolkit';
import User from '../types/User';

export const setUserInformation = createAction<User>(
  'user/setUserInformation'
);
export const setPersonalInformation = createAction<User>(
  'user/setPersonalInformation'
);
