import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomePageSateProps {
  isLoginDialogOpen: boolean;
}

const initialState: HomePageSateProps = {
  isLoginDialogOpen: false,
};

export const HomePageSate = createSlice({
  name: "HomePageState",
  initialState,
  reducers: {
    isLoginDialogOpen: (state, action: PayloadAction<HomePageSateProps>) => {
      state.isLoginDialogOpen = action.payload.isLoginDialogOpen;
    },
  },
});

// Action creators
export const HomePageActions = () => HomePageSate.actions;

export default HomePageSate.reducer;
