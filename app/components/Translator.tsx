'use client';

import React, { useEffect, useState } from 'react';
import TextBlock from "@/app/components/TextBlock";
import LangugeSwitcher from "@/app/components/LangugeSwitcher";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface TranslationResult {
    translatedText: string;
}

const Translator = () => {
    const [inputText, setInputText] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('en');
    const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

    // Використовуємо SpeechRecognition
    const { transcript, resetTranscript, listening } = useSpeechRecognition();

    // Оновлюємо inputText в реальному часі
    useEffect(() => {
        if (transcript) {
            setInputText(transcript);
        }
    }, [transcript]);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTargetLanguage(event.target.value);
    };

    const handleTranslate = async () => {
        if (!inputText.trim()) return;

        setLoading(true);
        setError('');
        setTranslatedText('');

        try {
            const response = await fetch('/api/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText, targetLanguage }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.error || 'Помилка під час перекладу.');
            }

            const data: TranslationResult = await response.json();
            setTranslatedText(data.translatedText);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // 🔁 Debounce: автоматичний переклад після паузи
    useEffect(() => {
        if (!inputText.trim()) return;

        if (debounceTimer) clearTimeout(debounceTimer);

        const timer = setTimeout(() => {
            handleTranslate();
        }, 1800);

        setDebounceTimer(timer);

        return () => clearTimeout(timer);
    }, [inputText, targetLanguage]);

    const handleStartListening = () => {
        SpeechRecognition.startListening();
    };

    const handleStopListening = () => {
        SpeechRecognition.stopListening();
    };

    return (
        <div className="p-10">
            <h1 className="text-yellow-400 text-5xl font-extrabold tracking-widest drop-shadow-lg">
                CLODE
            </h1>


            <TextBlock
                output={translatedText}
                value={inputText}
                onChange={handleInputChange}
                onStart={handleStartListening}
                listening={listening}
                handleStopListening={handleStopListening}
            />

            <div className="flex justify-center mt-10">
                <LangugeSwitcher
                    targetLanguage={targetLanguage}
                    handleLanguageChange={handleLanguageChange}
                    isLoading={loading}
                />
            </div>

            {error && <p className="text-red-500 mt-4">Помилка: {error}</p>}
        </div>
    );
};

export default Translator;
