import { configuration,OpenAIapi } from "openai";
const config=new configuration({
    organization:process.env.OPEN_AI_ORGANIZATION,
    apikey:process.env.OPENAI_API_KEY,
    // organization:process.env.OPEN_AI_ORGANIZATION,
    
})
const openai=new OpenAIapi(config);

export default openai
