import PremiumQuality from "./PremiumQuality"
import FastTurnAround from "./FastTurnaround"
import DesignHelp from "./DesignHelp"
import Nationwideshipping from "./NationwideShipping"
export default function FeatureStrip(){
    return (
        <div className="p-10 bg-gray-100 flex justify-between">
            <PremiumQuality/>
            <FastTurnAround/>
            <DesignHelp/>
            <Nationwideshipping/>
        </div>
    )
}