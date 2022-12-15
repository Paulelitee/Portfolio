import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import { CubeIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'


const skills = [
                'NextJs',
                'ReactJs',
                'Framer Motion',
                'TailwindCss',
                'Figma']

type SkillProps  = {
    desc: string
}

const Skill = ({desc}) => {
    return(
        <div className = {'flex font-bold mx-5 my-1 flex-row hover:text-yellow-300 skills gap-3'}>
            <CubeIcon className = {'h-6 w-6 '}/>
            <h1>{desc}</h1>
        </div>
    )
}



function handleClicked()  {
    setActive(!isActive)
    console.log(isActive)
}


export const Intro = () => {
    const [isActive, setActive] = useState(false)



    return(
        <div className = {'flex-col justify-center items-center'}>
            <div>
                <div

                    onClick = {() => {setActive(!isActive); console.log(isActive)}}>
                    <Heading title = 'About Me'/>
                </div>

                <motion.div
                    initial = {{ opacity: 0, scale: .5}}
                    whileInView = {{opacity: 1, scale: 1}}
                    exit = {{opacity: 0, scale: 0}}
                    className = {`${isActive ? 'show mb-36 md:mb-48 lg:mb-60' : 'hide'}`}>
                    <p
                    className = {'text-xl p-5 text-center \
                    md:px-20 lg:px-80 text-slate-600 word-break  \
                                   text-center'}
                    >
                    I am a web developer currently based in Abuja, Nigeria. I make
                    human-centric digital products with the industry standards
                    for a functional and enjoyable experience. I always develop
                    products with other factors asides code in mind. factors such
                    as such as scalability,collaboration and management. making
                    it usable and enjoyable by both customer and company.

                    Below are some technologies i've been working with lately.
                </p>
                <div className = {'justify-center text-emerald-400 pt-5 flex\
                                 transition transition-all transition-colors flex-row flex-wrap '}>
                    {skills.map((skill, id) => <Skill key = {id} desc = {skill} />)}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
