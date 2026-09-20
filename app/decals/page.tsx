import Header from "../components/Header/Header"
import Navigation from "../components/Navigation/Navigation"
import Image from "next/image"
import DecalCard from "./decalCard"
import Link from "next/link"
export default function Decals(){
  return ( 
    <div>
      <Header/>
      <Navigation/>
    
        <div className="flex w-full justify-between items-center">
          <div className="ml-40 flex flex-col gap-8">
            <ul className="flex gap-2 text-gray-700">
              <Link href={"/"}><li className="hover:text-gray-500">Home</li></Link>
              <li>{`>`}</li>
              <li>Decals</li>
            </ul>
          <h1 className="text-5xl font-bold ">Decals</h1>
          <div>
          <p className="text-gray-800">Custom decals made your way.</p>
          <p className="text-gray-800">Choose a style below to get started.</p>
          </div>
          </div>
          <div className="w-[55%] h-[300]"><Image
          src ="/decals/images/LogoImageDecal.png"
          alt="logo"
          className="w-full h-full object-cover"
          width={700}
          height={300}
          /></div>
        </div>
        
        <DecalCard/> 
      </div>
 
  )
}