import React from 'react';

interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    output: string;
    onStartList: () => void;
    onStopList: () => void;
    onStart: () => void;
    listening: boolean;
    handleStopListening: () => void;
}

const TextBlock = ({
                       value,
                       onChange,
                       output,
                       onStartList,
                       onStopList,
                       onStart,
                       listening,
                       handleStopListening
                   }: Props) => {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative">
                <textarea
                    value={value}
                    onChange={onChange}
                    placeholder="Введіть або скажіть щось..."
                    className="w-full h-64 p-4 text-lg border-2 border-yellow-400 rounded-xl shadow-md resize-none focus:outline-none focus:border-yellow-500 transition"
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                    {!listening ? (
                        <button
                            onClick={onStart}
                            className="bg-yellow-400 text-white px-4 py-2 rounded-full shadow hover:bg-yellow-500 transition"
                        >
                            🎙 Почати
                        </button>
                    ) : (
                        <button
                            onClick={handleStopListening}
                            className="bg-red-400 text-white px-4 py-2 rounded-full shadow hover:bg-red-500 transition"
                        >
                            🛑 Стоп
                        </button>
                    )}
                </div>
            </div>

            <div className="relative bg-[#556BBE] border-2 border-yellow-300 rounded-xl p-4 h-64 shadow-md">
                <p className="text-lg text-gray-800 overflow-y-auto h-full whitespace-pre-wrap">
                    {output || 'Тут зʼявиться переклад...'}
                </p>
                <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                        onClick={onStartList}
                        className="bg-green-400 text-white px-4 py-2 rounded-full shadow hover:bg-green-500 transition"
                    >
                        🔊
                    </button>
                    <button
                        onClick={onStopList}
                        className="bg-gray-400 text-white px-4 py-2 rounded-full shadow hover:bg-gray-500 transition"
                    >
                        🔇
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextBlock;
