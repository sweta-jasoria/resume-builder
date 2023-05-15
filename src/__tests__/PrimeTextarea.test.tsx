import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrimeTextarea from '../components/PrimeTextarea';

describe('PrimeTextarea component', () => {
    const labelText = 'Email';
    const id = 'email';
    const name = 'email';
    const ariaLabel = 'email';
    const value = '';
    const handleInputOnchange = jest.fn();

   it('Should display text area with all attributes correctly', () => {
       render(<PrimeTextarea id={id}
                             name={name}
                             labelText={labelText}
                             value={value}
                             ariaLabel={ariaLabel}
                             handleInputOnchange={handleInputOnchange} />);

       const textareaElement = screen.getByLabelText('email');
       expect(textareaElement).toBeInTheDocument();
   });

   it('Should fire onchange event', () => {
       render(<PrimeTextarea id={id}
                             name={name}
                             labelText={labelText}
                             value={value}
                             ariaLabel={ariaLabel}
                             handleInputOnchange={handleInputOnchange} />);


       const textarea = screen.getByLabelText('email');
       userEvent.type(textarea, 'abc@gmail.com');
       expect(handleInputOnchange).toHaveBeenCalledTimes(13);
   });
});