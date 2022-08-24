import React from 'react';
export default function Home(props) {
    var enteredText = document.getElementById('text');
    function callFunction() {
        document.getElementById('preview').innerText = enteredText.value;
        // document.getElementById('countWords').innerHTML=`<p>{enteredText.value === "" ? 0 : (enteredText.value.split(/\s+/).length)}Words and {enteredText.value.length} Characters</p>`;
    }
    function lowerButton() {
        var enteredText = document.getElementById('text');
        var textEntered = enteredText.value;
        enteredText.value = textEntered.toLowerCase();
    }
    function upperButton() {
        var enteredText = document.getElementById('text');
        var textEntered = enteredText.value;
        enteredText.value = textEntered.toUpperCase();
    }
    function copyButton() {
        var enteredText = document.getElementById('text');
        var textEntered = enteredText.value;
        enteredText.select();
        navigator.clipboard.writeText(textEntered);

    }
    function clearButton() {
        var enteredText = document.getElementById('text');
        enteredText.value = " ";
        document.getElementById('preview').innerHTML = " ";
    }
    return (
        <>
            <div className="container my-3" style={{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h2>TextUtils- Word Counter, Character Counter</h2>
            </div>
            <div className="container">
                <div className="form-floating">
                    <textarea className="form-control  " placeholder="Leave a comment here" id="text" onInput={callFunction} style={{ backgroundColor: (props.mode === 'light') ? 'white' : 'rgb(4 4 4)', color: (props.mode === 'light') ? 'black' : 'white', height: "300px" }}></textarea>
                    <label htmlFor="text"></label>
                </div>
            </div>
            <div className="container my-4">
                <button type="button" className="btn btn-primary" onClick={lowerButton}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary me-2" onClick={upperButton}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary me-2" onClick={copyButton}>Copy Text</button>
                <button type="button" className="btn btn-primary me-2" onClick={clearButton}>Clear Text</button>
            </div>

            <div className="container" style={{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h2> Preview here......</h2>
                <div id="preview"></div>
            </div>
        </>
    );
}

