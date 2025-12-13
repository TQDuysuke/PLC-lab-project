import { GoogleGenAI } from "@google/genai";

// Initialize the client. The API key is injected from the environment.
// Note: In a real production app, client-side API key usage should be guarded or proxied.
// For this demo structure, we use process.env.API_KEY as per instructions.

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing. Please provide a valid API_KEY in the environment.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLabImage = async (prompt: string): Promise<string | null> => {
  const ai = getClient();
  if (!ai) return null;

  try {
    // Using 'gemini-2.5-flash-image' (nano banana) as requested for image generation
    const model = 'gemini-2.5-flash-image';
    
    // Improve prompt for realistic lab setting
    const enhancedPrompt = `Photorealistic industrial photography, ${prompt}, cinematic lighting, 8k resolution, modern factory automation context.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            text: enhancedPrompt,
          },
        ],
      },
      config: {
        // Image generation doesn't use standard text config, but specific parameters can vary.
        // For gemini-2.5-flash-image via generateContent, we expect base64 inlineData in response.
      }
    });

    // Parse response for image data
    if (response.candidates && response.candidates.length > 0) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};
