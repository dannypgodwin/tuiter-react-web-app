import PostItem from './PostItem.js';
import posts from '../PostList/posts.js';

const PostList = () => `
    <ul class="list-group list-group-flush">
        ${posts.map(post => PostItem(post)).join('')}
    </ul>
`;

export default PostList;
