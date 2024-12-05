import axios from "axios";

const createAnswerApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_OPENAI_URL,
  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

export default createAnswerApi;
