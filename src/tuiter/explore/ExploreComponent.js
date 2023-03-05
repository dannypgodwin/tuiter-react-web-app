import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PostSummaryList from "../post-summary-list/index.js";

function ExploreComponent() {
    return (
        <div className="d-flex flex-column align-content-start justify-content-start">
            <i className="fa-solid fa-magnifying-glass position-absolute p-2 ms-4 mt-1"></i>
            <div className="d-flex align-items-center mb-2">
                <input
                    type="text"
                    placeholder="Search Twitter"
                    className="form-control rounded-5 ps-5 ms-3"
                />
                <i className="fa-solid fa-gear mx-5 fa-xl"></i>
            </div>
            <ul className="nav mb-2 nav-tabs">
                {["For you", "Trending", "News", "Sports", "Entertainment"].map(
                    (title, index) => (
                        <li key={index} className="nav-item">
                            <a className={index === 0 ? "nav-link active" : "nav-link"} href="#top">
                                {title}
                            </a>
                        </li>
                    )
                )}
            </ul>
            <div className="position-relative">
                <img src="../assets/starship.jpg" className="col-sm-12 mt-2" alt="Starship" />
                <div className="position-absolute bottom-0">
                    <h2 className="fw-bold ms-3 text-white">SpaceX's Starship</h2>
                </div>
            </div>
            <PostSummaryList />
        </div>
    );
}

export default ExploreComponent;