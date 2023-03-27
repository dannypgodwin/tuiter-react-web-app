import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css';

const ProfileComponent = () => {
    const navigate = useNavigate();
    const { profile } = useSelector(state => state.profile);
    console.log(profile);

    const handleBackClick = () => {
        navigate('/tuiter');
    };

    const handleEditProfileClick = () => {
        navigate('/tuiter/edit');
    };

    const {
        firstName,
        lastName,
        tweets,
        bannerPicture,
        banner_width,
        banner_height,
        profilePicture,
        profile_width,
        profile_height,
        handle,
        bio,
        location,
        dateOfBirth,
        dateJoined,
        followingCount,
        followersCount,
    } = profile;

    return (
        <>
            <h4>Profile</h4>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <button
                            className="btn btn-white btn small "
                            onClick={handleBackClick}
                        >
                            ←
                        </button>
                    </div>
                    <div className="col-10">
                        <h5 className="mb-0">
                            {firstName} {lastName}
                        </h5>
                        <p className="text-muted pt-0">{tweets} tweets</p>
                    </div>
                    <div className="position-relative row">
                        <img
                            src={bannerPicture}
                            width={banner_width}
                            height={banner_height}
                        />
                        <div>
                            <img
                                src={profilePicture}
                                width={profile_width}
                                height={profile_height}
                                className="rounded-pill position-absolute wd-nudge-up col-2"
                            />
                            <button
                                className="position-absolute btn btn-warning wd-slide-r"
                                onClick={handleEditProfileClick}
                            >
                                <span className="">Edit profile</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-12 mt-5">
                        <h5 className="mb-0">
<span className="fw-bolder">
{firstName} {lastName}
</span>
                        </h5>
                        <p className="text-muted pt-0">{handle}</p>
                        <p>{bio}</p>
                    </div>
                    <div>
                        <div className="row">
                            <p className="col-4 text-muted">{location}</p>
                            <p className="col-4 text-muted">Born: {dateOfBirth}</p>
                            <p className="col-4 text-muted">Joined: {dateJoined}</p>
                        </div>
                        <div className="row">
                            <p className="col-3">
                                <span className="fw-bolder">{followingCount}</span> Following
                            </p>
                            <p className="col-3">
                                <span className="fw-bolder">{followersCount}</span> Followers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;