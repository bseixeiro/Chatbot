import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

// const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY == undefined? "" : process.env.NEXT_PUBLIC_GOOGLE_API_KEY
const key ="AIzaSyA2oC0bLeVQSB_SsmYPKIFYHOR7ovqCtEM"
const genAI = new GoogleGenerativeAI(key);

export {genAI}
