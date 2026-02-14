import { GoogleGenAI } from "@google/genai";
import { RewriteMode } from "../types";
import { SYSTEM_INSTRUCTION, MODE_PROMPTS } from "../constants";

// Initialize Gemini Client
// CRITICAL: process.env.API_KEY is assumed to be available in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const streamRewriteText = async (
  text: string,
  mode: RewriteMode,
  onChunk: (text: string) => void
): Promise<void> => {
  if (!text || !text.trim()) return;

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
    throw error;
  }
};