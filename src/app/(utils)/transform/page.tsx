import { RgbaToHex, UrlTransform } from "@/src/components/transform";



const TransformPage: React.FC = () => {
    return (
        <div className="p-4 relative shadow-inner ">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Transform Tools</h1>
                <RgbaToHex />
                <UrlTransform />
            </div>
        </div>
    );
};

export default TransformPage;

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