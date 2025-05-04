'use server';

import {ai} from "@/app/ai/ai-instance";
import { z } from 'genkit';

// Input schema expects the full name of the target language for clarity in the prompt
const TranslateTextInputSchema = z.object({
    text: z.string().describe('The text to translate.'),
    targetLanguage: z.string().describe('The target language name for the translation (e.g., "Spanish", "French").'),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

const TranslateTextOutputSchema = z.object({
    translatedText: z.string().describe('The translated text.'),
});
export type TranslateTextOutput = z.infer<typeof TranslateTextOutputSchema>;

// The main function exported for use in the application
export async function translateText(input: TranslateTextInput): Promise<TranslateTextOutput> {
    console.log(`Translating "${input.text}" to ${input.targetLanguage}`);
    // Directly call the Genkit LLM to translate text
    try {
        const response = await ai.generate({
            prompt: `Translate the following text to ${input.targetLanguage}. Output only the translated text, without any introductory phrases like "Here is the translation:" or explanations.\n\nText: "${input.text}"`,
            // Optional: Configure model parameters if needed
            // config: { temperature: 0.7 }
        });
        const translatedText = response.text.trim();
        console.log(`Translation result: "${translatedText}"`);
        return { translatedText };
    } catch (error) {
        console.error("Error during translation AI call:", error);
        // Re-throw or handle error appropriately
        throw new Error("AI translation failed.");
    }
}

// Note: The tool-based approach and separate flow definition (translateTool, translateTextPrompt, translateTextFlow)
// from the original file are removed for simplification, as the direct ai.generate call is sufficient
// for this straightforward translation task. If more complex logic or multi-step processing were needed,
// reintroducing flows and tools would be appropriate.

