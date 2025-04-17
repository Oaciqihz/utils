"use client";
import { ArrowLeft, Code, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const TailwindPlayGroundPage = () => {
    const [innerHTML, setInnerHTML] = useState("");

    return (
        <div className="p-4 relative shadow-inner ">
            <Script src="https://cdn.tailwindcss.com" />
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Tailwind Playground</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="htmlInput"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            HTML 代码:
                        </label>
                        <textarea
                            id="htmlInput"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64 dark:text-white"
                            placeholder="在此输入 HTML 代码"
                            onChange={(e) => setInnerHTML(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <label
                            htmlFor="preview"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            预览:
                        </label>
                        <div
                            id="preview"
                            className="bg-white shadow-md rounded p-4"
                            dangerouslySetInnerHTML={{ __html: innerHTML }}
                        >
                            {/* <!-- 预览内容将在此处显示 --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TailwindPlayGroundPage;
