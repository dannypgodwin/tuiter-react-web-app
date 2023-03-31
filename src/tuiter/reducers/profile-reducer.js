import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: {
        "firstName": "Danny",
        "lastName": "Godwin",
        "handle": "@dannygodwin",
        "profilePicture": "../../imgs/profile_pic.jpg",
        "profile_width": 70,
        "profile_height": 100,
        "bannerPicture": "../../imgs/banner.jpg",
        "banner_width": "100%",
        "banner_height": 200,
        "bio": "Data engineer and musician",
        "website": "yahoo.com",
        "location": "Boston, MA",
        "dateOfBirth": "Dec 8, 1993",
        "dateJoined": "September, 2013",
        "tweets": "0",
        "followingCount": 0,
        "followersCount": 100
    }
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: initialState,
        reducers:{
            updateProfile: (state, action) => {
                state.profile = action.payload;
            },
        }
    }
);

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;