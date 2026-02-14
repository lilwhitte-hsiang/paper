import { GoogleGenAI } from "@google/genai";
import { RewriteMode } from "../types";
import { SYSTEM_INSTRUCTION, MODE_PROMPTS } from "../constants";

export const streamRewriteText = async (
  text: string,
  mode: RewriteMode,
  onChunk: (text: string) => void
): Promise<void> => {
  if (!text || !text.trim()) return;

  // Initialize Gemini Client inside the function.
  // This prevents the application from crashing on startup (white screen) if the API_KEY is missing.
  // The error will only occur when the user attempts to generate text.
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing in environment variables.");
    onChunk("Error: API_KEY is missing. Please configure it in your deployment settings.");
    return;
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });

  try {
    const prompt = `
      ${MODE_PROMPTS[mode]}
      
      User Input to Rewrite:
      "${text}"
    `;

    const result = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8, // Slightly higher temperature for better "burstiness" in creative writing
      }
    });

    for await (const chunk of result) {
        if (chunk.text) {
            onChunk(chunk.text);
        }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Provide a user-friendly error message in the output
    onChunk(`\n\n[System Error: Failed to connect to Gemini API. Please check your API Key configuration.]`);
    throw error;
  }
};