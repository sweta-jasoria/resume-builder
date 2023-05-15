import React, {useCallback, useContext} from 'react';
import {ActionType, AppContext} from '../context/AppContext';
import PrimeCard from '././PrimeCard';
import ProfilePhoto from './ProfilePhoto';
import PrimeTextField from './PrimeTextField';
import PrevNextBtn from './PrevNextBtn';

const PersonalDetails: React.FC = () => {
    const {state, dispatch} = useContext(AppContext);

    const handleClickNextBtn = useCallback(
        () => {
            dispatch({type: ActionType.EducationComponent, payload: 1});
        }, [dispatch]
    );

    const handleInputOnchange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            dispatch({type: ActionType.TextFieldOnChangeEvent, name, value});
        }, [dispatch]
    );

    return (
        <>
            <PrimeCard title='Personal Details'>
                <div className='grid'>
                    <div className='col-12 md:col-4 flex justify-content-center'
                         data-testid='profilePhotoComponent'>
                        <ProfilePhoto />
                    </div>
                    <div className='col-12 md:col-8 md:m-0'>
                        <div className='grid'>
                            <div className='col-12 md:col-6 pt-0 pb-0'>
                                <PrimeTextField labelText='First Name'
                                                id='firstName'
                                                type='text'
                                                name='firstName'
                                                placeholder='John'
                                                ariaLabel='firstName'
                                                value={state.firstName}
                                                handleOnchange={handleInputOnchange} />
                            </div>
                            <div className='col-12 md:col-6 pt-0 pb-0'>
                                <PrimeTextField labelText='Last Name'
                                                id='lastName'
                                                type='text'
                                                name='lastName'
                                                placeholder='Smith'
                                                ariaLabel='lastName'
                                                value={state.lastName}
                                                handleOnchange={handleInputOnchange} />
                            </div>
                        </div>

                        <PrimeTextField labelText='Designation'
                                        id='designation'
                                        type='text'
                                        name='designation'
                                        ariaLabel='designation'
                                        value={state.designation}
                                        handleOnchange={handleInputOnchange} />

                        <PrimeTextField labelText='Email'
                                        id='email'
                                        type='text'
                                        name='email'
                                        ariaLabel='email'
                                        value={state.email}
                                        handleOnchange={handleInputOnchange} />

                        <PrimeTextField labelText='Phone number'
                                        id='mobile'
                                        type='number'
                                        name='mobile'
                                        ariaLabel='mobile'
                                        value={state.mobile}
                                        handleOnchange={handleInputOnchange} />
                    </div>
                </div>
            </PrimeCard>

            <PrevNextBtn showPrevBtn={false}
                         btnLabel1='Prev'
                         btnLabel2='Next'
                         handleClickNextBtn={handleClickNextBtn}/>
        </>
    )
};

export default PersonalDetails;