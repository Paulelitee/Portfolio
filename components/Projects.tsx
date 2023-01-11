import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import { motion } from 'framer-motion'
import Image from 'next/image'
import myPic from '../public/desktop-pic.jpeg'

type Props = {
    desc: string
}


const Project = ({desc}: Props) => {


        return(

            <Image
                src = {myPic}
                alt = 'test'
                className = {'h-96 bg-slate-300/30 object-cover w-full md:w-1/2 lg:w-1/2'}
                />

        )
}



export function Projects()  {
    const [isActive, setActive] = useState(false)



    return(
        <div className = {'flex-col justify-center items-center'}>
        <div onClick = {() => {setActive(!isActive)}}>
            <Heading title = 'Projects' />
        </div>
        <motion.div
            className = {`${isActive ? 'show mb-36 md:mb-48 lg:mb-60' : 'hide'}`}
            initial = {{opacity: 0, scale: 0.5}}
            whileInView = {{opacity: 1, scale: 1}}>
            <div className = {'flex flex-col md:flex-row gap-10'}>
                <Project desc = 'Project 1' />
                <Project desc = 'Project 2' />
            </div>
        </motion.div>
        </div>
    )
}
