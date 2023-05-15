import React from 'react';
import {render, screen} from '@testing-library/react';
import SocialMediaLinks from '../components/SocialMediaLinks';

describe('Social media links component', () => {
   it('Should display linkedin link', () => {
      render(<SocialMediaLinks/>);
      const linkedinLink = screen.getByTestId('https://www.linkedin.com/');
      expect(linkedinLink).toBeInTheDocument();
   });

   it('Should display github link', () => {
      render(<SocialMediaLinks/>);
      const githubLink = screen.getByTestId('https://www.github.com/');
      expect(githubLink).toBeInTheDocument();
   });

   it('Should display facebook link', () => {
      render(<SocialMediaLinks/>);
      const facebookLink = screen.getByTestId('https://www.facebook.com/');
      expect(facebookLink).toBeInTheDocument();
   });
});