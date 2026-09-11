import Header from "../components/Header/Header"
import Navigation from "../components/Navigation/Navigation"
import Image from "next/image"
export default function Decals(){
  return ( 
    <div>
      <Header/>
      <Navigation/>
    
        <div className="flex w-full justify-between items-center">
          <div className="ml-40 flex flex-col gap-8">
          <h3 className="text-gray-500">{`Home > Decals`}</h3>
          <h1 className="text-5xl font-bold ">Decals</h1>
          <div>
          <p className="text-gray-800">Custom decals made your way.</p>
          <p className="text-gray-800">Choose a style below to get started.</p>
          </div>
          </div>
          <div className="w-[55%] h-[300]"><Image
          src ="/decals/LogoImageDecal.png"
          alt="logo"
          className="w-full h-full object-cover"
          width={700}
          height={300}
          /></div>
        </div>
        
      </div>
 
  )
}