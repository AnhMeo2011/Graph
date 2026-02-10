import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function Translate(description) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: description,
      config: {
        systemInstruction: `
Convert math descriptions into functions.
Return only the final result.
Format: f(x) = ...
No explanations.
Shorten if possible (e.g. 3*x = 3x)
`,
      },
    });

    return response.text.trim();
  } catch (err) {
    console.error(err);
    return "Translation error";
  }
}
Translate("a sine wave with amplitude 3 and wavelength 2").then((result) =>
  console.log(result),
);
