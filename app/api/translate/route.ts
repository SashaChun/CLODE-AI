// app/api/translate/route.ts
import { translateText, TranslateTextInput } from '../../ai/flows/translate-text'
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { text, targetLanguage }: TranslateTextInput = await request.json();

        if (!text || !targetLanguage) {
            return NextResponse.json({ error: 'Будь ласка, надайте текст та мову перекладу.' }, { status: 400 });
        }

        const result = await translateText({ text, targetLanguage });
        return NextResponse.json(result);
    } catch (error: any) {
        console.error('Помилка в API endpoint:', error);
        return NextResponse.json({ error: error.message || 'Не вдалося перекласти текст.' }, { status: 500 });
    }
}