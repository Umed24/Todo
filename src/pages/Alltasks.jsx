import React, { useState } from 'react'
import Cards from '../Components/Home/Cards'
import { IoIosAddCircle } from "react-icons/io";
import InputData from '../Components/Home/InputData';


const Alltasks = () => {
  
  const[inputDiv,setinputDiv]=useState("hidden");

  return (
    <>
    <div>
      <div className="w-full flex justify-end px-4 py-2">
        <button>
        <IoIosAddCircle className='text-5xl text-gray-400 hover:text-gray-100 transition-all duration-300' />
        </button>
      </div>
      <Cards home={"true"}/>
    </div>
    <InputData inputDiv={inputDiv}/>
    </>
  );
};

export default Alltasks;
