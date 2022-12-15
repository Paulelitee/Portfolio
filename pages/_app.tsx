import '../styles/globals.css'
import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
import useLocalStorage from 'use-local-storage'
import { About } from '../components/About'
import { ContactForm } from '../components/ContactForm'
import { Intro } from '../components/Intro'
import { Projects } from '../components/Projects'
import { Socials } from '../components/Socials'
import { Blogs } from '../components/Blogs'
import { NavPane } from '../components/NavPane'
import Link from 'next/Link'
import { motion, useScroll } from 'framer-motion'

fetch('https://random-data-api.com/api/users')
.then((response) => response.json())
.then((data) => console.log(data))
console.log('working')


console.log('working')

export default function App({ Component, pageProps }: AppProps) {

    const [isActive, setActive] = useState(true)

    const handleNav = () => {
        setActive(!isActive)
    }


  return (
        <div className = {'bg-gray-900 overflow-x-hidden max-w-full'}>

            <About />
            <Intro />
            <Projects />
            <Blogs />
            <ContactForm />
            <Socials />

            </div>
  )
}
