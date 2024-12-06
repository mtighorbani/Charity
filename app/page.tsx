"use client";
import HomePage from "@/components/home/HomePage";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className=" max-w-screen-xl  mx-auto mt-3  items-center justify-center">
        <HomePage />
      </div>
    </Provider>
  );
}
