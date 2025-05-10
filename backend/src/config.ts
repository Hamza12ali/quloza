import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 4000;
export const userSecretKey = process.env.USER_SECRET_KEY as string;