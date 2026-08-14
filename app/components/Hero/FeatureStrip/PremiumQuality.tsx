import { BadgeCheck } from "lucide-react"
export default function PermiumQuality(){
  return (
    <div>
      <div className="flex flex-col items-center">
        <BadgeCheck size={30} className="text-blue-600"/>
        <h1 className="font-bold text-lg">Premium Quality</h1>
        We use top quality materials to ensure long lasting results.
      </div>
    </div>
  )
}