import React, {useState} from "react";
export default function TextForm(props) {

    const handleupClick = () => {
        // console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to UpperCase" , "Success");
    }

    const handleloClick = () => {
        // console.log("uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to LowerCase" , "Success");
    }

    const handleclearClick = () => {
        // console.log("uppercase was clicked" + text);
        let newtext = '';
        setText(newtext);
    }

    const handlecopy = () =>
    {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied !" , "Success");
    }

    const handleExtraSpace = () =>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed" , "Success");
    }

   

    const handleOnChange = (event)=>{
        // console.log("uppercase on changed");
        setText(event.target.value);
    }
    const [text ,setText] = useState('');
    // setText("New text");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea
                    className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}
                    id="myBox" 
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handlecopy}>copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear text</button>
            
            
        </div>

        <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text Summary.</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    );
}
