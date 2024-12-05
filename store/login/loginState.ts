import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface logInProps {
  phone_number: number | null;
}

const initialState: logInProps = {
  phone_number: null,
};

export const chatInputSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    chatInput: (state, action: PayloadAction<logInProps>) => {
      state.phone_number = action.payload.phone_number;
    },
  },
});

// Action creators
export const chatInputActions = () => chatInputSlice.actions;

export default chatInputSlice.reducer;
