import React, {useContext, useEffect, useRef} from 'react';
import {AppContext, ActionType} from '../context/AppContext';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'primereact/button';
import {EducationProps} from './AddEducation';
import {ProjectProps} from './AddProject';
import PrimeCard from './PrimeCard';

const Resume: React.FC = () => {
    const {state, dispatch} = useContext(AppContext);

    useEffect(() => {
        dispatch({type: ActionType.ShowSocialMediaLinks, payload: false});

        return () => {
            dispatch({type: ActionType.ShowSocialMediaLinks, payload: true});
        }
    }, []);

    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Resume'
    });

    return (
        <>
            <div className='flex justify-content-center mt-5 mb-2'>
                <Button label='Download' className='button' onClick={handlePrint} />
            </div>

            <PrimeCard>
                <div ref={componentRef}
                     className='grid'
                     style={{boxSizing: 'border-box',
                             backgroundColor: 'var(--blue)',
                             height: '100vh'}}>
                        <div className='col-4' style={{color: 'var(--white)'}}>
                            <div className='pt-6 pb-4 text-center'>
                                {
                                    state.profilePhoto && (
                                        <img src={state.profilePhoto}
                                             alt='profile picture'
                                             width='150px'
                                             height='150px'
                                             style={{backgroundColor: 'var(--white)',
                                                     borderRadius: '75px',
                                                     objectFit: 'contain'}} />
                                    )
                                }
                            </div>

                            <div className='pl-5 pr-4'>
                                <div className='pt-7'>
                                    <div className='section-heading pl-1 pb-2'>
                                        Contact
                                    </div>
                                    <div className='section-subheading-title mt-3'>Phone</div>
                                    <div className='section-subheading-description'>{state.mobile}</div>

                                    <div className='section-subheading-title mt-3'>Email</div>
                                    <div className='section-subheading-description'>{state.email}</div>
                                </div>

                                <div className='pt-7'>
                                    <div className='section-heading pl-1 pb-2'>
                                        Education
                                    </div>
                                    <ul>
                                    {
                                        state.education.map((item: EducationProps) => (
                                            <li className='mt-3'>
                                                <div className='section-subheading-title'>{item.degree}
                                                    <span className='ms-2'> ({item.year})</span>
                                                </div>
                                                <p className='section-subheading-description'>{item.board}</p>
                                                <p className='section-subheading-description'>({item.score})</p>
                                            </li>
                                        ))
                                    }
                                    </ul>
                                </div>

                                <div className='pt-6'>
                                    <div className='section-heading pl-1 pb-2'>
                                        Language
                                    </div>

                                    <ul className='mt-3'>
                                        {
                                            state.language.map((item: string[]) => (
                                                <li className='language-list'>
                                                        {item}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-8 pl-5 pt-6' style={{backgroundColor: 'var(--white)',
                                                                 color: '#313b4c'}}>
                            <div className='profileName'>
                                <p className='mt-2 mb-1'>{state.firstName} {state.lastName}</p>
                                <p className='designation mt-0'>{state.designation}</p>
                            </div>

                            <p className='objective mt-7'>{state.objective}</p>

                            <div className='section-heading pb-2 mt-7' style={{'borderBottom': '2px solid var(--black)',
                                                                                color: 'var(--black)'}}>
                                Experience
                            </div>
                            <ul>
                                {
                                    state.project.map((item: ProjectProps) => (
                                        <li className='mb-3'>
                                            <div className='project-role font-medium'>{item.role}</div>
                                                <p className='project-name'>
                                                    Project - {item.name}
                                                    <span> ({item.duration})</span>
                                                </p>
                                                <p className='mt-2'>{item.description}</p>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className='section-heading mt-7 mb-2 pb-2' style={{'borderBottom': '2px solid var(--black)',
                                                                                     color: 'var(--black)'}}>
                                My Skills And Expertise
                            </div>

                            {
                                state.skillSet.map((item: string[]) => (
                                    <div className='inline-block p-2 m-2'
                                         style={{backgroundColor: '#D4E6F1'}}>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </PrimeCard>
        </>
    )
};

export default Resume;