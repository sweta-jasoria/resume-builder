import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrimeTextField from '../components/PrimeTextField';

describe('Text field component', () => {
     const labelText = 'Email';
     const id = 'email';
     const type = 'text';
     const name = 'email';
     const placeholder = 'Enter email';
     const ariaLabel = 'email';
     const value = '';
     const handleInputOnchange = jest.fn();

     it('Should display text field with all attributes correctly', () => {
        render(<PrimeTextField labelText={labelText}
                               id={id}
                               type={type}
                               name={name}
                               value={value}
                               placeholder={placeholder}
                               ariaLabel={ariaLabel}
                               handleOnchange={handleInputOnchange} />);

        const input = screen.getByLabelText('email');
        expect(input).toBeInTheDocument();

        userEvent.type(input, 'abc@gmail.com');
        expect(handleInputOnchange).toHaveBeenCalledTimes(13);
     });

     it('Should fire onchange event', () => {
          render(<PrimeTextField labelText={labelText}
                                 id={id}
                                 type={type}
                                 name={name}
                                 value={value}
                                 placeholder={placeholder}
                                 ariaLabel={ariaLabel}
                                 handleOnchange={handleInputOnchange} />);

          const input = screen.getByLabelText('email');
          userEvent.type(input, 'abc@gmail.com');
          expect(handleInputOnchange).toHaveBeenCalledTimes(13);
     });
});