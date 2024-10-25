//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./component/SecondsCounter";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

//render your react application
let seconds = 0;

let superTimer = setInterval(() => {
    const one = Math.floor(seconds / 1);
    const two = Math.floor(seconds / 10);
    const three = Math.floor(seconds / 100);
    const four = Math.floor(seconds / 1000);
    seconds++;
    ReactDOM.createRoot(document.getElementById('app')).render(
        <SecondsCounter 
            firstNumber={one} 
            secondNumber={two} 
            thirdNumber={three} 
            fourthNumber={four} 
            stopTimer={stopTimer} 
            startTimer={startTimer} 
            restartTimer={restartTimer} 
        />
    );
}, 1000);

function stopTimer() {
    clearInterval(superTimer);
    superTimer = null;
}

function startTimer() {
    if (!superTimer) {
        superTimer = setInterval(() => {
            const one = Math.floor(seconds / 1);
            const two = Math.floor(seconds / 10);
            const three = Math.floor(seconds / 100);
            const four = Math.floor(seconds / 1000);
            seconds++;
            ReactDOM.createRoot(document.getElementById('app')).render(
                <SecondsCounter 
                    firstNumber={one} 
                    secondNumber={two} 
                    thirdNumber={three} 
                    fourthNumber={four} 
                    stopTimer={stopTimer} 
                    startTimer={startTimer} 
                    restartTimer={restartTimer} 
                />
            );
        }, 1000);
    }
}

function restartTimer() {
    clearInterval(superTimer); 
    seconds = 0; 

    superTimer = setInterval(() => {
        const one = Math.floor(seconds / 1);
        const two = Math.floor(seconds / 10);
        const three = Math.floor(seconds / 100);
        const four = Math.floor(seconds / 1000);
        seconds++;
        ReactDOM.createRoot(document.getElementById('app')).render(
            <SecondsCounter 
                firstNumber={one} 
                secondNumber={two} 
                thirdNumber={three} 
                fourthNumber={four} 
                stopTimer={stopTimer} 
                startTimer={startTimer} 
                restartTimer={restartTimer} 
            />
        );
    }, 1000);
}
