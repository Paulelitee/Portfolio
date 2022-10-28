import Image from 'next/image'
import bmxgrandeur from '../resources/bmxgrandeur.png'
import { Headings } from './Headings'



type Props = {
    url: string
}

function Project({url}: Props)  {
    return(
        <div className = {'w-1/2 sm:w-full h-full ' }>
            <Image
            src = {bmxgrandeur}
            alt = 'bmxgrandeur'
            className = {'bg-accent bg-blend-overlay grayscale hover:grayscale-0'}
            />
        </div>
    )

}


export function Projects()  {
        return(
            <div>
                <Headings className = {'ml-10'} title = 'projects' no = {2}/>
                <div className = {'flex flex-row wrap sm:flex-col mt-12 sm:w-full'}>
                        <Project  url = '../resources/bmxgradeur.png' />
                        <Project  url = '../resources/bmxgradeur.png' />
                </div>
             </div>
        )
}