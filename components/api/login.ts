'use client'
import createLoginApi from "./api";

export interface IResponseProps {
  choices: {
    finish_reason?: string;
    message: {
      content: string;
      role: string;
    };
  }[];
}

interface IRequestProps {
  phone_number: string;
}

export const postLogin = async ({
  phone_number,
}: IRequestProps): Promise<IResponseProps | null> => {
  try {
    const response = await createLoginApi.post("/otp", {
      phone_number,
    });
    console.log("Response Received:", response.status, response.data);
    return response.data as IResponseProps;
  } catch (error: any) {

    if (error) {
      console.log("Error Response Data:", error.response.data);
    } else if (error.request) {
      console.log("No Response from Server:", error.request);
    } else {
      console.log("Error Setting Up Request:", error.message);
    }
    return null;
  }
};
