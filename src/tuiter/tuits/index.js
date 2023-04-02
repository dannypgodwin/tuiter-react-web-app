import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import "../tuits-list/index.css";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit
    }
) => {
    console.log("In Tuit stats")
    console.log(tuit.retuits)
    const dispatch = useDispatch();
    return(
        <ul className="list-group">
            <div className="wd-grid-row-icons">
                <div className="wd-grid-row-first">
                    <i className="fa fa-regular fa-comment"></i><span
                    className="wd-comments-style">{tuit.replies}</span>
                </div>
                <div className="wd-grid-row-first">
                    <i className="fa  fa-retweet"></i><span
                    className="wd-comments-style">{tuit.retuits}</span>
                </div>
                <div className="wd-grid-row-first" onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true
                }))}>
                    <i className={tuit.liked ? "fa fa-heart" : "fa fa-regular fa-heart"}
                       style={{color: tuit.liked ? 'red' : 'gray'}}></i><span
                    className="wd-comments-style">{tuit.likes}</span>
                </div>
                <div className="wd-grid-row-first" onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1,
                    disliked: true
                }))}>
                    <i className={tuit.disliked ? "fa fa-thumbs-down" : "fa fa-regular fa-thumbs-down"}
                    ></i><span
                    className="wd-comments-style">{tuit.dislikes}</span>
                </div>
                <div className="wd-grid-row-first">
                    <i className="fa fa-regular fa-share-from-square"></i><span
                    className="wd-comments-style"></span>
                </div>
            </div>
        </ul>
    );
};
export default TuitStats;
