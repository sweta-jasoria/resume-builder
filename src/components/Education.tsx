import React, {useCallback, useContext} from 'react';
import {ActionType, AppContext} from '../context/AppContext';
import AddEducation, {EducationProps} from './AddEducation';
import PrevNextBtn from './PrevNextBtn';

const Education: React.FC = () => {
    const {state, dispatch} = useContext(AppContext);

    const handleClickPrevBtn = useCallback(
        () => {
            dispatch({type: ActionType.PersonalDetailsComponent, payload: 0});
        }, [dispatch]
    );

    const handleClickNextBtn = useCallback(
        () => {
            dispatch({type: ActionType.ProjectComponent, payload: 2});
        }, [dispatch]
    );

    return (
        <>
            {state.education.map((item: EducationProps) => <AddEducation _id={item._id}
                                                                         key={1 + Math.random() * 100}
                                                                         degree={item.degree}
                                                                         year={item.year}
                                                                         board={item.board}
                                                                         score={item.score} />)
            }

            <PrevNextBtn showPrevBtn={true}
                         btnLabel1='Prev'
                         btnLabel2='Next'
                         handleClickPrevBtn={handleClickPrevBtn}
                         handleClickNextBtn={handleClickNextBtn}/>
        </>
    )
};

export default Education;