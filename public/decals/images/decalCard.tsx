import { link } from "fs"
import Image from "next/image"
import Link from "next/link"
import {LucideIcon, Type,Upload} from 'lucide-react'
import { FaInstagram } from "react-icons/fa"
import { IconType } from "react-icons"
import { Icon } from "next/dist/lib/metadata/types/metadata-types"
const cardArray = [
  {
    img: "/decals/images/InstagramDecal.png",
    title:"Instagram Decal",
    description:"Create a custom decal with your Instagram Handle",
    link:"/decals/instagram",
    icon:FaInstagram
  },
  {
    img:"/decals/images/CustomTextDecal.png",
    title:"Custom Text Decal",
    description:"Create a decal with your own text.",
    link:"/decals/custom-text",
    icon:Type,
  },
  {
    img:"/decals/images/CustomImageDecal.png",
    title:"Upload Your Design",
    description:"Upload your own image or artwork.",
    link:"/decals/upload",
    icon:Upload,
  }
]

type DecalCardProps = {
  img: string;
  title: string;
  description: string;
  link: string;
  icon: IconType | LucideIcon;
};


export default function DecalCard({img,title,description,link,icon:Icon}:DecalCardProps){
 
  return (
    <div className="w-full">
      <h1 className="font-extrabold text-center text-4xl m-8">Choose Your Decal Style</h1>
    <div className="flex w-full justify-center gap-20 ">
      {
        cardArray.map((card)=>{

          const Icon = card.icon;
        return(
          <div className="shadow-lg object-cover flex flex-col items-center rounded-xl w-70 text-center">
            <Image  className="w-full h-50"src={card.img} alt="Image" width={500} height={100}/>
            <div className="shadow-lg p-4 rounded-4xl -mt-9 bg-white">
              <Icon size={32} />
              </div>
            <div className="flex flex-col gap-3 p-3 items-center">
            <h1 className="font-extrabold">{card.title}</h1>
            <p className="text-gray-500 min-h-13">{card.description}</p>
            <Link href={card.link} className="bg-blue-700 text-white rounded-md w-40 p-1">Customize</Link>
            </div>
          </div>
        )
})
      }
    </div>

  
    </div>
  )
}