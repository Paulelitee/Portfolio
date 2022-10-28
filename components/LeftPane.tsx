import {SocialIcon} from 'react-social-icons'


export function LeftPane()  {

    return(
        <div className = {'flex flex-col gap-2 '}>
            <SocialIcon 
                        url="https://twitter.com/jaketrent" 
                        bgColor = 'transparent'
                        fgColor = '#334155'
                        className = {'h-4 w-4'}
                        />
            <SocialIcon url="https://github.com/jaketrent"
             bgColor = 'transparent'
                        fgColor = '#334155' />
            <SocialIcon url="https://medium.com/jaketrent" 
             bgColor = 'transparent'
                        fgColor = '#334155'/>
            <SocialIcon url="https://instagram.com/jaketrent" 
             bgColor = 'transparent'
                        fgColor = '#334155'/>
            <div className = {'w-4 h-12 bg-slate-500 '}>Web Dev</div>
        </div>
        
    )
}