import PostSummaryItem from './PostSummaryItem.js';
import posts from './posts.js';

const PostSummaryList = () => {
  const postSummaryItems = [];

  posts.forEach(post => {
    postSummaryItems.push(PostSummaryItem(post));
  });

  return `
    <div class="card bg-light mb-3">
      <div class="card-body p-0">
        <ul class="list-group list-group-flush">
          ${postSummaryItems.join('')}
        </ul>
      </div>
    </div>
  `;
};

export default PostSummaryList;
