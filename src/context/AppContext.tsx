import React, {ReactNode, useReducer, createContext} from 'react';

//enum
export enum Components {
    PersonalDetails = 'PersonalDetails',
    Education = 'Education',
    Project = 'Project',
    Skills = 'Skills',
    Resume = 'Resume'
}

//state
interface State {
    progressBarIndex: number;
    componentToBeRendered: string;

    profilePhoto: string;
    firstName: string;
    lastName: string;
    designation: string;
    email: string;
    mobile: string;

    objective: string;
    skillSet: any;
    language: any;

    education: any;
    educationId: number;

    project: any;
    projectId: number;

    showSocialMediaLinks: boolean;
}

//action type enum
export enum ActionType {
    SetProgressBarIndex = 'setProgressBarIndex',

    PersonalDetailsComponent = 'personalDetailsComponent',
    EducationComponent = 'educationComponent',
    ProjectComponent = 'projectComponent',
    SkillsComponent = 'skillsComponent',
    ResumeComponent = 'resumeComponent',

    SetProfilePhoto = 'setProfilePhoto',
    TextFieldOnChangeEvent = 'textFieldOnChangeEvent',

    AddNewSkill = 'addNewSkill',
    AddNewLanguage = 'addNewLanguage',

    AddRemoveEducationDetail = 'addRemoveEducationDetail',
    AddRemoveProjectDetail = 'addRemoveProjectDetail',

    SetEducationId = 'setEducationId',
    SetProjectId = 'setProjectId',

    ShowSocialMediaLinks = 'showSocialMediaLinks'
}

//action type
type ProgressBarAction = {
    type: ActionType.SetProgressBarIndex;
    payload: number;
}

type ComponentToBeRenderedAction = {
    type: ActionType.PersonalDetailsComponent
          | ActionType.EducationComponent
          | ActionType.ProjectComponent
          | ActionType.SkillsComponent
          | ActionType.ResumeComponent;
    payload: number;
}

type ProfilePhotoAction = {
    type: ActionType.SetProfilePhoto;
    payload: string;
}

type TextFieldOnChangeEventAction = {
    type: ActionType.TextFieldOnChangeEvent;
    name: string;
    value: string | number;
}

type ChipsOnChangeEventAction = {
    type: ActionType.AddNewSkill | ActionType.AddNewLanguage;
    payload: string;
}

type EducationDetailAction = {
    type: ActionType.AddRemoveEducationDetail;
    payload: any;
}

type ProjectDetailAction = {
    type: ActionType.AddRemoveProjectDetail;
    payload: any;
}

type CounterIdAction = {
    type: ActionType.SetEducationId | ActionType.SetProjectId;
}

type SocialMediaLinksAction = {
    type: ActionType.ShowSocialMediaLinks;
    payload: boolean;
}

type Action = ProgressBarAction
              | ComponentToBeRenderedAction
              | ProfilePhotoAction
              | TextFieldOnChangeEventAction
              | ChipsOnChangeEventAction
              | EducationDetailAction
              | ProjectDetailAction
              | CounterIdAction
              | SocialMediaLinksAction


export const initialState: State = {
    progressBarIndex: 0,
    componentToBeRendered: 'PersonalDetails',

    profilePhoto: '',
    firstName: '',
    lastName: '',
    designation: '',
    email: '',
    mobile: '',

    objective: '',
    skillSet: ['React JS', 'Node Js'],
    language: ['English', 'Hindi'],

    education: [{_id: 0, degree: '', board: '', year: '', score: ''}],
    educationId: 0,

    project: [{_id: 0, role: '', name: '', duration: '', description: ''}],
    projectId: 0,

    showSocialMediaLinks: true
}


//reducer
export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.SetProgressBarIndex:
            return {...state, progressBarIndex: action.payload}
        case ActionType.PersonalDetailsComponent:
            return {...state, componentToBeRendered: Components.PersonalDetails, progressBarIndex: action.payload}
        case ActionType.EducationComponent:
            return {...state, componentToBeRendered: Components.Education, progressBarIndex: action.payload}
        case ActionType.ProjectComponent:
            return {...state, componentToBeRendered: Components.Project, progressBarIndex: action.payload}
        case ActionType.SkillsComponent:
            return {...state, componentToBeRendered: Components.Skills, progressBarIndex: action.payload}
        case ActionType.ResumeComponent:
            return {...state, componentToBeRendered: Components.Resume, progressBarIndex: action.payload}
        case ActionType.SetProfilePhoto:
            return {...state, profilePhoto: action.payload}
        case ActionType.TextFieldOnChangeEvent:
            return {...state, [action.name]: action.value}
        case ActionType.AddNewSkill:
            return {...state, skillSet: action.payload}
        case ActionType.AddNewLanguage:
            return {...state, language: action.payload}
        case ActionType.AddRemoveEducationDetail:
            return {...state, education: action.payload}
        case ActionType.AddRemoveProjectDetail:
            return {...state, project: action.payload}
        case ActionType.SetEducationId:
            return {...state, educationId: state.educationId + 1}
        case ActionType.SetProjectId:
            return {...state, projectId: state.projectId + 1}
        case ActionType.ShowSocialMediaLinks:
            return {...state, showSocialMediaLinks: action.payload}
    }
}

//app context
interface AppContextProps {
    state: State;
    dispatch: React.Dispatch<Action>;
}

export const AppContext = createContext<AppContextProps>({
    state: initialState,
    dispatch: () => {}
});


//app context provider
interface AppContextProviderProps {
    children: ReactNode
}

export const AppContextProvider = ({children}: AppContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}


