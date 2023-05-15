import React from 'react';
import {render, screen} from '@testing-library/react';
import PrimeCard from '../components/PrimeCard';

describe('PrimeCard component', () => {
   it('Should display card element with title and children', () => {
      const title = 'PrimeCard title';
      const children = <div data-testid='cardChildren'>PrimeCard children</div>;

      render(<PrimeCard title={title}>{children}</PrimeCard>);

      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(/PrimeCard children/i)).toBeInTheDocument();
   });
});