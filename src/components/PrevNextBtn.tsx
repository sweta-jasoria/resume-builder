import React from 'react';
import { Button } from 'primereact/button';

interface PrevNextBtnProps {
    showPrevBtn: boolean;
    btnLabel1: string;
    btnLabel2: string;
    handleClickPrevBtn?: () => void;
    handleClickNextBtn: () => void;
}

const PrevNextBtn: React.FC<PrevNextBtnProps> = ({showPrevBtn, btnLabel1, btnLabel2,
                                                     handleClickPrevBtn, handleClickNextBtn}) => {
    return (
        <div className='flex justify-content-between
                        mt-4 mb-4 mx-auto
                        pl-2 md:pl-0 pr-2 md:pr-0
                        md:w-7 lg:w-8'>
            {showPrevBtn ? (
                <Button label={btnLabel1}
                        icon='pi pi-arrow-left'
                        iconPos='left'
                        className='button'
                        style={{'visibility': 'visible'}}
                        onClick={handleClickPrevBtn}/>
                ) : (
                <Button label={btnLabel1}
                        icon='pi pi-arrow-left'
                        iconPos='left'
                        className='button'
                        style={{'visibility': 'hidden'}}
                        onClick={handleClickPrevBtn}/>
                )
            }
            <Button label={btnLabel2}
                    icon='pi pi-arrow-right'
                    iconPos='right'
                    className='button'
                    onClick={handleClickNextBtn}/>
        </div>
    )
};

export default PrevNextBtn;