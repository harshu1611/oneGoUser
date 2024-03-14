
import React from "react"
import { FaTrain } from "react-icons/fa"
import { HiMiniArrowLongRight } from "react-icons/hi2"

const TrainCardOptions: React.FC=()=>{
    return (
        <div>
<div className="flex flex-row">
                    <h1 className="text-sm font-semibold">12269:DURONTO EXPRESS</h1>
                  
                </div>
                <div className="flex flex-row h-auto justify-evenly items-center w-full -mt-6">
                <FaTrain size={26}/>
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">5.15 AM</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">08/03/2024</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">Raipur</h1>
        </div>
        <HiMiniArrowLongRight size={30}/>
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">5.15 AM</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">09/03/2024</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">Delhi</h1>
        </div>
     </div>
        </div>
    )
}


export default TrainCardOptions




