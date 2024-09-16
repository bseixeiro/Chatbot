import { genAI } from "./connexion";

async function getPromptReponse(prompt: string){
    console.log(genAI)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(prompt)
    return result.response.text()
}

export {getPromptReponse}