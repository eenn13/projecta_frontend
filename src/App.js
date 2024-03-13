import React from "react";
import { Routing } from "./Routes";
// { useRef, useState }
// import axios from "axios";


// const url = 'https://localhost:5000/post';//'https://projecta-backend.onrender.com/post';

const App = () => {

    return (
        <Routing/>
    );
}

export default App;

// const numberA = useRef(null);
    // const numberB = useRef(null);
    // const sentence = useRef(null);
    // const userName = useRef(null);
    // const [result, setResult] = useState(0);

    // function handleClick() { 
    //     setResult(Number(numberA.current.value) + Number(numberB.current.value));
    // }

    // function sendRequest() { 
    //     setResult(Number(numberA.current.value) + Number(numberB.current.value));
    //     axios.post(url, {
    //         firstNumber: numberA.current.value,
    //         secondNumber: numberB.current.value,
    //         result: result,
    //         userName: userName.current.value,
    //         sentence: sentence.current.value
    //     });
    // }

    // async function fetchPosts() {
    //     const data = await axios.get(url);
    //     console.log(data);
    // }