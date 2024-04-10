import React from 'react'
import { CgNotes } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  
    const data=[
        {
            title: "All Tasks",
            icon: <CgNotes/>,
            link:"/",
        },
        {
            title: "Important Tasks",
            icon: <CgNotes/>,
            link:"/Importanttasks",
            //add icons to remember 29.31
        },
        {
            title: "Completed Tasks",
            icon: <CgNotes/>,
            link:"/Completedtasks",
        },
        {
            title: "Incompleted Tasks",
            icon: <CgNotes/>,   
            link:"/Incompletetasks",
        }
    ];

    return (
    <>
        <div>
            <h2 className='text-xl font-semibold'> The Task Manager</h2>
            <h4 className='mb-1 text-gray-400'> The Task Manager@gmail.com</h4>
            <hr/>
        </div>
    <div>
        {data.map((items,i)=> (
            <Link to={items.link} key={i} className='my-2 flex items-center hover:bg-gray-500 p2 rounded transition-all duration-380'>
                {items.icon}&nbsp;{items.title}
            </Link>
        ))}
    </div>
    <div>
        <button className='bg-gray-500 w-full p-2'>Logout</button>
    </div>
    </>
  )
}

export default Sidebar
