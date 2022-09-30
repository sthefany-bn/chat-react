import React from "react";

export interface ButtonProps {
    bgColors?: 'default' | 'add' | 'edit' | 'remove'
}

export interface IButton extends HTMLProps<HTMLElement>, ButtonProps {
    children?: React.ReactNode
}