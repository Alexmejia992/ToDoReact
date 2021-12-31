import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsFillLightningFill, BsGearFill, BsFillTrashFill, BsCardList } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';


export default function SideBar() {
    return (
        <>
        {/* <Background /> */}
        <div className="fixed top z-10 left-0 bg-transparent w-16 flex flex-col ">
            <Link to="/tasks">  <SideBarIcon text="notes"  icon={<BsCardList size="28" />} /> </Link>
            <Link to="/"><SideBarIcon text="add" icon={<BsPlus size="32" />} /></Link>
            <Link to="/completedtasks"><SideBarIcon text='completed' icon={<BsFillLightningFill size="20" />} /></Link>
            <Link to="/failedtasks"><SideBarIcon text="failed" icon={<FaPoo size="20" />} /></Link>
            <Link to="/trash"><SideBarIcon text="trash" icon={<BsFillTrashFill size="22" />} /></Link>
        </div>
        </>
    )
}

const SideBarIcon = ({ icon, text= 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)