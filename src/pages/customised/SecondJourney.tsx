import { IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { FaTrain } from "react-icons/fa6";

import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { getJourney, getUserId } from "../../redux/store";
// import supabase from "../utils/supabase";
 const SecondJourney : React.FC=()=>{
    
    const history=useHistory()

        const [date, setDate]= useState<any>()
        const [ time, setTime] = useState<any>()
        // var [hours, minutes] = time?.split(':');
//         var javascriptTime = new Date();
// javascriptTime.setHours(parseInt(hours, 10));
// javascriptTime.setMinutes(parseInt(minutes, 10));

        // console.log(date,javascriptTime)
       
        const journey= useSelector(getJourney)
        console.log(useSelector(getUserId))
        console.log(journey)

   
        
        return(
            <>
       <div className="flex flex-col">
        <div className="h-auto w-full bg-primaryBlue rounded-b-xl items-center justify-center flex flex-row">
            <div className="left-2 top-0 absolute flex items-center">
            <h1 className=" text-white text-lg font-semibold" onClick={()=>{history.goBack()}}>{'<'}</h1>
            </div>
       
                <h1 className="text-white text-sm justify-center self-center items-center font-semibold">Add Further Journey</h1>
            </div>
            <div className="flex flex-col bg-gray-200 -rounded-t-[12px] items-center">
                <div className="flex -mt-4">
                    <h1 className="text-sm font-semibold">Selected Train:</h1>
                </div>
                <div className="flex flex-row -mt-8">
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
            <h1 className="text-sm font-semibold text-primaryBlue self-center ">Where Do You Want To Go Next?</h1>
            <div className="flex flex-col px-2 space-y-2">
            <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg' title='From' placeholder='From' ></input>
            <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg' title='To' placeholder='To' ></input>
            <div className="flex flex-row space-x-2">
            <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg text-primaryBlue' placeholder='Date Of Journey' type='' onFocus={(e)=>(e.target.type="date")} onChange={(e)=>{
                setDate(e.target.value)
            }}></input>
            <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg text-primaryBlue' placeholder='Time' type='time'  onChange={(e)=>{
                setTime(e.target.value)
            }}></input>
            </div>
            <div className="flex flex-row space-x-2 w-full h-12 items-center justify-center">
            <input className='' title='To' placeholder='To' type="checkbox">
            </input>
            <h3 className="text-sm font-semibold"> Is it a Local Drop?</h3>
            </div>
            <button className='w-auto h-10  border-2 border-solid text-primaryBlue rounded-lg p-1 self-center font-semibold' onClick={ (e)=>{
                e.preventDefault();

                history.push("/secondJourney/options")
                history.go(0)
            } }>Search Options</button>
            </div>
       </div>
       </>
       
    )
}
export default SecondJourney