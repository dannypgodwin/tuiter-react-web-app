import WhoToFollowListItem from './WhoToFollowListItem.js';
import who from './who.js';

const WhoToFollowList = () => {
  let listItems = '';
  who.forEach(who => {
    listItems += WhoToFollowListItem(who);
  });

  return `
    <ul class="wd-follow-list list-group rounded-2">
      <li class="list-group-item fw-bold">
        Who to follow
      </li>
      ${listItems}
    </ul>
  `;
};

export default WhoToFollowList;
