import LeftSideHero from "./leftsidehero/leftsidehero"
import RightSideHero from "./rightsidehero"
export default function Hero(){
  return (
    <div className="flex justify-center w-full ">
    <div className="flex w-3/4 justify-between p-10 ">
      <LeftSideHero/>
      <RightSideHero/>
    </div>
    </div>
  )
}