import { Base64Transform, RgbaToHex, UrlTransform } from "@/src/components/transform";



const TransformPage: React.FC = () => {
    return (
        <div className="p-4 relative shadow-inner ">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Transform Tools</h1>
                <RgbaToHex />
                <UrlTransform />
                <Base64Transform />
            </div>
        </div>
    );
};

export default TransformPage;