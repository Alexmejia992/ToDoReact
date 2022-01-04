import React from 'react'

export default function Container({children}) {
     
    return (
        <div className={`container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm`}>
            {children}
        </div>
    )
}
