import { Slot } from '@radix-ui/react-slot'
import React, { InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export interface TextInputRootProps {
    children:React.ReactNode
}

function TextInputRoot(props:TextInputRootProps) {
    return (
    <div className='flex items-center h-12 gap-3 py-4 px-3 bg-gray-800 rounded   w-full focus-within:ring-2 ring-cyan-300 '>
        { props.children}
     </div>)
    
}

export interface TextInputIconProps{
    children:React.ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className='w-6 h-6 text-gray-500 '>
            {props.children}
        </Slot>
    )
}

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{ }

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
        className="bg-transparent flex-1 text-gray-100 text-sx placeholder:text-gray-500 outline-none"
                {...props} />
        
    )
}

TextInputInput.displayName ='TextInput.Input'
TextInputRoot.displayName ='TextInput.Root'
TextInputIcon.displayName ='TextInput.Icon'
export const TextInput = {
    Root: TextInputRoot,
    Icon: TextInputIcon,
    Input: TextInputInput

}