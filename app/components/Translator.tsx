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
    const [sourceLanguage, setSourceLanguage] = useState('uk');
    const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Speech Recognition
    const { transcript, resetTranscript, listening } = useSpeechRecognition();

    const handleSpeak = () => {
        if (translatedText) {
            const utterance = new SpeechSynthesisUtterance(translatedText);
            speechSynthesis.speak(utterance);
            setIsSpeaking(true);

            utterance.onend = () => {
                setIsSpeaking(false);
            };
        }
    };

    const handleStop = () => {
        speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    // Update inputText in real-time
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

    const handleSourceLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSourceLanguage(event.target.value);
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
                body: JSON.stringify({ text: inputText, sourceLanguage, targetLanguage }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.error || 'Translation error.');
            }

            const data: TranslationResult = await response.json();
            setTranslatedText(data.translatedText);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Debounce for automatic translation after a pause
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
            <h1 className="text-yellow-400 text-5xl font-extrabold tracking-widest drop-shadow-lg">CLODE</h1>

            <TextBlock
                onStartList={handleSpeak}
                onStopList={handleStop}
                list={isSpeaking}
                output={translatedText}
                value={inputText}
                onChange={handleInputChange}
                onStart={handleStartListening}
                listening={listening}
                handleStopListening={handleStopListening}
            />

            <div className="flex justify-center mt-10">
                <LangugeSwitcher
                    handleSourceLanguageChange={handleSourceLanguageChange}
                    sourceLanguage={sourceLanguage}
                    targetLanguage={targetLanguage}
                    handleLanguageChange={handleLanguageChange}
                    isLoading={loading}
                />
            </div>

            {error && <p className="text-red-500 mt-4">Error: {error}</p>}
        </div>
    );
};

export default Translator;
