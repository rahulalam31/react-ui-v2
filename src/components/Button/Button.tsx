import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import './button.css';
import { ButtonProps } from "./Button.types";


const Button: FC<ButtonProps> = ({
    children, onClick,
    type = 'button',
    buttonStyle = 'solid',
    variant = 'primary',
    size = 'base',
    iconOnly = false,
    disabled = false,
    className = '',
    ...props }) => {

    const baseClass = 'aegov-btn';

    const variantClass = {
        primary: '',
        secondary: 'btn-secondary'
    }[variant];

    const styleClass = {
        solid: 'btn-solid',
        outline: 'btn-outline',
        soft: 'btn-soft',
        link: 'btn-link'
    }[buttonStyle];

    const sizeClass = {
        base: 'btn-base',
        lg: 'btn-lg',
        sm: 'btn-sm',
        xs: 'btn-xs'
    }[size];

    const iconClass = iconOnly ? 'btn-icon' : '';
    return (
        <button
            type={type}
            className={`${baseClass} ${variantClass} ${styleClass} ${sizeClass} ${iconClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;