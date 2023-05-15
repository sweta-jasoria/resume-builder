import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar links', () => {
    it('Should display logo link', () => {
        render(<Navbar/>);
        const logo = screen.getByText('CR');
        expect(logo).toBeInTheDocument();
    });
    
    it('Should display home link', () => {
       render(<Navbar/>);
       const homeLink = screen.getByText(/home/i);
       expect(homeLink).toBeInTheDocument();

        fireEvent.click(homeLink);
        expect(window.location.href).toBe('http://localhost/#');
    });

    it('Should display about link', () => {
        render(<Navbar/>);
        const aboutLink = screen.getByText(/about/i);
        expect(aboutLink).toBeInTheDocument();

        fireEvent.click(aboutLink);
        expect(window.location.href).toBe('http://localhost/#');
    });

    it('Should display projects link', () => {
        render(<Navbar/>);
        const projectLink = screen.getByText(/projects/i);
        expect(projectLink).toBeInTheDocument();

        fireEvent.click(projectLink);
        expect(window.location.href).toBe('http://localhost/#');
    });

    it('Should display contact link', () => {
        render(<Navbar/>);
        const contactLink = screen.getByText(/contact/i);
        expect(contactLink).toBeInTheDocument();

        fireEvent.click(contactLink);
        expect(window.location.href).toBe('http://localhost/#');
    });
});










