import React from 'react'
import SideBar from '../SideBar'

export default function Layout({children}) {
    return (
        <>
            <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center">
                <SideBar />
                <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute  left-2/3 -top-56 transform rotate-160 animate-animation"></div>
                <div className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute top-96 -left-20 animate-animation "></div>
                {children}
            </div>
        </>
    )
}
