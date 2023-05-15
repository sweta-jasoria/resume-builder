import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

interface TextareaElementProps {
    labelText: string;
    id: string;
    name: string;
    value: string;
    ariaLabel: string;
    handleInputOnchange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const PrimeTextarea: React.FC<TextareaElementProps> = ({labelText,
                                                             id,
                                                             name,
                                                             value,
                                                             ariaLabel,
                                                             handleInputOnchange}) => {
    return (
        <>
            <label htmlFor={id}
                   className='block text-900 font-medium mb-2'>
                        {labelText}
            </label>
            <InputTextarea id={id}
                           name={name}
                           value={value}
                           placeholder='Enter maximum 150 characters'
                           rows={3}
                           style={{resize: 'none'}}
                           className='w-full mb-3'
                           aria-label={ariaLabel}
                           onChange={handleInputOnchange} />
        </>
    )
};

export default PrimeTextarea;
