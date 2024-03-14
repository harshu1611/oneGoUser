import React from "react";
import { useHistory } from "react-router";

import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useIonRouter } from "@ionic/react";
import { Link } from "react-router-dom";
import { FaTrain } from "react-icons/fa6";
// import car from '../../assets/images/car.png'



const TaxiCard: React.FC = () => { 

   const history= useHistory();
   const router=useIonRouter()
  return <div className=" relative flex flex-col justify-start bg-white px-2 pb-2 border-2 border-gray-200 h-auto">

<div className="flex flex-row justify-between items-center">
<div className="flex flex-col h-auto -space-y-3  justify-center">
        <h1 className="text-gray-400 text-sm">Jai Travels</h1>
        <h1 className="text-black font-semibold text-sm">Tata Tiago</h1>
     </div>
    {/* <Link to ="/home/secondJourney">
    
    </Link> */}
    <button className="border-solid border p-[4px] rounded-xl border-primaryBlue text-sm text-primaryBlue" onClick={(e)=>{
      e.preventDefault()
     history.push("/secondJourney")
     history.go(0)

   // router.push("/secondJourney", "forward", "push")

     }}>Select Taxi</button>
</div>
    
     <div className="flex flex-row h-auto justify-evenly items-center space-x-3">
      <img className="h-10 w-20"/>
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">10.00 AM</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">09/03/2024</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">Delhi</h1>
        </div>
        {/* <HiMiniArrowLongRight size={30}/> */}
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">6.00 PM</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">09/03/2024</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">Nainital</h1>
        <h1 className="text-green-400 font-semibold text-[10px] -mt-[10px]">Expected Time</h1>
        </div>
        <div className="flex flex-col">
        <h1 className="text-black text-sm ">Price:</h1>
        <h1 className="text-green-400 text-sm -mt-4"> Rs 12/ Km</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">Driver Charges:</h1>
        <h1 className="text-green-400 font-semibold text-[10px] -mt-[10px]"> Rs. 500/ Night</h1>

        
        </div>
     </div>
    
  </div>;
};

export default TaxiCard