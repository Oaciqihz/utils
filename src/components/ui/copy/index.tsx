"use client";
import { Copy as CopyIcon } from "lucide-react";
import { toast } from "react-toastify";

interface CopyProps {
    label?: React.ReactNode;
    text: string;
    size?: number;
}

const Copy: React.FC<CopyProps> = ({ label, text, size = 16 }) => {
    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                toast.success(`Copied to clipboard: ${text}`, {
                    position: "top-center",
                    autoClose: 2000,
                    closeButton: false,
                });
            })
            .catch((err) => {
                toast.error(`Failed to copy: ${text}`, {
                    position: "top-center",
                    autoClose: 2000,
                    closeButton: false,
                });
            });
    };

    return (
        <div onClick={copyToClipboard} className="cursor-pointer">
            {label ?? (
                <CopyIcon
                    onClick={copyToClipboard}
                    className={`w-[${size}px] h-[${size}px] text-[#2287f4] cursor-pointer`}
                />
            )}
        </div>
    );
};

export default Copy;
