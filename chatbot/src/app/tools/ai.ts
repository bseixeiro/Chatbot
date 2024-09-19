import { GoogleGenerativeAI } from "@google/generative-ai";

const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY == undefined? "" : process.env.NEXT_PUBLIC_GOOGLE_API_KEY
const genAI = new GoogleGenerativeAI(key);

async function getPromptReponse(prompt: string){
    console.log(genAI)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(prompt)
    return result.response.text()
}

export {getPromptReponse}