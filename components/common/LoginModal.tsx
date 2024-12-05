import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, FormControl, Input, InputAdornment } from "@mui/material";

//app
import BaseDialog from "../common/Dialog/Dialog";
import HomePageSelector from "@/store/home/HomePageSelector";
import { postLogin } from "../api/login";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { HomePageActions } from "@/store/home/HomePageSatate";

const LoginModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<number>();

  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(HomePageSelector().isLoginDialogOpen);

  const submitHandler = () => {
    phoneNumber && postLogin({ phone_number: phoneNumber });
  };

  return (
    <BaseDialog
      onClose={() =>
        dispatch(
          HomePageActions().isLoginDialogOpen({ isLoginDialogOpen: false })
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
            type="number"
            id="input-with-icon-adornment"
            value={phoneNumber}
            startAdornment={
              <InputAdornment position="end">
                <PhoneIcon />
              </InputAdornment>
            }
            onChange={(e) => setPhoneNumber(parseInt(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitHandler();
              }
            }}
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
