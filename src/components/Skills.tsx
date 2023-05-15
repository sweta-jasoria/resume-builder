import React, {useCallback, useContext} from 'react';
import {ActionType, AppContext} from '../context/AppContext';
import PrimeCard from '././PrimeCard';
import PrimeTextarea from './PrimeTextarea';
import PrimeChips from './PrimeChips';
import PrevNextBtn from './PrevNextBtn';

const Skills: React.FC = () => {
    const {state, dispatch} = useContext(AppContext);

    const handleClickPrevBtn = useCallback(
        () => {
            dispatch({type: ActionType.ProjectComponent, payload: 2});
        }, [dispatch]
    );

    const handleClickNextBtn = useCallback(
        () => {
            dispatch({type: ActionType.ResumeComponent, payload: 4});
        }, [dispatch]
    );

    const handleInputOnchange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const {name, value} = e.target;
            dispatch({type: ActionType.TextFieldOnChangeEvent, name, value});
        }, [dispatch]
    );

    return (
        <>
            <PrimeCard title='Skills' data-testid='card'>
                <PrimeTextarea labelText='Objective'
                               id='objective'
                               name='objective'
                               ariaLabel='objective'
                               value={state.objective}
                               handleInputOnchange={handleInputOnchange} />

                <PrimeChips labelText='Skill set'
                            id='skill'
                            name='skill'
                            ariaLabel='skill'
                            value={state.skillSet}
                            handleChipsOnchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                        dispatch({type: ActionType.AddNewSkill,
                                                                        payload: (e.target as HTMLInputElement).value})} />

                <PrimeChips labelText='Languages'
                            id='language'
                            name='language'
                            ariaLabel='language'
                            value={state.language}
                            handleChipsOnchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                        dispatch({type: ActionType.AddNewLanguage,
                                                                        payload: (e.target as HTMLInputElement).value})} />
            </PrimeCard>

            <PrevNextBtn showPrevBtn={true}
                         btnLabel1='Prev'
                         btnLabel2='Show Resume'
                         handleClickPrevBtn={handleClickPrevBtn}
                         handleClickNextBtn={handleClickNextBtn} />
        </>
    )
};

export default Skills;