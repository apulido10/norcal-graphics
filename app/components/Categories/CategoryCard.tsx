import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
export default function CategoryCard(){

const items = [
  {
    image:"/products/Banner.png",
    description:"Banners",
    link:'/banners'
  },
  {
    image: "/products/BusinessCard.png",
    description: "Business Cards",
    link: "/businesscards",
  },
    {
    image: "/products/Hat.png",
    description: "Embroidery",
    link: "/Embroidery",
  },
    {
    image: '/products/shirt.png',
    description: "Shirts",
    link: "/Shirts",
  },
    {
    image: '/products/truckdecal.png',
    description: 'Decals',
    link: '/decals',
  },
]

  return (
    <div className="flex justify-between">
     
        {
          items.map((item)=> {
         return (
          <div className="flex flex-col w-60 items-center  m-4 rounded-xl shadow-lg gap-3">
            <div className="w-full h-40">
            <Image
            className="rounded-t-xl w-full h-full object-cover"
            src={item.image}
            alt="Image"
            height={160}
            width={250}
            />
            </div>
            <h1 className="text-xl font-semibold">{item.description}</h1>
            <Link href={item.link} className="text-blue-600 font-semibold mb-1 flex gap-2 items-center">Shop Now <ArrowRight size={20} /></Link>
          </div>
         )
          })
        }
      
  
    </div>
  )
}