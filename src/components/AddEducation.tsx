import React, {useCallback, useContext} from 'react';
import {ActionType, AppContext} from '../context/AppContext';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';
import PrimeCard from './PrimeCard';
import PrimeTextField from './PrimeTextField';
import * as _ from 'lodash';

export interface EducationProps {
    _id: number;
    degree: string;
    year: string;
    board: string;
    score: string;
}

const AddEducation: React.FC<EducationProps> = ({_id, degree, year, board, score}) => {
    const {state, dispatch} = useContext(AppContext);

    const handleOnchange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
            let newEducation = [...state.education];
            const i = _.findIndex(newEducation, (obj => obj._id === index), 0);

            newEducation[i][e.currentTarget.name] = e.currentTarget.value;
            dispatch({type: ActionType.AddRemoveEducationDetail , payload: newEducation});
        }, [dispatch, state.education]
    );

    const handleEducationId = useCallback(
        () => {
            dispatch({type: ActionType.SetEducationId});
        }, [dispatch]
    );

    const handleAddEducation = useCallback(
        () => {
            handleEducationId();

            let newEducation = [...state.education, {_id: `${state.educationId}`,
                degree: '',
                year: '',
                board: '',
                score: ''}];

            dispatch({type: ActionType.AddRemoveEducationDetail, payload: newEducation});
        }, [dispatch, state.educationId, state.education, handleEducationId],
    );

    const handleRemoveEducation = useCallback(
        (_id: number) => {
            let newEducation1 = [...state.education];
            let newEducation2 = newEducation1.filter(i => i._id !== _id);

            dispatch({type: ActionType.AddRemoveEducationDetail, payload: newEducation2});
        }, [dispatch, state.education]
    );

    return (
        <PrimeCard title='Add Education Details'>
            <div className='grid'>
                <div className='col-12 md:col-6 pt-0 pb-0'>
                    <PrimeTextField labelText='Degree'
                                    id='degree'
                                    type='text'
                                    name='degree'
                                    placeholder='BS'
                                    ariaLabel='degree'
                                    value={degree}
                                    handleOnchange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnchange(e, _id)} />

                    <PrimeTextField labelText='Year'
                                    id='year'
                                    type='text'
                                    name='year'
                                    placeholder='2015-2019'
                                    ariaLabel='year'
                                    value={year}
                                    handleOnchange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnchange(e, _id)} />
                </div>

                <div className='col-12 md:col-6 pt-0 pb-0'>
                    <PrimeTextField labelText='Board'
                                    id='board'
                                    type='text'
                                    name='board'
                                    placeholder='Stanford University'
                                    ariaLabel='board'
                                    value={board}
                                    handleOnchange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnchange(e, _id)} />

                    <PrimeTextField labelText='Score'
                                    id='score'
                                    type='text'
                                    name='score'
                                    placeholder='CGPA - 3.6'
                                    ariaLabel='score'
                                    value={score}
                                    handleOnchange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnchange(e, _id)} />

                </div>

                <div className='mt-3 md:mt-2 ml-2'>
                    <AiOutlinePlusCircle color='var(--red)'
                                         size='18'
                                         className='mr-3'
                                         aria-label='PlusCircleIcon'
                                         data-testid='plusCircleIcon'
                                         style={{cursor: 'pointer'}}
                                         onClick={handleAddEducation} />

                    {state.education.length !== 1 &&
                        <AiOutlineMinusCircle color='var(--red)'
                                              size='18'
                                              className='mr-3'
                                              aria-label='MinusCircleIcon'
                                              data-testid='minusCircleIcon'
                                              style={{cursor: 'pointer'}}
                                              onClick={() => handleRemoveEducation(_id)} />
                    }
                </div>
            </div>
        </PrimeCard>
    )
};

export default AddEducation;
