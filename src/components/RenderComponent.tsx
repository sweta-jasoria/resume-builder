import React, {useContext} from 'react';
import {AppContext, Components} from '../context/AppContext';
import PersonalDetails from './PersonalDetails';
import Education from './Education'
import Project from './Project';
import Skills from './Skills';
import Resume from './Resume';

const RenderComponent: React.FC = () => {
    const {state} = useContext(AppContext);

    switch(state.componentToBeRendered) {
        case Components.PersonalDetails:
            return <PersonalDetails />;
        case Components.Education:
            return <Education />;
        case Components.Project:
            return <Project />;
        case Components.Skills:
            return <Skills />;
        case Components.Resume:
            return <Resume />;
        default:
            return null;
    }
};

export default RenderComponent;