import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { SecondaryButton } from '../Button'
import { DocumentIcon } from '@heroicons/react/24/outline'



type Props = {
    menuNumber: string
    menuTitle: string
}



function  MenuItem({menuNumber, menuTitle}: Props)    {

    const className = 'font-code text-sm font-light'

    return (
        <div className = {'flex flex-row justify-between gap-2'}>
                <h3 className = {`${className} text-accent`}>{menuNumber}</h3>
                <h3 className = {`${className} text-text1 hover:text-yellow-500`}>{menuTitle}</h3>
        </div>
    )
}


export function NavBar()    {


    const [isOpen, setOpen] = useState(false)

    const menuList =   [
                                {no:'01.', title: 'About'},
                                {no:'02.', title: 'Experience'},
                                {no:'03.', title: 'Work'},
                                {no:'04.', title: 'Contact'}
                            ]



    return(
        <div className = {'px-10 lg:px-10 sm:px-5    pt-4 pb-4 bg-base flex flex-row text-accent justify-between \
                                            items-center sticky top-0 '}>
                <h1 className = {'font-header font-light text-3xl'}> PaulElite.</h1>
                <div className = {' sm:visible invisible'}>
                        <Hamburger 
                             toggled = {isOpen}
                             toggle = {setOpen}
                         />
                </div>
                <div className = {'flex flex-row gap-8 items-center sm:hidden'}>
                        {menuList.map(menu =>
                            (<MenuItem key = {menu.no} menuNumber = {menu.no} menuTitle = {menu.title} />) )}

                            <SecondaryButton description = 'Resume' icon = {<DocumentIcon className = {'h-5 w-5'} />} />
                    </div>
        </div>
    )
}