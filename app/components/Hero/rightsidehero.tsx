import Image from "next/image"
export default function RightSideHero(){
  return (
    <div>
      <Image
      src="/products.png"
      alt="products"
      width={400}
      height={200}
      />
    </div>
  )
}