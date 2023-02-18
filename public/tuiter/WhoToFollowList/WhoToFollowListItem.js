const WhoToFollowListItem = (who) => `
    <li class="list-group-item d-flex align-content-center">
        <img src="${who.avatarIcon}" alt="" class="rounded-circle">
        <div class="ms-3">
            <div class="fw-bold">
                <span>${who.userName}</span>
                <span class="fa-stack fa-2x small">
                    <i class="fa-solid fa-circle wd-twitter-blue-text fa-stack-2x"></i>
                    <i class="fa-solid fa-check fa-inverse fa-stack-1x"></i>
                </span>
            </div>
            <div class="text-secondary">@${who.handle}</div>
        </div>
        <div class="ms-auto my-1 d-flex align-content-center">
            <button type="button" class="btn btn-primary rounded-5">Follow</button>
        </div>
    </li>
`;

export default WhoToFollowListItem;
