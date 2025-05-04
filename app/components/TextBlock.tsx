'use client'

import { useState } from "react";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { FaStopCircle } from "react-icons/fa";
import { CiMicrophoneOn ,  CiMicrophoneOff } from "react-icons/ci";

interface TextBlockProps {
    output: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onStart: () => void;
    handleStopListening: () => void;
    listening: boolean;
    list : boolean,
    onStartList: () => void;
    onStopList: () => void;
}

const TextBlock: React.FC<TextBlockProps> = ({
                                                 output,
                                                 value,
                                                 onChange,
                                                 onStart,
                                                 handleStopListening,
                                                 listening,
                                                    list,
                                                 onStartList,
                                                 onStopList
                                             }) => {
    const [fieldType, setFieldType] = useState<string | undefined>();

    return (
        <div>
            <div className="flex sm:flex-row flex-col w-full justify-between mt-10 gap-10">
                {/* Введення тексту */}
                <div className="flex items-start justify-center flex-col w-full sm:w-[48%]">
        <textarea
            onChange={onChange}
            value={value || ''}
            className="bg-gradient-to-tr p-3 font-semibold w-full h-[40vh] from-[#556BBE] rounded-[10px] via-[#556BBEcc] to-[#556BBE]"
        />
                    <div className="flex space-x-2 items-center gap-2 mt-5">
                        <div className="text-2xl">
                            <CiMicrophoneOn onClick={onStart} />
                        </div>
                        <div className="text-xl">
                            {listening && <FaStopCircle onClick={handleStopListening} />}
                        </div>
                    </div>
                </div>

                <div className="flex items-start  justify-center flex-col w-full sm:w-[48%]">
        <textarea
            className="bg-gradient-to-tr p-3 font-semibold w-full h-[40vh] rounded-[10px] from-[#1C2D6B] via-[#1C2D6Bcc] to-[#1C2D6B]"
            value={output}
            readOnly
        />
                    <div className="flex space-x-2 items-center gap-2 mt-5">
                        <div className="text-2xl">
                            <HiOutlineSpeakerWave onClick={onStartList} />
                        </div>
                        <div className="text-xl">
                            {list && <FaStopCircle onClick={onStopList} />}
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default TextBlock;
