import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";



const Cards = () => {
    const data=[
       {
        title: "note 1",
        desc: 'Note 1',
        status:"In Complete",
       },
       {
        title: "note 2",
        desc: 'Note 2',
        status:"Complete",
       },
       {
        title: "note 3",
        desc: 'Note 3',
        status:"In Complete",
       }, 
       {
        title: "note 4",
        desc: 'Note 4',
        status:"In Complete",
       }, 
    ];
    
    //const [ImportantButton,useImportantButton]=useState("Incomplete")
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {data && 
      data.map((items,i) => (
        <div className='flex flex-col justify-between bg-gray-800 rounded-sm p-4'>
            <div>
                <h3 className='text-xl font-semibold'>{items.title}</h3>
                <p className='text-gray-300 my-2'>{items.desc}</p>
            </div>
            <div className='mt-4 w-full flex items-center'>
            <button className={`${items.status === "In Complete" ? "bg-red-400" :"bg-green-700"} p-2 rounded`}>{items.status}</button>
            <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                <button><CiHeart /></button>
                <button><FaEdit /></button>
                <button><MdDelete /></button>
            </div>
            </div>
        </div>
      ))}
      <div className='flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300 '>
      <IoIosAddCircle className='text-5xl' />

      <h2 className='text-2xl mt-4'>Add Task</h2>
      </div> 
    </div>
  )
}

export default Cards;
