import React, { useState, useRef } from 'react'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'


export function ContactForm()   {

    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [subject, setSubject ] = useState('')
    const [message, setMessage ] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event: Form Submit');
    console.log(name, email, subject, message)
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  };


    const classname = 'focus:rounded-none rounded placeholder:text-slate-300/10\
                       border-emerald-300 focus:border-b bg-slate-300/5 lg:px-6 px-4 \
                       lg:p-4 p-3 w-full focus:outline-none text-emerald-300 fields'


    return(
    <div className = {'h-screen flex flex-col contact my-40 md:my-0 fmd:mt-20'}>
        <h1 className = {'text-yellow-200 text-4xl md:text-5xl lg:text-6xl px-5 font-bold pt-8 \
         lg:pb-8 lg:pt-16 text-center'}>
            Get in touch
        </h1>
        <p className = {'text-slate-500 px-5 md:px-80 font-3xl text-center text-left'}>
            Do you have something you would like to talk about?
            Please feel free to get in touch anytime.
        </p>
        <form id = 'contactForm'
              onSubmit = {() => {handleSubmit}}
              className = {'flex flex-col items-center justify-start px-5 md:px-48 lg:px-80 \
              pt-10  gap-3'}>
            <div className = {'flex w-full flex-col md:flex-row gap-3'}>
                <input
                    type = 'text'
                    onChange = {(e) => {setName(e.target.value)}}
                    className = {`${classname}`}
                    placeholder = 'Name'>
                </input>

                <input
                    onChange = {(e) => {setMessage(e.target.value)}}
                    type = 'email'
                    className = {`${classname}`}
                    placeholder = 'Email'>
                </input>
            </div>

            <input
                type = 'text'
                onChange = {(e) => {setSubject(e.target.value)}}
                className = {`${classname}`}
                placeholder = 'Subject'>
            </input>

            <textarea
                onChange = {(e) => {setMessage(e.target.value)}}
                className = {`${classname} h-32`}
                placeholder = {'message'}>
            </textarea>

            <div
                <Button desc = 'Submit'/>

            </div>
            </form>
                    <div className = {'h-48'}></div>
    </div>
    )
}
