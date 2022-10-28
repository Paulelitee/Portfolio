import React, { ReactNode} from 'react'


type Props = {
    description: string
    icon?: ReactNode | ReactNode[]
}

const className ='bg-transparent font-code rounded hover:bg-accent/5 border border-accent flex flex-row gap-2 transition-all items-center'

export function  PrimaryButton ({description, icon}: Props){
    return( <button className = {`${className} px-12 py-4 text-accent`}>
                                {description}
                                {icon}
                                </button>
    )
}

export function  SecondaryButton ({description, icon}: Props){
    return( <button className = {`${className} px-4 py-2 text-sm`}>
                                {description}
                                {icon}
                                </button>
    )
}