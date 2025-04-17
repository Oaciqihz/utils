import Image from "next/image";
import { Tools } from "../config/route";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-900">Getting Started</h1>
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Tools.map((tool) => {
          return (
            <Link
              key={tool.id}
              href={tool.link}
              className="flex flex-col p-5 rounded-lg border transition-shadow focus:outline-none border-gray-300 bg-white hover:shadow hover:border-blue-400 hover:bg-blue-50 shadow-md"
            >
              <div className="flex items-center mb-2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center mr-4 text-gray-400 text-xl font-bold select-none">
                  {tool.name.charAt(0)}
                </div>
                <h2 className="text-lg font-medium text-gray-900">{tool.name}</h2>
              </div>
              <p className="text-gray-600">{tool.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
