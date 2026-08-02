import Image from "next/image"
import Link from "next/link"
export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white fixed bottom-0 w-full p-2 ">
      <ul>
        <li className="cursor-pointer "><Link href="https://www.instagram.com/norcalgraphics/"><Image
        src= "/Instagram.png"
        alt="Instagram logo"
        width={20}
        height={40}
        />
        </Link>
        </li>
        <li>Facebook</li>
      </ul>

    </footer>
  )
}