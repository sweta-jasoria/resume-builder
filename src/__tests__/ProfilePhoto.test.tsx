import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import{initialState, AppContext} from '../context/AppContext';
import ProfilePhoto from '../components/ProfilePhoto';

describe('ProfilePhoto component', () => {
    const mockDispatch = jest.fn();

    it('Should display profile photo when state.profilePhoto is empty', () => {
        const state = {
            ...initialState,
            profilePhoto: ''
        }

        render(
            <AppContext.Provider value={{state: state, dispatch: mockDispatch}}>
                <ProfilePhoto />
            </AppContext.Provider>
        )

        const uploadedProfilePhoto = screen.getByLabelText('uploadedProfilePhoto');
        expect(uploadedProfilePhoto).toBeInTheDocument();
    });

    it('Should display profile photo when state.profilePhoto is not empty', () => {
        const state = {
            ...initialState,
            profilePhoto: 'profile.png'
        };

        render(
            <AppContext.Provider value={{state: state, dispatch: mockDispatch}}>
                <ProfilePhoto />
            </AppContext.Provider>
        )

        const profilePhoto = screen.getByLabelText('profilePhoto');
        expect(profilePhoto).toBeInTheDocument();
    });

   it('Should display upload icon', () => {
       render(
           <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
               <ProfilePhoto />
           </AppContext.Provider>
       )

       const uploadIcon = screen.getByLabelText('uploadIcon');
       expect(uploadIcon).toBeInTheDocument();
   });

   it('Should change profile photo when we click on upload icon', () => {
       const mockCreateObjectURL = jest.fn();

       global.URL.createObjectURL = mockCreateObjectURL;

       render(
           <AppContext.Provider value={{state: initialState, dispatch: mockDispatch}}>
               <ProfilePhoto />
           </AppContext.Provider>
       )

       const uploadIcon = screen.getByLabelText('uploadIcon');

       const file = new File(['photo'], 'photo.png', {type: 'image/png'});
       const fileList = {
           file: file
       }
       fireEvent.change(uploadIcon, {target: {files: fileList.file}});

       expect(mockDispatch).toHaveBeenCalled();
       expect(mockCreateObjectURL).toHaveBeenCalled();
   });
});
