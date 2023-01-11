import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import Link from 'next/link'




const platforms = [
    {name: 'Github', link: 'https://github.com/Paulelitee'},
    {name: 'Twitter', link: 'https://twitter.com/elitethedev'},
    {name: 'LinkedIn', link: 'htpps://linkedIn.com'},
    {name: 'Medium', link: 'https://medium.com/Paulelite'}
]



export function Socials()   {


    return(
        <div className = {'flex flex-col gap-12 hover:text-emerald-600 items-center'}>

            <div className = {'mx-10 flex mb-12 flex-row flex-wrap gap-4 justify-center md:gap-10'}>
                {platforms.map
                    ((social, index) => <Link href = {social.link} passHref = {true} key = {index} >
                        <button className = {'text-slate-500 socials border border-slate-300 hover:rounded rounded px-4 py-2'}>
                    {social.name} </button></Link>
                    )
                }
            </div>
                    </div>
    )
}
