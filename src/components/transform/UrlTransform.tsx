"use client";

import { useState } from "react";
import Copy from "../ui/copy";

const UrlTransform: React.FC = () => {
    const [encodedURL, setEncodedURL] = useState<string>("");
    const [decodedURL, setDecodedURL] = useState<string>("");

    return (
        <div className="bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                URL 编码转换
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8">
                <div id="decode">
                    <div className="flex justify-between items-center mb-2 font-bold text-gray-600">
                        <span>Decode Url</span>
                        <Copy label="Copy" text={decodedURL} />
                    </div>
                    <textarea
                        value={decodedURL}
                        onChange={(e) => {
                            setEncodedURL(encodeURIComponent(e.target.value));
                            setDecodedURL(e.target.value)
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64"
                        placeholder="https://github.com"
                    />
                </div>
                <div id="encode">
                    <div className="flex justify-between items-center mb-2 text-gray-600 font-bold">
                        <span>Encode Url</span>
                        <Copy label="Copy" text={encodedURL} />
                    </div>
                    <textarea
                        value={encodedURL}
                        onChange={(e) => {
                            setDecodedURL(decodeURIComponent(e.target.value));
                            setEncodedURL(e.target.value)
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64"
                    />
                </div>
            </div>
        </div>
    );
};

export default UrlTransform;
