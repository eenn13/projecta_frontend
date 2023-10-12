import React, { useRef, useState } from "react";
import axios from "axios";
import './style.css';
const url = 'http://ill-yak-flip-flops.cyclic.app/post'///http://localhost:5000/post';

const App = () => {
    const numberA = useRef(null);
    const numberB = useRef(null);
    const sentence = useRef(null);
    const userName = useRef(null);
    const [result, setResult] = useState(0);

    function handleClick() { 
        setResult(Number(numberA.current.value) + Number(numberB.current.value));
    }

    function sendRequest() { 
        setResult(Number(numberA.current.value) + Number(numberB.current.value));
        axios.post(url, {
            firstNumber: numberA.current.value,
            secondNumber: numberB.current.value,
            result: result,
            userName: userName.current.value,
            sentence: sentence.current.value
        });
    }

    return (
        <div className="troll-form">
            <h1>Calculator with comment section :)</h1>
            <label>Enter first number:</label>
            <input ref={numberA} type="number"></input>
            <br></br>
            <label>Enter first number:</label>
            <input ref={numberB} type="number"></input>
            <div className="result">
                <button onClick={handleClick} className="sum-btn">SUM</button>
                <label>RESULT:</label>
                <label className="result-label">{result}</label>
            </div>
            <label>Username:</label>
            <input ref={userName} type="text"></input>
            <br></br>
            <label className="title-label">Write something:</label>
            <textarea ref={sentence} className="sentence-receiver"></textarea>
            <button className="req-btn" onClick={sendRequest}>SAVE</button>
        </div>
    );
}

export default App;