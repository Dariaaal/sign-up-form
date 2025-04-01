import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AgePreferences } from "../models/AgePreferences";
import { Birthday } from "../models/Birthday";

type SignUpState = {
  step: number;
  gender: string;
  name: string;
  email: string;
  birthday: Birthday;
  agePreferences: AgePreferences;
  contentPreferences: string;
  password: string;
};

const initialState: SignUpState = {
  step: 1,
  gender: "",
  name: "",
  email: "",
  birthday: {
    month: "",
    day: "",
    year: ""
  },
  agePreferences: {
    from: "",
    to: "",
  },
  contentPreferences: "",
  password: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      state.step -= 1;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setBirthdayMonth(state, action: PayloadAction<string>) {
      state.birthday.month = action.payload;
    },
    setBirthdayDay(state, action: PayloadAction<string>) {
      state.birthday.day = action.payload;
    },
    setBirthdayYear(state, action: PayloadAction<string>) {
      state.birthday.year = action.payload;
    },
    setAgeFrom(state, action: PayloadAction<string>) {
      state.agePreferences.from = action.payload;
    },
    setAgeTo(state, action: PayloadAction<string>) {
      state.agePreferences.to = action.payload;
    },
    setContentPreferences(state, action: PayloadAction<string>) {
      state.contentPreferences = action.payload;
    },
    setPasssword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const {
  nextStep,
  previousStep,
  setGender,
  setName,
  setEmail,
  setBirthdayMonth,
  setBirthdayDay,
  setBirthdayYear,
  setAgeFrom,
  setAgeTo,
  setContentPreferences,
  setPasssword,
} = signUpSlice.actions;

export default signUpSlice.reducer;
