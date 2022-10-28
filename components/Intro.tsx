import { Headings } from "./Headings"
import { Skills } from "./Skills"

export function Intro() {
    return(
        <div className = {'sm:px-10'}>
        <div className="border-box overflow-hidden">
            <Headings no = {1} title = 'About Me' />
            <p className = {'text-lg  font-body font-regular text-text1/50 pt-10 hover:text-text1/80 pb-12 w-2/3 sm:w-full'}>
                Hey there, My name is Paul Eite Honour, a web developercurrently based in Abuja.
                I love making digital products engineered for an enjoyable experience.

                I  make designs with beauty and functionality as principal goals. I develop digital prosucts by writing readable, efficient code.
            </p>
            <p className = {'text-2xl sm:text-xl font-body font-bold text-accent mb-3 hover:text-text1'}>
                Here are some technologies ive been working with recently
            </p>
            <div className = {'grid grid-cols-3 sm:w-full sm:grid-cols-2 w-3/4 '}>
             
                        <Skills skill = 'NextJs' />
                        <Skills skill = 'ReactJs' />
                        <Skills skill = 'Tailwind Css' />
                        <Skills skill = 'Framer Motion' />
                        <Skills skill = 'FireBase' />
                    <Skills skill = 'Figma' />
               
            </div>
        </div>
       
        </div>
    )
}