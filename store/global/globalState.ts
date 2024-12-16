import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GlobalSateProps {
  isLoginDialogOpen: boolean;
  isSnackbar: boolean;
}

const initialState: GlobalSateProps = {
  isLoginDialogOpen: false,
  isSnackbar: false,
};

export const globalSate = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {
    isLoginDialogOpen: (
      state,
      action: PayloadAction<Omit<GlobalSateProps, "isSnackbar">>
    ) => {
      state.isLoginDialogOpen = action.payload.isLoginDialogOpen;
    },
    isSnackbar: (
      state,
      action: PayloadAction<Omit<GlobalSateProps, "isLoginDialogOpen">>
    ) => {
      state.isSnackbar = action.payload.isSnackbar;
    },
  },
});

// Action creators
export const globalActions = () => globalSate.actions;

export default globalSate.reducer;
