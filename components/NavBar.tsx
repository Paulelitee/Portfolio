import React, { useState } from 'react'
import Hamburger  from 'hamburger-react'

//Navbar for portfolio site
export const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return(
        <span className = {'flex flex-row justify-between p-5'}>
            <h1 className = {' text-yellow-300 text-3xl'}>PE.</h1>
            <div className = {`${toggle ?
                                        'text-yellow-300' :
                                        'text-slate-300'}
                            `}>
                <Hamburger onToggle = {handleToggle}/>
            </div>
        </span>
    )
}
