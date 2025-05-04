'use server';

import { ai } from "@/app/ai/ai-instance";
import { z } from 'genkit';

const TranslateTextInputSchema = z.object({
    text: z.string().describe('The text to translate.'),
    sourceLanguage: z.string().describe('The source language name (e.g., "Ukrainian", "French").'),
    targetLanguage: z.string().describe('The target language name for the translation (e.g., "English", "Spanish").'),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

const TranslateTextOutputSchema = z.object({
    translatedText: z.string().describe('The translated text.'),
});
export type TranslateTextOutput = z.infer<typeof TranslateTextOutputSchema>;

export async function translateText(input: TranslateTextInput): Promise<TranslateTextOutput> {
    console.log(`Translating from ${input.sourceLanguage} to ${input.targetLanguage}: "${input.text}"`);
    try {
        let text = input.text;

        // Заміна "Oksana" або "Оксана" на "Оксана з Варашу"
        text = text.replace(/\b(Oksana|Оксана)\b/gi, 'Оксана з Варашу');

        const response = await ai.generate({
            prompt: `Translate the following text from ${input.sourceLanguage} to ${input.targetLanguage}. 
Only return the translated text. No explanations or additional phrases.

Text: "${text}"`
        });

        const translatedText = response.text.trim();
        console.log(`Translation result: "${translatedText}"`);
        return { translatedText };
    } catch (error) {
        console.error("Error during translation AI call:", error);
        throw new Error("AI translation failed.");
    }
}
