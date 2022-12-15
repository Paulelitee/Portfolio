import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import { motion } from 'framer-motion'


type Props = {
    title: string,
    date: string
}


const topics = [
    'Designer to Dev',
    'Tailwindcss or CSS',
    'Javascript at its finest',
]

const list = [{id: 1, title: 'From Designer to Dev', date: '3 weeks ago'},
            {id: 1, title: 'From Designer to Dev', date: '3 weeks ago'}]

function Blog({title, date}) {

    const [isActive, setActive] = useState(false)


    const handleHover = () => {
        setActive(!isActive)
    }

    return(
        <div
                onMouseEnter = {handleHover}
                onMouseLeave = {handleHover}
                className = {`text-3xl ${isActive ? 'text-yellow-400' :
                              'text-emerald-500'} h-72\
                              bg-slate-800/50 p-10 rounded hover:text-yellow-300/
                              text-emerald-500 flex flex-col justify-between\
                              hover:opacity-100`}>
            <h1 className = {'font-bold'}>
                {title}
            </h1>
            <h1 className =
                    {`text-lg text-slate-300\
                      ${isActive ? 'opacity-100 font-bold' :
                                    'opacity-50 font-light'}`}>
                {date}
            </h1>
        </div>
    )
}


export function Blogs()  {

    const [isActive, setActive] = useState(false)
    return(
        <div className = {'flex-col justify-center items-center'}>
                <div onClick = {() => {setActive(!isActive)}}>
                    <Heading title = 'My Articles'/>
                </div>

            <motion.div
                className = {`${isActive ? 'show mb-36 md:mb-48 lg:mb-60' : 'hide'}`}
                initial = {{opacity: 0, scale: 0.5}}
                whileInView = {{opacity: 1, scale: 1}}>
            <div className = {'flex flex-col md:flex-row gap-3 justify-center'}>
                {list.map((topic, index) =>
                    <Blog key = {index} date = {topic.date} title = {topic.title}/>)}
            </div>
            </motion.div>

        </div>
    )
}
