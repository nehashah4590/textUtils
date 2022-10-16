import React, {useState} from 'react'

export default function Textform(props) {
  const handelUpCase = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to upper case", "success");
  }
  const handelLoCase = ()=>{
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to Lower case", "success");
  }
  const handelCopy = ()=>{
    let newText= document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value)
    props.showAlert("Text copied", "success");
  }
  const handelClearText = ()=>{
     let newText = "";
     setText(newText);
     props.showAlert("Text cleared", "success");
  }
  const handelWordHarry = ()=>{
   if(text.match(/Harry/gi)){
    let newText = text.replace(/Harry/gi, "Hero Alom");
    setText(newText);
    props.showAlert("Word Harry removed and replaced", "success");
   }
    else{
      alert("The word Harry not found");
    }
    
  }
  const handelTextSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
 }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text ,setText] = useState("Enter text here");
  return (
    <>
    <div className='container ' style = {{color: props.mode==="dark"?"white":"black"}} >
      <h1 className="pt-5">{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style = {{ backgroundColor:props.mode==='dark'?'#13466e':'white',color: props.mode==="dark"?"white":"black" } } id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handelUpCase} >Convert to Uppercase </button>
      <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handelLoCase} >Convert to Lowercase </button>
      <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handelCopy} >Copy Text </button>
      <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handelClearText} >Clear Text </button>
      <button className='btn btn-primary m-1' disabled={text.length===0} onClick={handelWordHarry} >Remove Harry </button>
      <button className='btn btn-primary m-1'  disabled={text.length===0} onClick={handelTextSpace} >Remove Extra Space </button>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
      <p>{(0.008*(text.split(" ").filter((element)=>{return element.length !==0}).length))} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  )
}