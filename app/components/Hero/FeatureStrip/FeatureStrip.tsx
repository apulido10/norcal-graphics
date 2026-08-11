import PremiumQuality from "./PremiumQuality"
import FastTurnAround from "./FastTurnaround"
import DesignHelp from "./DesignHelp"
import Nationwideshipping from "./NationwideShipping"
export default function FeatureStrip(){
    return (
      <div className="flex w-full bg-gray-100 justify-center">
        <div className="p-2 w-3/4 flex justify-between">
            <PremiumQuality/>
            <FastTurnAround/>
            <DesignHelp/>
            <Nationwideshipping/>
        </div>
        </div>
    )
}