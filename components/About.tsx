
import React, { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { Button } from '../components/Button'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import logo from '../public/favicon.ico'



export function About() {
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
        <div className = {'px-2 text-center welcomePage flex-col'}>
            <motion.div initial = {{ opacity: 0}} whileInView = {{ opacity: 1}}>
                <h2 className= {'text-emerald-300 pb-3'}> Hey, my name is </h2>
                <motion.h2
                    className = {'text-center text-6xl md:text-8xl lg:text-9xl font-extrabold  text-slate-300'}
                    >
                    Paul Elite
                </motion.h2>
                <div className = {'h-10 font-light text-slate-500 mb-16 text-3xl md:text-4xl'}>
                    <Typewriter
                        words = {[
                                    'Wordpress Developer',
                                    'Web Developer',
                                    'UI/UX Designer'
                                ]}
                        loop = {false}
                        typeSpeed = {150}
                        deleteSpeed = {120}
                    />
                </div >
                <div>
                <a href = {logo.src}  rel = 'noopenner referrer' download >
                    <Button/>
                    </a>
                </div>

            </motion.div>
        </div>
    )
}
