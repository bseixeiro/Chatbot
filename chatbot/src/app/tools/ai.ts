import { GoogleGenerativeAI } from "@google/generative-ai";

const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY == undefined? "" : process.env.NEXT_PUBLIC_GOOGLE_API_KEY
const genAI = new GoogleGenerativeAI(key);

async function getPromptReponse(conv: string){
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    console.log (conv)
    let reponse;
    try {
        const prompt = `Considère toi comme un dresseur Pokemon français, connaissant l'intégralité du pokédex français, de l'univers et des arènes. Sur tout autre point tu n'as aucune connaissance. Voici l'historique de la conversation : ${conv}, où tu es PokeChat, réponds uniquement à la dernière demande en te servant du contexte.`
        const result = await model.generateContent(prompt)
        reponse = result.response.text()
    }
    catch {
        reponse = "Désolé, suite à un problème technique je n'est pas été en capacité de répondre"
    }
    return reponse
}


export {getPromptReponse}