const NavigationSidebar = (active) => {
	$('.list-group-item').removeClass('active');

	return `
    <div class="list-group">
                    <a class="list-group-item" href="#">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fas fa-home"></i>
                        <span class="ms-1 d-none d-xl-inline">Home</span>
                    </a>
                    <a class="list-group-item active" href="#">
                        <i class="fas fa-hashtag"></i>
                        <span class="ms-1 d-none d-xl-inline">Explore</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fas fa-bell"></i>
                        <span class="ms-1 d-none d-xl-inline">Notifications</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fas fa-envelope"></i>
                        <span class="ms-1 d-none d-xl-inline">Messages</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fas fa-bookmark"></i>
                        <span class="ms-1 d-none d-xl-inline">Bookmarks</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fas fa-list"></i>
                        <span class="ms-1 d-none d-xl-inline">Lists</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fas fa-user"></i>
                        <span class="ms-1 d-none d-xl-inline">Profile</span>
                    </a>
                    <a class="list-group-item" href="#">
                        <i class="fa-solid fa-ellipsis"></i>
                        <span class="ms-1 d-none d-xl-inline">More</span>
                    </a>
                </div>

                <div class="mt-2">
                    <button type="submit" class="col-12 btn-primary btn rounded-pill "
                    >Tweet
                    </button>
                </div>
    `;
};
export default NavigationSidebar;
