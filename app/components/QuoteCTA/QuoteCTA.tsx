import Link from "next/link"
import { ArrowRight } from "lucide-react"
export default function QuoteCTA(){
  return (
    <div className="flex justify-center w-full">
    <div className="flex w-3/4 bg-blue-800 justify-between items-center text-white rounded-xl m-3 p-4">
      {/* left side */}
      <div className="flex flex-col ">
      <h1 className="font-bold text-2xl">Have a custom project in mind?</h1>
      <h3 className="font-semibold">Let's bring your idea to life.</h3>
      </div>
      {/* Right side */}
      <div className="flex gap-3">
        <div className="font-semibold">|</div>
        <p className="font-semibold"> Need something custom? Send us the details and we'll help you figure it out</p>
        <Link  className="flex bg-white text-black p-2 rounded-lg"href="/">Get a Quote <ArrowRight/></Link>
      </div>
    </div>
    </div>
  )
}