import { BadgeCheck } from "lucide-react"
export default function PermiumQuality(){
  return (
    <div>
      <div className="flex flex-col items-center">
        <BadgeCheck size={40} className="text-blue-600"/>
        <h1 className="font-bold text-xl">Premium Quality</h1>
        We use top quality materials to ensure long lasting results.
      </div>
    </div>
  )
}