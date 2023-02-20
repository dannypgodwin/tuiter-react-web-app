import NavigationSidebar from '../NavigationSidebar/index.js';
import PostList from '../PostList/index.js';
import PostSummaryList from '../PostSummaryList/index.js';

const createHomeComponent = () => {
	const homeComponent = document.createElement('div');
	homeComponent.classList.add('row', 'mt-2');

	const sidebar = document.createElement('div');
	sidebar.classList.add('col-2', 'col-md-2', 'col-lg-1', 'col-xl-2');
	sidebar.innerHTML = NavigationSidebar('home');
	homeComponent.appendChild(sidebar);

	const explore = document.createElement('div');
	explore.classList.add('col-10', 'col-lg-7', 'col-xl-6');
	explore.innerHTML = PostList();
	homeComponent.appendChild(explore);

	const whoToFollow = document.createElement('div');
	whoToFollow.classList.add('d-none', 'd-sm-none', 'd-md-none', 'd-lg-block', 'col-lg-4', 'col-xl-4');
	whoToFollow.innerHTML = PostSummaryList();
	homeComponent.appendChild(whoToFollow);

	return homeComponent;
};

document.addEventListener('DOMContentLoaded', () => {
	const homeComponent = createHomeComponent();
	document.getElementById('wd-home').appendChild(homeComponent);
});
