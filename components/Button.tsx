import React, { useState } from 'react'
import { motion } from 'framer-motion'



type Props = {
    desc: string
    type: string
}

export function Button({desc, type})    {

    const [isActive, setActive] = useState(false)
    const normal = 'px-5 py-4 border rounded border-emerald-300 w-36 text-emerald-300 '
    const[isFocus, setFocus] = useState(false)

    function handleHover()  {
        setActive(!isActive)
    }

    function handleFocus()  {
        setFocus(!isFocus)
    }



    return(
        <button
        className = {`${normal}
                      ${isActive ? 'text-yellow-300 bg-yellow/300/50 border-yellow-200 bg-yellow-200/10\
                       resumeButton' : ''}
                      ${isFocus ? 'text-yellow-300 bg-yellow/300/50 \
                                    border-yellow-300 transition font-code\
                                    transition-all transition-colors resumeButton' : ''}`
                     }

            onMouseEnter = {handleHover}
            onMouseLeave = {handleHover}
            onMouseDown = {handleFocus}
            onMouseUp = {handleFocus}
            onClick = {(e) => e.preventDefault }
            type = 'submit'>

            {desc}
        </button>
    )
}
