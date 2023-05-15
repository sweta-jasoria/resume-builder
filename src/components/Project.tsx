import React, {useCallback, useContext} from 'react';
import {ActionType, AppContext} from '../context/AppContext';
import AddProject, {ProjectProps} from './AddProject';
import PrevNextBtn from './PrevNextBtn';

const Project: React.FC = () => {
    const {state, dispatch} = useContext(AppContext);

    const handleClickPrevBtn = useCallback(
        () => {
            dispatch({type: ActionType.EducationComponent, payload: 1});
        }, [dispatch]
    );

    const handleClickNextBtn = useCallback(
        () => {
            dispatch({type: ActionType.SkillsComponent, payload: 3});
        }, [dispatch]
    );

    return (
        <>
            {state.project.map((item: ProjectProps) => <AddProject _id={item._id}
                                                                   key={1 + Math.random() * 100}
                                                                   role={item.role}
                                                                   name={item.name}
                                                                   duration={item.duration}
                                                                   description={item.description} />)
            }

            <PrevNextBtn showPrevBtn={true}
                         btnLabel1='Prev'
                         btnLabel2='Next'
                         handleClickPrevBtn={handleClickPrevBtn}
                         handleClickNextBtn={handleClickNextBtn}/>
        </>
    )
};

export default Project;