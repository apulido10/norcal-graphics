import { ArrowRight } from "lucide-react"
export default function Herobuttons() {
  return (
    <div className="flex gap-8 mt-10 mb-20">
      <button className="bg-blue-600 p-4 rounded-md text-white font-semibold flex gap-2 items-center justify-center">
        Shop products
        <ArrowRight size={20} />
      </button>
      <button className="border border-blue-600 rounded-md font-semibold p-4 flex items-center gap-3">
        Get a Quote <ArrowRight size={20} />
      </button>
    </div>
  );
}
