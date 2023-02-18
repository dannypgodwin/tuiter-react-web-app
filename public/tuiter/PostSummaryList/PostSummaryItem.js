const PostSummaryItem = (post) => `
    <div class="wd-post list-group-item ms-1">
        <div class="wd-post-with-img">
            <div class="wd-text">
                <div class="wd-topic">${post.topic}</div>
                <div class="wd-topic-author">
                    <div class="wd-author">
                        <span>${post.userName}</span>
                        <span class="fa-stack fa-2x small">
                            <i class="fa-solid fa-circle fa-certificate fa-stack-2x"></i>
                            <i class="fa-solid fa-check fa-inverse fa-stack-1x"></i>
                        </span>
                    </div>
                    <div class="wd-topic"> · ${post.time}</div>
                </div>
                <div class="wd-title">${post.title}</div>
            </div>
            <img src="${post.image}" alt="" class="rounded-2">
        </div>
    </div>
`;

export default PostSummaryItem;
