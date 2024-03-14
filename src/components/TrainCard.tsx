import React, { useEffect } from "react";
import { useHistory } from "react-router";

import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useIonRouter } from "@ionic/react";
import { Link } from "react-router-dom";
import { FaTrain } from "react-icons/fa6";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { addJourney } from "../redux/states/journey";
import { getJourney, useAppDispatch } from "../redux/store";
import { updateJourney, updateUID } from "../redux/states/User";



const TrainCard: React.FC<{data:any }> = ({data}) => { 

    const dispatch=useAppDispatch()
   const history= useHistory();
   const router=useIonRouter()
//    console.log(data.depart)

   const depart= new Date(data.depart)
   const arrival= new Date(data.arrival)
    const journeyData={
        type:"Train",
        journey: data
    }


    // console.log(journeyData)

    console.log(useSelector(getJourney))
  return <div className=" relative flex flex-col justify-start bg-white px-2 pb-2 border-2 border-gray-200 h-auto">

<div className="flex flex-row justify-between items-center">
<div className="flex flex-col h-auto -space-y-3  justify-center">
        <h1 className="text-gray-400 text-sm">{data.trainNo}</h1>
        <h1 className="text-black font-semibold text-sm">{data.name}</h1>
     </div>
    {/* <Link to ="/secondJourney"> */}
    <button className="border-solid border p-[4px] rounded-xl border-primaryBlue text-sm text-primaryBlue" onClick={async(e)=>{
    //   dispatch(updateUID())
    //   dispatch(addJourney("journeyData"))
    dispatch(updateJourney("Rail"))
//    history.push('/secondJourney')
//    history.go(0)

// router.push("/secondJourney", "forward", "push")
       
        // e.preventDefault()

     }}>Select Train</button>
    {/* </Link> */}

</div>
    
     <div className="flex flex-row h-auto justify-evenly items-center">
      <FaTrain size={26}/>
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">{depart.getHours()} : {depart.getMinutes()}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{depart.getDate()}. {depart.getMonth()}. {depart.getFullYear()}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.from}</h1>
        </div>
        <HiMiniArrowLongRight size={30}/>
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">{arrival.getHours()} : {arrival.getMinutes()}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{arrival.getDate()}. {arrival.getMonth()}. {arrival.getFullYear()}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.to}</h1>
        </div>
     </div>
    
  </div>;
};

export default TrainCard