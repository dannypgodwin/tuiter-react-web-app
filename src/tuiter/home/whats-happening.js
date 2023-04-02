import React, {useState} from "react";
import { useDispatch } from "react-redux";
// import { createTuit } from "../tuits/tuits-reducer";
import {createTuitThunk}
    from "../../services/tuits-thunks";

const WhatsHappening = () => {
    const [tuitText, setTuitText] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuitThunk(newTuit));
    }

    const handleTuitClick = () => {
        const newTuit = { tuit: tuitText };
        dispatch(createTuit(newTuit));
        setTuitText('');
    };

    const handleInputChange = (event) => {
        setTuitText(event.target.value);
    };

    return (
        <div className="row">
            <div className="col-auto">
                <img src="/imgs/nasa.jpg" alt="" width={60}/>
            </div>
            <div className="col-10">
<textarea
    value={tuitText}
    placeholder="What's happening?"
    className="form-control border-0"
    onChange={handleInputChange}
></textarea>
                <div>
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={handleTuitClick}
                        disabled={!tuitText}
                    >
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr />
            </div>
        </div>
    );
};

export default WhatsHappening;