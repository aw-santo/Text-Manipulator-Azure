import React, { useState } from 'react';
import "./textForm.css";

export default function TextForm(props) {

    const [text, setText] = useState('Enter the text...');
    const [copy, setCopy] = useState('copy');


    const onTextAreaChange = (event) => {
        setText(event.target.value);
        setCopy('copy');
    }

    const onUpper = () => {
        setText(text.toUpperCase());
        setCopy('copy');
        props.alert("success", "Text changed to uppercase!");
    }

    const onLower = () => {  
        setText(text.toLowerCase());
        setCopy('copy');
        props.alert("success", "Text changed to lowercase!");
    }

    const onCapitalize = () => {

        // 1.
        /* let tx = text.split(' ');
        for (let i = 0; i < tx.length; i++) {
            tx[i] = tx[i][0].toUpperCase() + tx[i].substring(1, tx[i].length).toLowerCase();
        }
        tx = tx.join(' ');
        setText(tx);
        setCopy('copy');
        */

        // 2.

        let tx = text.split(/\s+/).map((t) => {
            return t[0].toUpperCase() + t.slice(1).toLowerCase();
        }).join(' ')
        setText(tx);
        setCopy('copy');
        // console.log(tx);
        props.alert("success", "Text changed to capitalized!");
    }

    const onTrim = () => {
        setText(text.trim());
        setCopy('copy');
        props.alert("success", "Text trimmed!");
    }
    const onClear = () => {
        setText('');
        setCopy('copy');
        props.alert("success", "Text cleared!");
    }

    let words = text.split(/\s+/).filter( (ele) => { return ele.length!==0 }).length;

    const onCopy = () => {

        navigator.clipboard.writeText(text);
        setCopy('copied');
        // console.log(event.target.value);
        props.alert("success", "Text copied!");
    }

    return (
        <>
            <div className={`container text-${props.mode === 'light' ? "dark" : "light"}`}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className={`form-control text-light text-${props.mode === 'light' ? "dark" : "light"}`} style={{backgroundColor: props.mode === 'light' ? "white" : "#40454a"}} id="myBox" value={text} rows="8" spellCheck="false" onChange={onTextAreaChange}></textarea>
                </div>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={onUpper}>Uppercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={onLower}>Lowercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={onCapitalize}>Capitalize</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={onTrim}>Trim</button>
                <button type="button" disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={onCopy}>{copy}</button>
                <button type="button" disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={onClear}>Clear Text</button>
            </div>

            <div className={`container my-4 text-${props.mode === 'light' ? "dark" : "light"}`}>
                <h1>Your text summary</h1>
                <p>{words} words and {text.length} chracters</p>
                <p>Average time to read : {(0.008 * words).toPrecision(2)}min or {(0.008 * words * 60).toPrecision(1)}sec</p>
            </div>
        </>
    )
}

