import LeftSideHero from "./leftsidehero/leftsidehero"
import RightSideHero from "./rightsidehero"
export default function Hero(){
  return (
    <div className="flex w-full justify-between p-20 ">
      <LeftSideHero/>
      <RightSideHero/>
    </div>
  )
}