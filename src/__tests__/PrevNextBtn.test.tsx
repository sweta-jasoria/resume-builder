import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import PrevNextBtn from '../components/PrevNextBtn';

describe('PrevNextBtn component', () => {
   const btnLabel1 = 'Prev';
   const btnLabel2 = 'Next';
   const handleClickPrevBtn = jest.fn();
   const handleClickNextBtn = jest.fn();

   describe('Next button', () => {
      it('Should display Next button', () => {
         const showPrevBtn = true;

         render(<PrevNextBtn showPrevBtn={showPrevBtn}
                             btnLabel1={btnLabel1}
                             btnLabel2={btnLabel2}
                             handleClickPrevBtn={handleClickPrevBtn}
                             handleClickNextBtn={handleClickNextBtn}/>);

         const nextBtn = screen.getByLabelText(btnLabel2);
         expect(nextBtn).toBeInTheDocument();
      });

      it('Should fire onclick event', () => {
         const showPrevBtn = true;

         render(<PrevNextBtn showPrevBtn={showPrevBtn}
                             btnLabel1={btnLabel1}
                             btnLabel2={btnLabel2}
                             handleClickPrevBtn={handleClickPrevBtn}
                             handleClickNextBtn={handleClickNextBtn}/>);

         const nextBtn = screen.getByLabelText(btnLabel2);
         fireEvent.click(nextBtn);
         expect(handleClickNextBtn).toHaveBeenCalledTimes(1);
      });
   });

   describe('Prev button', () => {
      it('Should visible when value of showPrevBtn is true', () => {
         const showPrevBtn = true;

         render(<PrevNextBtn showPrevBtn={showPrevBtn}
                             btnLabel1={btnLabel1}
                             btnLabel2={btnLabel2}
                             handleClickPrevBtn={handleClickPrevBtn}
                             handleClickNextBtn={handleClickNextBtn}/>);

         const prevBtn = screen.getByLabelText(btnLabel1);
         expect(prevBtn).toBeInTheDocument();
         expect(prevBtn).toBeVisible();

         expect(prevBtn).toHaveStyle({'visibility': 'visible'});
      });

      it('Should not visible when value of showPrevBtn is false', () => {
         const showPrevBtn = false;

         render(<PrevNextBtn showPrevBtn={showPrevBtn}
                             btnLabel1={btnLabel1}
                             btnLabel2={btnLabel2}
                             handleClickPrevBtn={handleClickPrevBtn}
                             handleClickNextBtn={handleClickNextBtn}/>);

         const prevBtn = screen.getByLabelText(btnLabel1);
         expect(prevBtn).toBeInTheDocument();
         expect(prevBtn).not.toBeVisible();

         expect(prevBtn).toHaveStyle({'visibility': 'hidden'});
      });

      it('Should fire onclick event', () => {
         const showPrevBtn = true;

         render(<PrevNextBtn showPrevBtn={showPrevBtn}
                             btnLabel1={btnLabel1}
                             btnLabel2={btnLabel2}
                             handleClickPrevBtn={handleClickPrevBtn}
                             handleClickNextBtn={handleClickNextBtn}/>);

         const prevBtn = screen.getByLabelText(btnLabel1);
         fireEvent.click(prevBtn);
         expect(handleClickPrevBtn).toHaveBeenCalledTimes(1);
      });
   });
});

