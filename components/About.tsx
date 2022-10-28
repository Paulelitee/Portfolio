import Reace, {useState, useRef, useEffect} from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { PrimaryButton } from './Button'
import {DocumentIcon} from '@heroicons/react/24/outline'

export function About() {


    const name=  'Paul Elite'
    // const nameRef:  = useRef()

    
    
    return(
        <div className = {'sm:px-10'}>
            <h3 className = {'font-code text-accent text-lg pb-4'}>Hey, my name is</h3>
            <h1 className = {'font-body text-text1 sm:text-5xl  text-7xl font-bold py-2'}>Paul Elite</h1>
            <div                 className = {'font-body text-5xl sm:text-5xl text-7xl text-text1/60 font-light'}>
                <Typewriter
                words = {['Web developer', 'UI/UX Designer', 'Wordpress Expert']}
                loop = {false}
                cursor = {true}
                typeSpeed = {120}

                />
        </div>
        <p className ={'text-lg font-body font-regular text-text1/50 pt-4 pb-12'}>I am a creative specializing in designing and developing<br/>human centered digital experiences for the web.</p>
        <PrimaryButton description = 'Get Resume'  icon = {<DocumentIcon className = {'h-6 w-6'}/>}/>
        </div>
    )
}