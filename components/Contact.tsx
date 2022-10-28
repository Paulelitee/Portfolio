import React, { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { PrimaryButton } from './Button';


export function Contact()   {

    const [currentStatus, setStatus] = useState('Submit')

    const handleSubmission = async(e: any) => {
        e.preventDefault();
        setStatus('Sending...')

        const { name, email, message, subject } = e.tartget.elements

        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
            subject: subject.value
        }

        let response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers:    {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(details)
        })

        setStatus('Submit')
        let result = await response.json()
        alert(result.status)
    }


    const inputClass = 'px-6 py-4 outline-none focus:border-b-2 focus:border-accent hover:bg-text1/10 bg-text1/5 font-code placeholder:text-text1/40 font-regular my-2 w-full text-text1/90 focus:text-accent' 

    return(
        <form onSubmit = {handleSubmission} className = {'px-10'}>
            <input 
                id  = 'name'
                type = {'text'}
                placeholder = {'Name'}
                className = {inputClass}
                required
            ></input>
            <input 
                id = 'email'
                required
                type = {'text'}
                placeholder = {'Email'}
                className = {inputClass}
            ></input>
            <input 
                type = {'text'}
                id = 'subject'
                placeholder = {'Name'} 
                className = {inputClass}
                required
            ></input>
            <textarea
                id = 'message'
                placeholder = {'Message'}
                className = {`${inputClass} h-36`}
                required
            ></textarea>
            <PrimaryButton description = {currentStatus} icon = {<PaperAirplaneIcon className = {'h-4 w-4'}/>} />
        </form>
    )
}