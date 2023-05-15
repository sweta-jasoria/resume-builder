import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrimeChips from '../components/PrimeChips';

describe('PrimeChips component', () => {
    const labelText = 'Skill set';
    const id = 'skillSet';
    const name = 'skillSet';
    const value = ['React JS', 'Node JS'];
    const ariaLabel = 'skillSet';
    const handleChipsOnchange = jest.fn();

    it('Should display chips element with all attributes correctly', () => {
        render(<PrimeChips id={id}
                           labelText={labelText}
                           name={name}
                           ariaLabel={ariaLabel}
                           value={value}
                           handleChipsOnchange={handleChipsOnchange}/>);

        expect(screen.getByLabelText('skillSet')).toBeInTheDocument();
    });

    it('Should add element in value array', () => {
        render(<PrimeChips id={id}
                           labelText={labelText}
                           name={name}
                           ariaLabel={ariaLabel}
                           value={value}
                           handleChipsOnchange={handleChipsOnchange} />);

        const chips = screen.getByLabelText('skillSet');

        userEvent.type(chips, 'HTML');
        userEvent.type(chips, '{enter}');
        expect(handleChipsOnchange).toHaveBeenCalled();
    });
});