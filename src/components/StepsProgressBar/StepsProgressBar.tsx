import React, {useContext, useMemo} from 'react';
import {ActionType, AppContext} from '../../context/AppContext';
import RenderComponent from '../RenderComponent';
import {Steps} from 'primereact/steps';
import './stepsProgressBar.css';

interface StepsProgressBarLink {
    label: string;
    command: () => void;
}

const StepsProgressBar: React.FC = () => {
    const {state, dispatch} = useContext(AppContext);

    const StepsProgressBarLinks: StepsProgressBarLink[] = useMemo(() => [
        {
            label: 'Personal',
            command: () => {
                dispatch({type: ActionType.PersonalDetailsComponent, payload: 0});
            }
        },
        {
            label: 'Education',
            command: () => {
                dispatch({type: ActionType.EducationComponent, payload: 1});
            }
        },
        {
            label: 'Projects',
            command: () => {
                dispatch({type: ActionType.ProjectComponent, payload: 2});
            }
        },
        {
            label: 'Skills',
            command: () => {
                dispatch({type: ActionType.SkillsComponent, payload: 3});
            }
        },
        {
            label: 'Resume',
            command: () => {
                dispatch({type: ActionType.ResumeComponent, payload: 4});
            }
        }
    ], [dispatch]);

    return (
        <>
            <div className='steps-demo w-6 mt-4 mb-0 m-auto'>
                <div className='card'>
                    <Steps model={StepsProgressBarLinks}
                           activeIndex={state.progressBarIndex}
                           onSelect={(e) => dispatch({type: ActionType.SetProgressBarIndex,
                                                                         payload: e.index})}
                           readOnly={false} />
                </div>
            </div>

            <RenderComponent />
        </>
    )
};

export default StepsProgressBar;