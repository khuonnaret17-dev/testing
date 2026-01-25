
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCaption = async (topic: string, platform: string, language: 'km' | 'en' = 'km') => {
  const ai = getAIClient();
  const prompt = `Create a viral social media caption for ${platform} about: "${topic}". 
  Language: ${language === 'km' ? 'Khmer' : 'English'}. 
  Include relevant hashtags and emojis. Make it engaging and professional.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating caption:", error);
    return "Error generating content. Please try again.";
  }
};

export const generateViralHooks = async (topic: string) => {
  const ai = getAIClient();
  const prompt = `Generate 3 high-converting viral hooks in Khmer for a social media post about "${topic}". 
  These should be designed to stop people from scrolling in the first 3 seconds. 
  Output as a plain text list.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    return null;
  }
};

export const analyzePostLink = async (url: string) => {
  const ai = getAIClient();
  const prompt = `Analyze this social media URL: ${url}. 
  Since you cannot browse live, assume it is a recent business post. 
  Generate a "Boost Strategy" in Khmer including:
  1. Visibility Score (0-100)
  2. A "Golden Hook" (ឃ្លាទាក់ទាញខ្លាំង) to use as the first comment.
  3. Recommendation for distribution (e.g. specific Telegram group types).
  4. Suggested ad targeting for this specific platform.
  Make it look like a professional report.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    return "Analysis failed. Please check the link.";
  }
};

export const analyzeVisibility = async (content: string) => {
  const ai = getAIClient();
  const prompt = `Analyze this social media content and give a "Visibility Score" out of 100. 
  Content: "${content}"
  Provide feedback on:
  1. SEO Keywords used
  2. Emotional trigger
  3. Call to action strength
  Return as a short summary.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    return "Analysis unavailable.";
  }
};

export const generateImagePrompt = async (description: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { text: `A viral-style, high-contrast, eye-catching professional social media photo about: ${description}. Extremely detailed, cinematic lighting.` }
      ]
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};
