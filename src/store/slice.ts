import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SignUpState = {
  step: number;
  gender: string;
  name: string;
  email: string;
  age: string;
  agePreferences: string;
  contentPreferences: string;
  password: string;
};

const initialState: SignUpState = {
  step: 1,
  gender: "",
  name: "",
  email: "",
  age: "",
  agePreferences: "",
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
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setAge(state, action: PayloadAction<string>) {
      state.age = action.payload;
    },
    setAgePreferences(state, action: PayloadAction<string>) {
      state.agePreferences = action.payload;
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
  setGender,
  setName,
  setEmail,
  setAge,
  setAgePreferences,
  setContentPreferences,
  setPasssword,
} = signUpSlice.actions;

export default signUpSlice.reducer;
