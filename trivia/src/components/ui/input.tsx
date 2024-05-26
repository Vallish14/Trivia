// src/components/ui/Input.tsx
import React from 'react';

interface InputProps {
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ className, placeholder, value, onChange }) => {
    return (
        <input
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
