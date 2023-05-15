import React from 'react';
import {InputText} from 'primereact/inputtext';

interface TextFieldProps {
    labelText: string;
    id: string;
    type: string;
    name: string;
    value: string;
    ariaLabel: string;
    placeholder?: string;
    handleOnchange: (e: React.ChangeEvent<HTMLInputElement>, index?: number) => void;
}

const PrimeTextField: React.FC<TextFieldProps> = ({labelText,
                                                       id,
                                                       type,
                                                       name,
                                                       value,
                                                       placeholder,
                                                       ariaLabel,
                                                       handleOnchange}) => {
    return (
        <>
            <label htmlFor={id}
                   className='block text-900 font-medium mb-2'>
                {labelText}
            </label>
            <InputText id={id}
                       type={type}
                       name={name}
                       placeholder={placeholder}
                       className='w-full mb-3'
                       aria-label={ariaLabel}
                       value={value}
                       style={{fontSize: 'var(--text-size)'}}
                       onChange={handleOnchange} />
        </>
    )
};

export default PrimeTextField;