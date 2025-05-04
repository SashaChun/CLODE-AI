'use client'

import { useState } from "react";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { FaStopCircle } from "react-icons/fa";

interface TextBlockProps {
    output: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onStart: () => void;
    handleStopListening: () => void;
    listening: boolean;
}

const TextBlock: React.FC<TextBlockProps> = ({
                                                 output,
                                                 value,
                                                 onChange,
                                                 onStart,
                                                 handleStopListening,
                                                 listening
                                             }) => {
    const [fieldType, setFieldType] = useState<string | undefined>();

    return (
        <div>
            <div className="flex justify-between mt-10 gap-10">
                <textarea
                    onChange={onChange}
                    value={value || ''}
                    className="bg-gradient-to-tr p-3 font-semibold w-[50%] h-[40vh] from-[#556BBE] rounded-[10px] via-[#556BBEcc] to-[#556BBE]"
                />

                <textarea
                    className="bg-gradient-to-tr p-3 font-semibold w-[50%] h-[40vh] rounded-[10px] from-[#1C2D6B] via-[#1C2D6Bcc] to-[#1C2D6B]"
                    value={output}
                    readOnly
                />
            </div>

            <div className="flex space-x-2 items-center gap-2">
                <div className="mt-5 text-2xl">
                    <HiOutlineSpeakerWave onClick={onStart} />
                </div>
                <div className="mt-5 text-xl">
                    {listening && <FaStopCircle onClick={handleStopListening} />}
                </div>
            </div>
        </div>
    );
};

export default TextBlock;
