import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
// import {deleteTuit} from "./tuits-reducer";

const TuitsItem = ({ post }) => {
  const dispatch = useDispatch();

  const handleDeleteTuit = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="rounded-pill" alt="" width="45px" src={post.image} />
          </div>

          <div className="col-11">
            <i className="bi bi-x-lg float-end" onClick={() => handleDeleteTuit(post._id)}></i>
            <span className="fw-bold">{post.userName}</span>
            <i className="fa fa-check-circle ms-2 me-2"></i>
            <span className="text-muted">{post.handle}</span>
            <span> · </span>
            <span className="text-muted">{post.time}</span>

            <div className="mt-1 mb-3">{post.tuit}</div>

            <div className="col-11">
              <i className="fa-regular fa-comment me-2"></i>
              <span className="me-5">{post.replies}</span>
              <span>
              <i className="fas fa-retweet me-2"></i>
              <span className="me-5">{post.retuits}</span>
            </span>
              <span>
              <i className="fa-solid fa-heart me-2"></i>
              <span className="me-5">{post.likes}</span>
            </span>
              <span>
              <i className="fa-solid fa-share-nodes me-2"></i>
            </span>
            </div>
          </div>
        </div>
      </li>
  );
};
export default TuitsItem;
