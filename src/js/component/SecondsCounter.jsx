import React from "react";

const SecondsCounter = (props) => {

    return (
        <div className="container-fluid">

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="logo" style={{ height: "65px", marginLeft: "25px", marginRight: "15px" }} />
                        <a className="navbar-brand" href="#">React!</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="d-none d-lg-block" style={{ margin: "0", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>Seconds Counter</h1>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/MeliodasCRM" target="_blank">My Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="blank_https://4geeks.com/es" target="_blank">4Geeks</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="d-flex flex-row justify-content-center mt-5">
                <div className="number col-3 col-md-2 col-lg-1 mx-2 text-center">{props.fourthNumber % 10}</div>
                <div className="number col-3 col-md-2 col-lg-1 mx-2 text-center">{props.thirdNumber % 10}</div>
                <div className="number col-3 col-md-2 col-lg-1 mx-2 text-center">{props.secondNumber % 10}</div>
                <div className="number col-3 col-md-2 col-lg-1 mx-2 text-center">{props.firstNumber % 10}</div>
            </div>
            <div className="container-fluid d-flex justify-content-center flex-row">
            <div className="d-flex justify-content-center mt-3">
                <button onClick={props.stopTimer} className="button-90 btn btn-primary" style={{ width: "15rem", maxWidth: "200px" }} role="button">STOP</button>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button onClick={props.startTimer} className="button-90 btn btn-primary" style={{ width: "15rem", maxWidth: "200px" }} role="button">RESUME</button>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button onClick={props.restartTimer} className="button-90 btn btn-primary" style={{ width: "15rem", maxWidth: "200px" }} role="button">RESTART</button>
            </div>  
            </div>
        </div>
    );
};

export default SecondsCounter;
