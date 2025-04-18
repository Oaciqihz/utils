import RgbaToHex from "@/src/components/transform/RgbaToHex";



const TransformPage: React.FC = () => {
    return (
        <div className="p-4 relative shadow-inner ">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Transform Tools</h1>
                <RgbaToHex />

            </div>
        </div>
    );
};

export default TransformPage;



                // {/* RGBA <-> HEX */}
                // <div className="bg-white rounded-xl shadow p-6 mb-8">
                //     <h2 className="text-xl font-semibold text-gray-700 mb-4">
                //         RGBA 与 HEX 互转
                //     </h2>
                //     <div className="flex flex-col md:flex-row gap-6">
                //         {/* RGBA -> HEX */}
                //         <div className="flex-1">
                //             <div className="mb-2 font-medium text-gray-600">
                //                 RGBA 转 HEX
                //             </div>
                //             <div className="flex gap-2 mb-2">
                //                 <input
                //                     type="number"
                //                     min={0}
                //                     max={255}
                //                     value={rgba.r}
                //                     onChange={(e) =>
                //                         setRgba({ ...rgba, r: e.target.value })
                //                     }
                //                     className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                //                     placeholder="R"
                //                 />
                //                 <input
                //                     type="number"
                //                     min={0}
                //                     max={255}
                //                     value={rgba.g}
                //                     onChange={(e) =>
                //                         setRgba({ ...rgba, g: e.target.value })
                //                     }
                //                     className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                //                     placeholder="G"
                //                 />
                //                 <input
                //                     type="number"
                //                     min={0}
                //                     max={255}
                //                     value={rgba.b}
                //                     onChange={(e) =>
                //                         setRgba({ ...rgba, b: e.target.value })
                //                     }
                //                     className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                //                     placeholder="B"
                //                 />
                //                 <input
                //                     type="number"
                //                     min={0}
                //                     max={1}
                //                     step={0.01}
                //                     value={rgba.a}
                //                     onChange={(e) =>
                //                         setRgba({ ...rgba, a: e.target.value })
                //                     }
                //                     className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                //                     placeholder="A"
                //                 />
                //                 <button
                //                     className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                //                     onClick={handleRgbaToHex}
                //                 >
                //                     转换
                //                 </button>
                //             </div>
                //             <div className="flex items-center gap-2 mt-2">
                //                 <span className="text-gray-500">HEX:</span>
                //                 <span className="font-mono text-lg text-blue-700">
                //                     {rgbaToHexResult}
                //                 </span>
                //                 <div
                //                     className="w-6 h-6 rounded border ml-2"
                //                     style={{
                //                         background: `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`,
                //                     }}
                //                 />
                //             </div>
                //         </div>
                //         {/* HEX -> RGBA */}
                //         <div className="flex-1">
                //             <div className="mb-2 font-medium text-gray-600">
                //                 HEX 转 RGBA
                //             </div>
                //             <div className="flex gap-2 mb-2">
                //                 <input
                //                     type="text"
                //                     value={hexInput}
                //                     onChange={(e) =>
                //                         setHexInput(e.target.value)
                //                     }
                //                     className="w-32 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                //                     placeholder="#RRGGBB"
                //                 />
                //                 <button
                //                     className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                //                     onClick={handleHexToRgba}
                //                 >
                //                     转换
                //                 </button>
                //             </div>
                //             <div className="flex items-center gap-2 mt-2">
                //                 <span className="text-gray-500">RGBA:</span>
                //                 <span className="font-mono text-lg text-blue-700">
                //                     {hexToRgbaResult}
                //                 </span>
                //                 <div
                //                     className="w-6 h-6 rounded border ml-2"
                //                     style={{ background: hexInput }}
                //                 />
                //             </div>
                //         </div>
                //     </div>
                // </div>
                // {/* URL <-> Base64 */}
                // <div className="bg-white rounded-xl shadow p-6 mb-8">
                //     <h2 className="text-xl font-semibold text-gray-700 mb-4">
                //         图片 URL 与 Base64 互转
                //     </h2>
                //     <div className="flex flex-col md:flex-row gap-6">
                //         {/* URL -> Base64 */}
                //         <div className="flex-1">
                //             <div className="mb-2 font-medium text-gray-600">
                //                 URL 转 Base64
                //             </div>
                //             <div className="flex gap-2 mb-2">
                //                 <input
                //                     type="text"
                //                     value={imgUrl}
                //                     onChange={(e) => setImgUrl(e.target.value)}
                //                     className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                //                     placeholder="输入图片URL"
                //                 />
                //                 <button
                //                     className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                //                     onClick={handleUrlToBase64}
                //                     disabled={loadingBase64}
                //                 >
                //                     {loadingBase64 ? "转换中..." : "转换"}
                //                 </button>
                //             </div>
                //             {urlError && (
                //                 <div className="text-red-500 text-sm mb-2">
                //                     {urlError}
                //                 </div>
                //             )}
                //             {urlToBase64Result && (
                //                 <div className="mt-2">
                //                     <div className="text-gray-500 mb-1">
                //                         Base64:
                //                     </div>
                //                     <textarea
                //                         className="w-full h-24 border rounded p-2 text-xs font-mono bg-gray-50"
                //                         value={urlToBase64Result}
                //                         readOnly
                //                     />
                //                     <div className="flex items-center gap-2 mt-2">
                //                         <span className="text-gray-500">
                //                             预览:
                //                         </span>
                //                         <img
                //                             src={urlToBase64Result}
                //                             alt="base64 preview"
                //                             className="w-16 h-16 object-cover rounded border"
                //                         />
                //                     </div>
                //                 </div>
                //             )}
                //         </div>
                //         {/* Base64 -> URL */}
                //         <div className="flex-1">
                //             <div className="mb-2 font-medium text-gray-600">
                //                 Base64 转图片
                //             </div>
                //             <div className="mb-2">
                //                 <textarea
                //                     className="w-full h-24 border rounded p-2 text-xs font-mono bg-gray-50"
                //                     value={base64}
                //                     onChange={(e) => setBase64(e.target.value)}
                //                     placeholder="粘贴Base64字符串"
                //                 />
                //             </div>
                //             <button
                //                 className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                //                 onClick={handleBase64ToUrl}
                //             >
                //                 转换
                //             </button>
                //             {base64ToUrlResult && (
                //                 <div className="flex items-center gap-2 mt-4">
                //                     <span className="text-gray-500">预览:</span>
                //                     <img
                //                         src={base64ToUrlResult}
                //                         alt="base64 preview"
                //                         className="w-16 h-16 object-cover rounded border"
                //                     />
                //                 </div>
                //             )}
                //         </div>
                //     </div>
                // </div>