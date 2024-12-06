import React from "react";
import { Alert, Snackbar } from "@mui/material";

interface SnackBarProps {
  text: string;
  severity: "success" | "info" | "warning" | "error";
  open: boolean;
  onClose: () => void;
}

const SnackBar = ({ onClose, open, severity, text }: SnackBarProps) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert
        classes={{ root: "w-72 rounded-xl justify-between" }}
        className="gap-4"
        severity={severity}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
