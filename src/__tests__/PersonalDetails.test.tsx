import React from 'react';
import {render, screen} from '@testing-library/react';
import PersonalDetails from '../components/PersonalDetails';

describe('Personal details component', () => {
    it('Should display ProfilePhoto component', () => {
        render (
            <PersonalDetails />
        )

        const profilePhotoComponent = screen.getByTestId('profilePhotoComponent');
        expect(profilePhotoComponent).toBeInTheDocument();
    });

   describe('Text field component', () => {
        it('Should display first name text field', () => {
            render (
                <PersonalDetails />
            )

            const firstName = screen.getByLabelText('firstName');
            expect(firstName).toBeInTheDocument();
        });

       it('Should display last name text field', () => {
           render (
               <PersonalDetails />
           )

           const lastName = screen.getByLabelText('lastName');
           expect(lastName).toBeInTheDocument();
       });

       it('Should display designation text field', () => {
           render (
               <PersonalDetails />
           )

           const designation = screen.getByLabelText('designation');
           expect(designation).toBeInTheDocument();
       });


       it('Should display email text field', () => {
           render (
               <PersonalDetails />
           )

           const email = screen.getByLabelText('email');
           expect(email).toBeInTheDocument();
       });

       it('Should display mobile text field', () => {
           render (
               <PersonalDetails />
           )

           const mobile = screen.getByLabelText('mobile');
           expect(mobile).toBeInTheDocument();
       });
   });

   describe('PrevNextBtn component', () => {
       it('Should show Next button', () => {
           render(

               <PersonalDetails />
           )

           const nextBtn = screen.getByLabelText('Next');
           expect(nextBtn).toBeInTheDocument();
       });

       it('Should not show Prev button when value of showPrevBtn is false', () => {
           render(

               <PersonalDetails />
           )

           const prevBtn = screen.getByLabelText('Prev');
           expect(prevBtn).toBeInTheDocument();
           expect(prevBtn).not.toBeVisible();

           expect(prevBtn).toHaveStyle({'visibility': 'hidden'});
       });
   });
});