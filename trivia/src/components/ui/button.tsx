// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps {
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
