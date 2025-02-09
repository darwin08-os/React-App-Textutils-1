import React,{useState} from "react";


export default function TexthtmlForm(props) {

    const [text,setText] = useState('');

    const handleUpClick=()=>{
        setText(text.toUpperCase())
    }
    const handleLowClick=()=>{
        setText(text.toLowerCase())
    }
    const handleClear=()=>{
        setText('')
    }
    const handleInverseCase=()=>{
        let txt = text.split('').map((ch)=>{
          return ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase();
        }).join('');     
        setText(txt)
    }
    const handleReplaceAt=()=>{
        let txt = text.replaceAll(' ','@')
        setText(txt)
    }


    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

  return (
    <>
    <div className="conatainer" style={{color: props.mode === 'light' ? 'black' : 'white'}} >
      <h2 className="my-3">{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color:props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="8" ></textarea>
      </div>
      <button className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-2`} onClick={handleUpClick} >Convert to UPPERCASE</button>      
      <button className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-2`} onClick={handleLowClick} >Convert to lowercase</button>      
      <button className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-2`} onClick={handleReplaceAt} >Replace ' ' with @</button>      
      <button className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-2`} onClick={handleClear} >Clear Text</button>      
      <button className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-2`} onClick={handleInverseCase} >InverseCase</button>      
    </div> 
    <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Your text summary</h2>    
        <p>{text.split(" ").length-1} words and {text.length} characters </p>
        <p>{0.008 * ((text.split(" ").length)-1)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length >0 ? text : "Enter something to textbox above preview here.."}</p>
    </div>
    </>
  );
}
