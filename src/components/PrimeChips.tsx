import React from 'react';
import {Chips} from 'primereact/chips';

interface ChipsElementProps {
    labelText: string;
    id: string;
    name: string;
    ariaLabel: string;
    value: string[];
    handleChipsOnchange: (e: any) => void;
}

const PrimeChips: React.FC<ChipsElementProps> = ({labelText,
                                                       id,
                                                       name,
                                                       value,
                                                       ariaLabel,
                                                       handleChipsOnchange}) => {
    return (
        <>
            <label htmlFor={id}
                   className='block text-900 font-medium mb-2'>
                {labelText}
            </label>
            <Chips id={id}
                   name={name}
                   type='text'
                   value={value}
                   aria-label={ariaLabel}
                   style={{display: 'block'}}
                   className='w-full mb-3'
                   onChange={handleChipsOnchange} />
        </>
    )
};

export default PrimeChips;