"use client";

import * as React from "react";

import CloseIcon from "@mui/icons-material/Close";
import getClassNames from "@/utils/getClassName";
import { Dialog, IconButton, DialogTitle } from "@mui/material";

interface BaseModalProps {
  onOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactElement | string;
  title?: string;
}

const BaseModal = ({
  children,
  className,
  onClose,
  onOpen,
  title,
}: BaseModalProps) => {
  return (
    <Dialog
      open={onOpen}
      onClose={onClose}
      keepMounted
      className={getClassNames([
        className,
        "w-[50%] sm:w-[40%]  mx-auto px-12 ",
      ])}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="px-5 ">
        <div className="flex justify-between w-full text-blue">
          {title && (
            <DialogTitle className="text-right pr-2">{title}</DialogTitle>
          )}
          <IconButton aria-label="close" onClick={onClose} color="primary">
            <CloseIcon />
          </IconButton>
        </div>
        {children}
      </div>
    </Dialog>
  );
};

export default BaseModal;
