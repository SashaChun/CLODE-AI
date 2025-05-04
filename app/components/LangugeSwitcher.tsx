import React from "react";
import { FaSyncAlt } from "react-icons/fa";

interface LangugeSwitcherProps {
    targetLanguage: string;
    sourceLanguage : string;
    handleLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    isLoading: boolean;
    handleSourceLanguageChange : (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LangugeSwitcher: React.FC<LangugeSwitcherProps> = ({
                                                             targetLanguage,
                                                             handleLanguageChange,
                                                             isLoading,
                                                             sourceLanguage,
                                                             handleSourceLanguageChange
                                                         }) => {
    return (
        <div className="w-[80%] sm:w-[40%] h-[50px] flex justify-between items-center bg-[#1A254F] rounded-[30px] font-sans text-white text-sm tracking-wide shadow-md px-4 relative">
            <select
                id="targetLanguage"
                value={sourceLanguage}
                onChange={handleSourceLanguageChange}
                className="w-[30%] bg-transparent text-center font-semibold outline-none text-white appearance-none"
            >
                <option value="en" className="text-black">Англійська</option>
                <option value="uk" className="text-black">Українська</option>
                <option value="de" className="text-black">Німецька</option>
                <option value="fr" className="text-black">Французька</option>
                <option value="es" className="text-black">Іспанська</option>
            </select>

            <div className="w-[60px] h-[60px] bg-[#152F8D] rounded-full border-2 border-yellow-400 shadow-inner flex items-center justify-center">
                <FaSyncAlt className={`text-yellow-300 text-xl transition-transform ${isLoading ? 'animate-spin' : ''}`} />
            </div>

            <select
                id="targetLanguage"
                value={targetLanguage}
                onChange={handleLanguageChange}
                className="w-[30%] bg-transparent text-center font-semibold outline-none text-white appearance-none"
            >
                <option value="uk" className="text-black">Українська</option>
                <option value="en" className="text-black">Англійська</option>
                <option value="de" className="text-black">Німецька</option>
                <option value="fr" className="text-black">Французька</option>
                <option value="es" className="text-black">Іспанська</option>
            </select>
        </div>
    );
};

export default LangugeSwitcher;
