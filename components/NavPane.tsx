import React, { useState } from 'react'

type Props = {
    item: string
}

const menuItems = [
        'About',
        'Projects',
        'Blogs',
        'Contact',
        'Socials'
]

const MenuItem = ({item}) => {
    return (
        <h1 className = {'hover:text-yellow-300 hover:text-3xl'}>
            {item}
        </h1>
    )
}

export  const NavPane = () =>  {




    return(
        <div className = {'w-full h-screen bg-slate-900 overflow-hidden\
                           flex flex-row justify-center items-center'}>

            <div className = {'cursor-pointer text-emerald-300 flex flex-col\
                                 gap-5 justify-center\
                                items-center'}>
                {
                    menuItems.map(
                        (menu, index) => <MenuItem
                                                item = {menu}
                                                key = {index}
                                         />
                    )
                }
            </div>
        </div>
    )
}
