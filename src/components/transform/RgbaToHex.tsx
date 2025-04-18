"use client";

import Copy from "../ui/copy";
import { useState } from "react";
import { Range } from "react-range";

const RgbaToHex: React.FC = () => {
    const [rgba, setRgba] = useState<string>("");
    const [hex, setHex] = useState<string>("");
    const [alpha, setAlpha] = useState([50]);

    // 處理rgba輸入
    const handleRgbaChange = (value: string) => {
        // 解析 RGBA 字符串
        function parseRGBA(
            rgbaString: string
        ): { r: number; g: number; b: number; a: number } | null {
            // 使用正則表達式匹配 RGBA 格式
            const rgbaRegex =
                /^(\d{1,3})(?:\s*,\s*(\d{1,3}))?(?:\s*,\s*(\d{1,3}))?(?:\s*,\s*([\d.]+))?$/;
            const match = rgbaString.trim().match(rgbaRegex);

            if (!match) {
                return null; // 如果不匹配格式，直接返回 null
            }

            // 解析 RGB 和 Alpha 值
            const [_, r, g, b, a = "1"] = match; // 如果沒有 alpha，默認為 "1"
            const parsedR = parseInt(r, 10);
            const parsedG = parseInt(g, 10);
            const parsedB = parseInt(b, 10);
            const parsedA = parseFloat(a);

            // 驗證是否為有效數字並檢查範圍
            const isValidNumber = (
                value: number,
                min: number,
                max: number
            ): boolean => value >= min && value <= max;

            if (
                isValidNumber(parsedR, 0, 255) &&
                isValidNumber(parsedG, 0, 255) &&
                isValidNumber(parsedB, 0, 255) &&
                isValidNumber(parsedA, 0, 1)
            ) {
                setAlpha([Math.round(parsedA * 100)]);
                return { r: parsedR, g: parsedG, b: parsedB, a: parsedA };
            }

            return null; // 如果數值不在範圍內，返回 null
        }
        const rgbaToHexResult = (rgba: string) => {
            const rgbaRes = parseRGBA(rgba);
            if (rgbaRes) {
                const { r, g, b, a } = rgbaRes;
                const hex = (r << 16) | (g << 8) | b;
                const alpha = Math.round(a * 255)
                    .toString(16)
                    .padStart(2, "0");
                return `#${(0x1000000 + hex).toString(16).slice(1)}${
                    a !== 1 ? alpha : ""
                }`;
            } else {
                return ``;
            }
        };

        // 移除多餘字符串
        const str = value.replace(/rgba\(|\)/g, "").replace(/rgb\(|\)/g, "");
        setRgba(str);
        const hexResult = rgbaToHexResult(str);
        setHex(hexResult);
    };

    // 處理hex輸入
    const handleHexChange = (value: string) => {
        setHex(value);
        const hex = value.replace(/#/g, "");
        const hexToRgba = (hex: string): string => {
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            const a =
                hex.length === 8
                    ? (parseInt(hex.slice(6, 8), 16) / 255).toFixed(2)
                    : "";
            setAlpha(a ? [Math.round(parseFloat(a) * 100)] : [100]);
            return a ? `${r}, ${g}, ${b}, ${a}` : `${r}, ${g}, ${b}`;
        };
        setRgba(hex.length === 6 || hex.length === 8 ? hexToRgba(hex) : "");
    };

    // 處理透明度變化
    const handleAlphaChange = (values: number[]) => {
        setAlpha(values);
        const alpha = values[0] / 100;
        const hexAlpha = Math.round(alpha * 255)
            .toString(16)
            .padStart(2, "0");
        if (rgba && rgba.length >= 3) {
            const [r, g, b] = rgba.split(",").map((v) => parseInt(v.trim()));
            setRgba(`${r}, ${g}, ${b}, ${alpha}`);
        }
        if (hex && hex.length >= 7 && hex.length <= 9) {
            setHex(hex.slice(0, 7) + hexAlpha);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                RGBA 与 HEX 互转
            </h2>
            <div className="flex flex-col gap-8">
                {/* Inner */}
                <div
                    id="inner"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8"
                >
                    <div id="rgba">
                        <div className="flex justify-between items-center mb-2 font-bold text-gray-600">
                            <span>RGBA Color</span>
                            <Copy label="Copy" text={`rgba(${rgba.trim()})`} />
                        </div>
                        <input
                            value={rgba}
                            onChange={(e) => handleRgbaChange(e.target.value)}
                            className="dark:text-black dark:border-gray-400 w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                            placeholder="255, 0, 0, 0.5"
                        />
                    </div>
                    <div id="hex">
                        <div className="flex justify-between items-center mb-2 text-gray-600 font-bold">
                            <span>HEX Color</span>
                            <Copy label="Copy" text={hex} />
                        </div>
                        <input
                            value={hex}
                            onChange={(e) => handleHexChange(e.target.value)}
                            className="dark:text-black dark:border-gray-400 w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                            placeholder="#FF0000FF"
                        />
                    </div>
                </div>
                {/* Color Preview */}
                <div id="color-preview">
                    <p className="mb-2 text-gray-600 font-bold">
                        Color Preview
                    </p>
                    <div
                        className="dark:text-black dark:border-gray-400 h-[50px] rounded-md border"
                        style={{ background: hex && rgba ? hex : "" }}
                    ></div>
                </div>
                {/* Alpha */}
                <div id="alpha">
                    <p className="mb-2 text-gray-600 font-bold">
                        Transparency (Alpha)
                    </p>
                    <Range
                        label="Select your value"
                        step={1}
                        min={0}
                        max={100}
                        values={alpha}
                        onChange={(values) => handleAlphaChange(values)}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                className="h-[8px] w-full rounded-[8px]"
                                style={{
                                    ...props.style,
                                    backgroundImage: `linear-gradient(to right, ${
                                        hex ? hex.slice(0, 7) : "#000000"
                                    }00, ${
                                        hex ? hex.slice(0, 7) : "#000000"
                                    }ff)`,
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div
                                {...props}
                                key={props.key}
                                className="w-[20px] h-[20px] shadow-2xl rounded-full bg-[#2287f4]"
                                style={props.style}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default RgbaToHex;
