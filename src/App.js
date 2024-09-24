import {useRef, useState} from "react";
import "./App.css";

function App() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
        // Add the code for the plus function
        e.preventDefault();
        const inputValue = inputRef.current.value;
        const newResult=result+Number(inputValue);
        setResult(newResult);
        //setResult((result) => result + Number(inputRef.current.value));
    };

    function minus(e) {
        // Add the code for the minus function
        e.preventDefault();
        const inputValue = inputRef.current.value;
        const newResult=result-Number(inputValue);
        setResult(newResult);
    };

    function times(e) {
        // Add the code for the plus function
        e.preventDefault();
        const inputValue = inputRef.current.value;
        const newResult=result*Number(inputValue);
        setResult(newResult);

    };

    function divide(e) {
        // Add the code for the divide function
        e.preventDefault();
        const inputValue = inputRef.current.value;
        const newResult=result/Number(inputValue);
        setResult(newResult);
    };

    function resetInput(e) {
        // Add the code for the resetInput function
        e.preventDefault();
        inputRef.current.value = 0;
    };

    function resetResult(e) {
        // Add the code for the resetResult function
        e.preventDefault();
        setResult(0);
    };

    return (
        <div className="App">
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form>
                <p ref={resultRef}>
                    {result}
                </p>
                <input
                    pattern="[0-9]"
                    ref={inputRef}
                    type="number"
                    placeholder="Type a number"
                />
                <button onClick={plus}>Add</button>
                <button onClick={minus}>Subtract</button>
                <button onClick={times}>Multiply</button>
                <button onClick={divide}>Divide</button>
                <button onClick={resetInput}>Reset Input</button>
                <button onClick={resetResult}>Reset Rresult</button>

            </form>
        </div>
    );
}

export default App;
