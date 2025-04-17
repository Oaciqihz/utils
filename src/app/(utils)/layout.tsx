import { Tools as tools } from "@/src/config/route";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const Tools = [{id: 0, name: "Home", description: "返回首頁", link: "/", img: "/icon/home.svg"}, ...tools]
    return (
        <div>
            <div id="tools" className="flex flex-col gap-y-2 fixed z-50 right-0 top-1/2">
                {Tools.map((tool) => (
                    <Link key={tool.id} href={tool.link} className="relative left-[calc(100%-30px)] hover:left-0 transition-all">
                        <div className="pr-2 rounded-l-full bg-white dark:bg-black shadow-md shadow-gray-700 flex flex-row gap-x-1 items-center">
                            <div className="p-2">
                                <Image src={tool.img} className="h-[20px]" width={20} height={20} alt={tool.description} />
                            </div>
                            <span>{tool.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
            {/* utils */}
            {children}
        </div>
    );
  }
  