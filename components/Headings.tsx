
type Props = {
    no: number
    title: string
    className?: string
}
import { Typewriter } from 'react-simple-typewriter'



export function Headings({ className, no,  title}: Props )  {
    return(
        <div className = {'flex flex-row align-bottom justify-between gap-4 '}>
            <div className = {`uppercase text-text1/40 text-9xl font-extrabold hover:text-accent sm:text-6xl ${className}`}>
            <Typewriter 
            words = {[title]}
            typeSpeed = {120}
        />
        </div>
           
            {/* <h3 className = {'font-code mt-5 text-accent  text-xl' }>0{no}.</h3> */}
          
        </div>
    )

}