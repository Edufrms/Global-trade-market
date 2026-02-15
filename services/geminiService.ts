
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { SearchParams, MarketAnalysis, CompanySize } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function analyzeMarket(params: SearchParams): Promise<MarketAnalysis> {
  const prompt = `
    Analyze the business structure and trade landscape for ${params.country} focusing on the ${params.sector} sector with companies of ${params.size} size.
    
    Provide a detailed report in JSON format including:
    1. A 'summary' of the trade climate.
    2. 'topSectors' distribution (as an array of objects with 'name' and 'percentage').
    3. 'tradeBalance' status.
    4. 'strategicInsights' as an array of 4 key points for a foreign trade professional.
    5. 'suggestedCompanies' as an array of real notable companies in this specific niche (name, sector, size, description, exportCapability [1-10]).
    
    Use Google Search to find the most up-to-date information and real company names.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            topSectors: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  percentage: { type: Type.NUMBER }
                }
              }
            },
            tradeBalance: { type: Type.STRING },
            strategicInsights: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestedCompanies: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  sector: { type: Type.STRING },
                  size: { type: Type.STRING },
                  description: { type: Type.STRING },
                  exportCapability: { type: Type.NUMBER }
                }
              }
            }
          }
        }
      },
    });

    const data = JSON.parse(response.text || '{}');
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Resource',
      uri: chunk.web?.uri || '#'
    })) || [];

    return {
      ...data,
      sources
    };
  } catch (error) {
    console.error("Error fetching market analysis:", error);
    throw error;
  }
}
