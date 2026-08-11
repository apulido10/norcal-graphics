import Herobuttons from "./herobuttons";
import { ShieldCheck, Clock3, Truck } from "lucide-react";
export default function LeftSideHero() {
  return (
    <div className="gap-3 flex flex-col w-1/3 ">
      <h2 className="text-blue-700 text-lg font-semibold">
        PREMIUM QUALITY. MADE FOR YOU.
      </h2>
      <h1 className="text-5xl font-bold">Bring Your Ideas to Life.</h1>
      <h3 className="text-md font-semibold text-gray-700">
        High quality printing for businesses, events and everyday needs. Fast
        turnaround and exceptional service you can count on.
      </h3>
      <div>
        <Herobuttons />
        <div className="flex gap-7">
          <div className="flex gap-1 items-center text-gray-900">
            <ShieldCheck className="text-blue-600" size={20} />
            Premium Quality
          </div>
          <div>|</div>
          <div className="flex gap-1 items-center text-gray-900">
            <Clock3 className="text-blue-600" size={20} />
            Fast Turnaround
          </div>
          <div>|</div>
          <div className="flex gap-1 items-center text-gray-900">
            <Truck className="text-blue-600" size={20} />
            Nationwide Shipping
          </div>
        </div>
      </div>
    </div>
  );
}
