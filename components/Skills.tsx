import React, { useState } from 'react'
import { CubeIcon } from '@heroicons/react/24/outline'




type Props = {
    skill: string
}
export function Skills({skill}: Props)  {

    const [classHover, setClass] = useState('')

    function handleHover()  {
        setClass('hover:text-secondary')
    }


    return(
        <div onMouseEnter = {handleHover} className  = 'flex  flex-row gap-3 items-center my-2 hover:text-secondary '>
            <CubeIcon className = {`h-6 text-accent w-6 ${classHover}`} />
            <h3 className = {`text-text1/80 font-code text-lg hover:text-accent`}>{skill}</h3>
        </div>
    )
}