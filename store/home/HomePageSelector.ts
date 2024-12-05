import { createSelector } from "@reduxjs/toolkit/react";
import { IApplicationState } from "../IApplicationState";

const HomePageSelectorFields = {
  isLoginDialogOpen: createSelector(
    (state: IApplicationState) => state.HomePageState.isLoginDialogOpen,
    (isLoginDialogOpen) => isLoginDialogOpen
  ),
};

const HomePageSelector = () => HomePageSelectorFields;
export default HomePageSelector;
