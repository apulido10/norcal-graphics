import Header from "@/app/components/Header/Header";
import Navigation from "@/app/components/Navigation/Navigation";
import Link from "next/link";
import Image from "next/image";
export default function Instagram() {
  const prices = [
    {
      size: 5,
      price: 4.99,
      quantity: 1,
    },
    {
      size: 6,
      price: 6,
      quanitity: 1,
    },
    {
      size: 7,
      price: 7,
      quanitity: 1,
    },
    {
      size: 8,
      price: 8,
      quanitity: 1,
    },
    {
      size: 9,
      price: 9,
      quanitity: 1,
    },
    {
      size: 10,
      price: 10,
      quanitity: 1,
    },
    ,
    {
      size: 11,
      price: 10,
      quanitity: 1,
    },
    {
      size: 12,
      price: 10,
      quanitity: 1,
    },
  ];
  return (
    <div>
      <Header />
      <Navigation />
      <div>
        <ul className="flex gap-3 m-5 ">
          <Link href={"/"}>
            <li className="cursor-pointer text-gray-600 hover:text-gray-400">
              Home
            </li>
          </Link>
          <li>{`>`}</li>
          <Link href={"/decals"}>
            <li className="cursor-pointer text-gray-600 hover:text-gray-400">
              Decals
            </li>
          </Link>
          <li>{`>`}</li>
          <li className="cursor-pointer text-gray-600 hover:text-gray-400">
            Instagram
          </li>
        </ul>
        <div className="m-4 flex ">
          <div className="flex w-2/3 justify-center">
            <Image
              src={"/decals/images/instagrampage.png"}
              alt="instagram decal"
              width={700}
              height={500}
            ></Image>
          </div>
          <div className="flex flex-col gap-3 w-1/3">
            <div className="font-bold text-4xl">Instagram Decals</div>
            <div>${prices[0]?.price}</div>
            <hr className="w-full border-gray-300 border-t-2"/>
            <div>
              <div>Size:</div>
              <select name="size" id="size" className="outline">
                <option value="5">5 Inches</option>
                <option value="5">6 Inches</option>

              </select>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
