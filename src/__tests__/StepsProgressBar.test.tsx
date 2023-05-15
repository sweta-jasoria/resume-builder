import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import{initialState, AppContext, ActionType} from '../context/AppContext';
import StepsProgressBar from '../components/StepsProgressBar/StepsProgressBar';

describe('Progress bar component',() => {
    const mockDispatch = jest.fn();

    describe('Personal link', () => {
        it('Should display personal link', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            const personal = screen.getAllByText(/personal/i);
            expect(personal[0]).toBeInTheDocument();
            expect(personal[1]).toBeInTheDocument();
        });

        it('Should fire onclick event', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            const personal = screen.getAllByText(/personal/i);

            fireEvent.click(personal[0]);
            expect(mockDispatch).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.PersonalDetailsComponent, payload: 0});

            fireEvent.click(personal[1]);
            expect(mockDispatch).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.SetProgressBarIndex, payload: 0});
        });
    });

    describe('Education link', () => {
        it('Should display education link', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            expect(screen.getByText(/education/i)).toBeInTheDocument();
        });

        it('Should fire onclick event', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            const education = screen.getByText(/education/i);

            fireEvent.click(education);
            expect(mockDispatch).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.SetProgressBarIndex, payload: 1});
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.EducationComponent, payload: 1});
        });
    });

    describe('Projects link', () => {
        it('Should display projects link', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            expect(screen.getByText(/projects/i)).toBeInTheDocument();
        });

        it('Should fire onclick event', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            const projects = screen.getByText(/projects/i);

            fireEvent.click(projects);
            expect(mockDispatch).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.SetProgressBarIndex, payload: 2});
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.ProjectComponent, payload: 2});
        });
    });

    describe('Skills link', () => {
        it('Should display skills link', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            expect(screen.getByText(/skills/i)).toBeInTheDocument();
        });

        it('Should fire onclick event', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            const skills = screen.getByText(/skills/i);

            fireEvent.click(skills);
            expect(mockDispatch).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.SetProgressBarIndex, payload: 3});
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.SkillsComponent, payload: 3});
        });
    });

    describe('Resume link', () => {
        it('Should display resume link', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            expect(screen.getByText(/resume/i)).toBeInTheDocument();
        });

        it('Should fire onclick event', () => {
            render(
                <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
                    <StepsProgressBar/>
                </AppContext.Provider>
            )

            const resume = screen.getByText(/resume/i);

            fireEvent.click(resume);
            expect(mockDispatch).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.SetProgressBarIndex, payload: 4});
            expect(mockDispatch).toHaveBeenCalledWith({type: ActionType.ResumeComponent, payload: 4});
        });
    });
});