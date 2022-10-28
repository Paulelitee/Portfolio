import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar/Navbar'
import { About } from '../components/About'
import { LeftPane } from '../components/LeftPane'
import { Intro } from '../components/Intro'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

export default function App() {
  return(
    <div className = {'bg-base'}>
      <NavBar />
      <div className = {'h-48'}></div>
      <div className = {'bg-base flex flex-row sm:block'}>
        <div className = {'w-1/2 sm:hidden'}>
          <LeftPane />
        </div>
        <div>
          <About />
      <div className = {'h-96'}></div>
          <Intro />
      <div className = {'h-48'}></div>
          <Projects />
      <div className = {'h-48'}></div>
        <Contact />
        </div>
        <div className = {'w-1/4 sm:hidden'}></div>
      </div>
      <div className = {'h-96'}></div>
    </div>
  )
}
