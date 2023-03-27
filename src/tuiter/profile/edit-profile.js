import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../reducers/profile-reducer';
import './index.css';

const EditProfileComponent = () => {
    const [userInfo, setUserInfo] = useState({});
    const { profile } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fullName = `${profile.firstName} ${profile.lastName}`;

    const goBack = () => {
        navigate('/tuiter/profile');
    };

    const saveChanges = () => {
        dispatch(updateProfile(userInfo));
        navigate('/tuiter/profile');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <h4>Edit</h4>
            <div className='container'>
                <div className='row'>
                    <div className='col-1'>
                        <button className='btn btn-white btn-small' onClick={goBack}>
                            X
                        </button>
                    </div>
                    <div className='col-9'>
                        <p className=''>Edit profile</p>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-dark rounded-pill' onClick={saveChanges}>
                            Save
                        </button>
                    </div>
                    <div className='position-relative row'>
                        <img
                            src={profile.bannerPicture}
                            width={profile.banner_width}
                            height={profile.banner_height}
                            alt='Banner'
                        />
                        <div>
                            <img
                                src={profile.profilePicture}
                                width={profile.profile_width}
                                height={profile.profile_height}
                                className='rounded-pill position-absolute wd-nudge-up col-2'
                                alt='Profile'
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-5'>
                        <div className='wd-border mb-4'>
                            <label className='text-muted p-1'>Name</label>
                            <br />
                            <input
                                className='w-50 wd-no-border p-1'
                                name='firstName'
                                value={userInfo.firstName || profile.firstName}
                                onChange={handleInputChange}
                            />
                            <input
                                className='w-50 wd-no-border p-1 float-flex'
                                name='lastName'
                                value={userInfo.lastName || profile.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='wd-border mb-4'>
                            <label className='text-muted p-1'>Bio</label>
                            <textarea
                                className='w-100 wd-no-border p-1 wd-word-wrap'
                                name='bio'
                                value={userInfo.bio || profile.bio}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='wd-border mb-4'>
                            <label className='text-muted p-1'>Location</label>
                            <input
                                className='w-100 wd-no-border p-1'
                                name='location'
                                value={userInfo.location || profile.location}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='wd-border'>
                            <input
                                className='w-100 wd-no-border text-muted p-3 ps-2'
                                name='website'
                                value={userInfo.website || profile.website}
                                onChange={handleInputChange}
                                placeholder='Website'
                            />
                        </div>
                    </div>
                    <div>
                        <label className='text-muted mt-3'>Birth date · <span className='text-primary'> Edit</span></label>
                        <input
                            className='w-100 wd-no-border'
                            name='dateOfBirth'
                            value={userInfo.dateOfBirth || profile.dateOfBirth}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfileComponent;
