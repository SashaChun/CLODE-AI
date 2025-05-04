import React from "react";
import { FaSyncAlt } from "react-icons/fa";

interface LangugeSwitcherProps {
    targetLanguage: string;
    handleLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    isLoading: boolean;
}

const LangugeSwitcher: React.FC<LangugeSwitcherProps> = ({
                                                             targetLanguage,
                                                             handleLanguageChange,
                                                             isLoading
                                                         }) => {
    return (
        <div className="w-[40%] h-[50px] flex justify-between items-center bg-[#1A254F] rounded-[30px] font-sans text-white text-sm tracking-wide shadow-md px-4 relative">
            <h1 className="w-[30%] text-center font-semibold">UKRAINE</h1>

            <div className="w-[60px] h-[60px] bg-[#152F8D] rounded-full border-2 border-yellow-400 shadow-inner flex items-center justify-center">
                <FaSyncAlt className={`text-yellow-300 text-xl transition-transform ${isLoading ? 'animate-spin' : ''}`} />
            </div>

            <select
                id="targetLanguage"
                value={targetLanguage}
                onChange={handleLanguageChange}
                className="w-[30%] bg-transparent text-center font-semibold outline-none text-white appearance-none"
            >
                <option value="en" className="text-black">Англійська</option>
                <option value="de" className="text-black">Німецька</option>
                <option value="fr" className="text-black">Французька</option>
                <option value="es" className="text-black">Іспанська</option>
            </select>
        </div>
    );
};

export default LangugeSwitcher;
