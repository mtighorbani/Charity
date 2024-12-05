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
  phone_number: Number;
}
export const postLogin = async ({
  phone_number,
}: IRequestProps): Promise<IResponseProps | null> => {
  try {
    const response = await createLoginApi.post("/", {
      phone_number: phone_number,
    });

    const answerResponse: IResponseProps = response.data;
    return answerResponse;
  } catch (error: any) {
    if (error.response) {
      console.error("Error Response:", error.response.data);
    } else if (error.request) {
      console.error("No Response from Server:", error.request);
    } else {
      console.error("Error Setting Up Request:", error.message);
    }
    return null;
  }
};
