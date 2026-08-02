import Image from "next/image"
export default function Logo(){
  return (
    <div>
            <Image
            src="/NorcalGraphicsWhite.png"
            alt="NorCal Graphics Logo"
            width={180}
            height={100}
            />
    </div>
  )
}