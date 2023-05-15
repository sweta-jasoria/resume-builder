import React, {useCallback, useContext} from 'react';
import {ActionType, AppContext} from '../context/AppContext';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';
import PrimeCard from './PrimeCard';
import PrimeTextField from './PrimeTextField';
import * as _ from 'lodash';

export interface ProjectProps {
    _id: number;
    role: string;
    name: string;
    duration: string;
    description: string;
}

const AddProject: React.FC<ProjectProps> = ({_id, role, name, duration, description}) => {
    const {state, dispatch} = useContext(AppContext);

    const handleInputOnchange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
            let newProject = [...state.project];
            const i = _.findIndex(newProject, (obj => obj._id === index), 0);

            newProject[i][e.currentTarget.name] = e.currentTarget.value;
            dispatch({type: ActionType.AddRemoveProjectDetail, payload: newProject});
        }, [dispatch, state.project]
    );

    const handleProjectId = useCallback(
        () => {
            dispatch({type: ActionType.SetProjectId});
        }, [dispatch]
    );

    const handleAddProject = useCallback(
        () => {
            handleProjectId();

            let newProject = [...state.project, {_id: `${state.projectId}`,
                role: '',
                name: '',
                duration: '',
                description: ''}];

            dispatch({type: ActionType.AddRemoveProjectDetail, payload: newProject});
        }, [dispatch, state.projectId, state.project, handleProjectId],
    );

    const handleRemoveProject = useCallback(
        (_id: number) => {
            let newProject1 = [...state.project];
            let newProject2 = newProject1.filter(i => i._id !== _id);

            dispatch({type: ActionType.AddRemoveProjectDetail, payload: newProject2});
        }, [dispatch, state.project]
    );

    return (
        <PrimeCard title='Add Project Details'>
            <PrimeTextField labelText='Project Role'
                            id='role'
                            type='text'
                            name='role'
                            placeholder='Graphic Designer'
                            ariaLabel='role'
                            value={role}
                            handleOnchange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputOnchange(e, _id)} />

            <div className='grid'>
                <div className='col-12 md:col-6 pt-0 pb-0'>
                    <PrimeTextField labelText='Project Name'
                                    id='name'
                                    type='text'
                                    name='name'
                                    placeholder='Piper Chat'
                                    ariaLabel='name'
                                    value={name}
                                    handleOnchange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputOnchange(e, _id)} />
                </div>

                <div className='col-12 md:col-6 pt-0 pb-0'>
                    <PrimeTextField labelText='Project Duration'
                                    id='duration'
                                    type='text'
                                    name='duration'
                                    placeholder='2020-2022'
                                    ariaLabel='duration'
                                    value={duration}
                                    handleOnchange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputOnchange(e, _id)} />
                </div>
            </div>

            <PrimeTextField labelText='Project description'
                            id='description'
                            type='text'
                            name='description'
                            placeholder='2015-2019'
                            ariaLabel='Video chat with great picture quality'
                            value={description}
                            handleOnchange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputOnchange(e, _id)} />

            <div className='mt-3 md:mt-2 ml-2'>
                <AiOutlinePlusCircle color='var(--red)'
                                     size='18'
                                     className='mr-3'
                                     style={{cursor: 'pointer'}}
                                     onClick={handleAddProject} />

                {state.project.length !== 1 &&
                    <AiOutlineMinusCircle color='var(--red)'
                                          size='18'
                                          className='mr-3'
                                          style={{cursor: 'pointer'}}
                                          onClick={() => handleRemoveProject(_id)} />
                }
            </div>
        </PrimeCard>
    )
};

export default AddProject;