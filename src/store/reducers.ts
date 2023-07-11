import { createReducer } from '@reduxjs/toolkit';
import { setUserInformation, setPersonalInformation } from './actions';
import User  from '../types/User';

interface UserState extends User {
  date_of_birth: string;
  gender: string;
  marital_status: string;
  education: string;
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  date_of_birth: '',
  gender: '',
  marital_status: '',
  education: '',
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserInformation, (state, action) => {
    state.firstName = action.payload.firstName;
    state.lastName = action.payload.lastName;
    state.email = action.payload.email;
  });

  builder.addCase(setPersonalInformation, (state, action) => {
    state.date_of_birth = action.payload.date_of_birth;
    state.gender = action.payload.gender;
    state.marital_status = action.payload.marital_status;
    state.education = action.payload.education;
  });
});
