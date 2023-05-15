import React from 'react';
import {render, screen} from '@testing-library/react';
import PrimeCard from '../components/PrimeCard';
import Skills from '../components/Skills';

describe('Skills component', () => {
   it('Should display PrimeCard component', () => {
       const title = 'PrimeCard title';
       const children = <div data-testid='cardChildren'>PrimeCard children</div>;

       render(
           <PrimeCard title={title}>{children}</PrimeCard>
       )

       expect(screen.getByText(title)).toBeInTheDocument();
       expect(screen.getByText(/PrimeCard children/i)).toBeInTheDocument();
   });

   describe('PrimeChips component', () => {
      it('Should display PrimeChips component for skills', () => {
          render(
              <Skills />
          )

          const chipsSkills = screen.getByLabelText('skill');
          expect(chipsSkills).toBeInTheDocument();
      });

       it('Should display PrimeChips component for language', () => {
           render(
               <Skills />
           )

           const chipsLanguage = screen.getByLabelText('language');
           expect(chipsLanguage).toBeInTheDocument();
       });
   });

   it('Should display PrimeTextarea component', () => {
       render(
           <Skills />
       )

       const textareaObjective = screen.getByLabelText('objective');
       expect(textareaObjective).toBeInTheDocument();
   });

   describe('PrevNextBtn component', () => {
       it('Should display Prev button', () => {
           render(
               <Skills />
           )

           const PrevBtn = screen.getByText('Prev');
           expect(PrevBtn).toBeInTheDocument();
       });

       it('Should display Show Resume button', () => {
           render(
               <Skills />
           )

           const ResumeBtn = screen.getByText(/Show Resume/i);
           expect(ResumeBtn).toBeInTheDocument();
       });
   });
});