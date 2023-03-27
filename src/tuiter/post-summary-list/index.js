import React from "react";
import PostSummaryItem from "./post-summary-item.js";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} posts={post}/>
                )
            }
        </ul>
    );
};
export default PostSummaryList;