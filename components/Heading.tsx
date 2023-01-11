import React, { useState } from 'react'
import { motion } from 'framer-motion'

const headerClass = 'titles py-5 text-5xl md:text-6xl lg:text-7xl font-bold text-center'

type Props = {
    title: any,
}


export function Heading({title}: Props)   {

    const [ isActive, setActive] = useState(false)


    return(
        <motion.div
            initial = {{opacity: 0, scaleX: 0}}
            whileInView = {{opacity: 1, scaleX: 1}}
            transition = {{delay: .2, duration: '2'}}
            whileTap = {{scaleX: 0.8}}
            onClick = {() => {setActive(!isActive);console.log('changed')}}>
            <h1 className = {`${headerClass} ${isActive ?
            'text-emerald-300':
            'text-slate-400 hover:text-slate-200'}`}>
                {title}
            </h1>
        </motion.div>
    )
}
