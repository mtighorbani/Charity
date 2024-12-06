import { createSelector } from "@reduxjs/toolkit/react";
import { IApplicationState } from "../IApplicationState";

const globalSelectorFields = {
  isLoginDialogOpen: createSelector(
    (state: IApplicationState) => state.GlobalState.isLoginDialogOpen,
    (isLoginDialogOpen) => isLoginDialogOpen
  ),
};

const globalSelector = () => globalSelectorFields;
export default globalSelector;
