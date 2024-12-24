"use client";

import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, FormControl, Input, InputAdornment } from "@mui/material";
import { z } from "zod";

// App imports
import BaseDialog from "../common/Dialog/Dialog";
import HomePageSelector from "@/store/global/globalSelector";
import { postLogin } from "../api/login";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { globalActions } from "@/store/global/globalState";

const LoginModal = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(HomePageSelector().isLoginDialogOpen);

  const phoneNumberSchema = z
    .string()
    .length(11, "شماره تماس باید ۱۱ رقم باشد")
    .regex(/^0\d{10}$/, "شماره تماس باید با ۰ شروع شود و فقط اعداد باشد");

  const submitHandler = () => {
    try {
      phoneNumberSchema.parse(phoneNumber);
      setError(false);
      postLogin({ phone_number: phoneNumber });
      setPhoneNumber("");
    } catch (e) {
      setError(true);
      if (e instanceof z.ZodError) {
        alert(e.errors[0]?.message || "خطای نامشخص");
      } else {
        alert("خطای ناشناخته");
      }
    }
  };

  return (
    <BaseDialog
      onClose={() =>
        dispatch(
          globalActions().isLoginDialogOpen({ isLoginDialogOpen: false })
        )
      }
      onOpen={isOpen}
      title="ورود یا ثبت نام"
    >
      <div
        style={{ padding: "1rem", textAlign: "center" }}
        className="w-72 h-64 font-semibold text-lg space-y-8"
      >
        <p className="text-gray-700">لطفا شماره تماس خود را وارد کنید</p>
        <FormControl lang="fa">
          <Input
            error={error}
            value={phoneNumber}
            startAdornment={
              <InputAdornment position="end">
                <PhoneIcon />
              </InputAdornment>
            }
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitHandler();
              }
            }}
            placeholder="شماره تماس را وارد کنید"
          />
        </FormControl>
        <Button
          className="w-32 bg-blue text-white mt-10"
          onClick={submitHandler}
        >
          ادامه
        </Button>
      </div>
    </BaseDialog>
  );
};

export default LoginModal;
