import React from "react";

interface TransLateButtonProps {
    handleTranslate: () => void;
}

const TransLateButton: React.FC<TransLateButtonProps> = ({ handleTranslate }) => {
    return (
        <button
            onClick={handleTranslate}
            className="px-4 py-2 rounded-[10px] bg-yellow-400 text-black font-semibold"
        >
            Перекласти
        </button>
    );
};

export default TransLateButton;
