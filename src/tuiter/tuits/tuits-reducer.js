import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    userName: "NASA",
    handle: "@nasa",
    image: "nasa.png",
};

const templateTuit = {
    ...currentUser,
    topic: "Space",
    time: "2h",
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
};

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit: (state, action) => {
            state.splice(
                state.findIndex(tuit => tuit._id === action.payload),
                1
            );
        },
        createTuit: (state, action) => {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: Date.now(),
            });
        },
    },
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
