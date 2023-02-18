import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
    const trendingTopics = ['For you', 'Trending', 'News', 'Sports', 'Entertainment'];

    const navTabs = trendingTopics.map((topic, index) => {
        const isActive = index === 0 ? 'active' : '';

        return `
            <li class="nav-item">
                <a class="nav-link ${isActive}" aria-current="page" href="#">${topic}</a>
            </li>
        `;
    }).join('');

    return `
        <div class="wd-searchbar mb-2">
            <i class="fa-solid fa-magnifying-glass wd-search-icon text-secondary ms-2"></i>
            <input type="text" placeholder="Search Twitter" class="form-control rounded-5 ps-5">
            <i class="fa-solid fa-gear fa-xl mx-3 text-primary"></i>
        </div>
        <ul class="nav nav-tabs mb-2 d-flex justify-content-between">
            ${navTabs}
        </ul>
        <div class="position-relative mb-2">
            <img src="../assets/starship.jpg" class="card-img-top rounded-0">
            <div class="position-absolute bottom-0 fs-3 ms-2">
                <p class="mb-1">SpaceX's Starship</p>
            </div>
        </div>
        ${PostSummaryList()}
    `;
};

export default ExploreComponent;
