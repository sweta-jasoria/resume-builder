import React, {useCallback, useContext} from 'react';
import {ActionType, AppContext} from '../context/AppContext';
import UploadedProfilePhoto from '../images/uploadedProfilePhoto.png';

const ProfilePhoto: React.FC = () => {
    const {state, dispatch} = useContext(AppContext);

    const handleProfilePhoto = useCallback(
        (e: React.ChangeEvent<HTMLInputElement> | null) => {
            if(e && e.target && e.target.files) {
                dispatch({type: ActionType.SetProfilePhoto, payload: URL.createObjectURL(e.target.files[0])});
            }
        },
        [dispatch]
    );

    return (
        <div style={{width: '124px',
                     height: '124px',
                     border: '2px solid var(--grey)',
                     borderRadius: '62px'}}
             className='mb-5'>
            {
                state.profilePhoto ? (
                    <img src={state.profilePhoto}
                         alt='Upload photo'
                         width='120px'
                         height='120px'
                         aria-label='profilePhoto'
                         style={{borderRadius: '60px', objectFit: 'contain'}} />
                ) : (
                    <img src={UploadedProfilePhoto}
                         alt='Uploaded photo'
                         width='120px'
                         height='120px'
                         aria-label='uploadedProfilePhoto'
                         style={{borderRadius: '60px', objectFit: 'scale-down'}} />
                )
            }

            <input type='file'
                   className='hidden'
                   id='upload-button'
                   aria-label='uploadIcon'
                   onChange={handleProfilePhoto} />

            <label htmlFor='upload-button'
                   className='block text-sm pl-1 pr-1 pt-2 pb-2 mt-2'
                   style={{backgroundColor: 'var(--dark-grey)',
                           color: 'var(--white)',
                           textAlign:'center',
                           cursor: 'pointer'}}>
                        Upload&nbsp;Photo
            </label>
        </div>
    )
};

export default ProfilePhoto;