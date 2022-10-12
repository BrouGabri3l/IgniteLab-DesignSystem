import { HeadingProps, Heading } from "./Heading";
import {Meta,StoryObj} from "@storybook/react"
export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children:"Lorem Ipsum"
    },
    argTypes: {
        size: ['sm', 'md', 'lg'],
        control: {
            type: 'inline-radio'
        }
    }
} as Meta<HeadingProps>
export const Default:StoryObj<HeadingProps> = {}

export const Small:StoryObj<HeadingProps> = {
    args: {
        size:'sm',
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size:'lg',
    }
}
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        size: "md",
        asChild: true,
        children: (
            <h1>Custom Heading</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true 
            }
        },
        asChild: {
            table: {
                disable: true 
            }
        }
    }
}