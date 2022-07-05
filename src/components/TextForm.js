import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", "success")
    }
    const handleClearClick = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Cleared", "success")
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success")         
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
  return (
      <>
      <div className="container my-5">
          <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
          </div>
          <div disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</div>
          <div className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</div>
          <div className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</div>
          <div className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy</div>
          <div className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</div>
      </div>
      <div className="container my-3">
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{ return element.length !==0}).length} words and {text.length} characters</p>
          <p>{0.08 * text.split(" ").filter((element)=>{ return element.length !==0}).length} minutes to read.</p>
          <h3 className='my-3'>Preview</h3>
          <p>{text.length>0?text:"Enter Something in the textBox above to preview here."}</p>
      </div>
      </>
  )
}
