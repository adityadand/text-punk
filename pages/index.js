import React from 'react'
import Link from 'next/link'
import Clipboard from 'clipboard'
import { useEffect } from 'react';


const Index = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [result, setResult] = React.useState('')
 

  // const resultRef = React.useRef(null)
  //   const handleCopy = async () => {
  //     try {
  //       const text = resultRef.current.innerText;
  //       await navigator.clipboard.writeText(text);
  //       alert('Copied to clipboard');
  //     } catch (err) {
  //       console.error('Failed to copy text: ', err);
  //     }
  //   }

  const [data, setData] = React.useState("Data to be copied");
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const copyToClipboard = (e) => {
    const pre = e.target;
    pre.contentEditable = true;
    pre.focus();
    document.execCommand('selectAll');
    document.execCommand("copy");
    pre.contentEditable = false;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let match = inputValue.match(/(.+?)x\s*(\d+)/);
    if(match){
      let result = ''
      for (let i = 0; i < match[2]; i++) {
        result += match[1] + '\n'
      }
  //  setResult(<pre ref={resultRef} >
  //   <button className="copy-button" data-clipboard-text={result}>  Copy</button>
  //  </pre>)
    setResult(<pre onClick={copyToClipboard}>{result}</pre>)

    }else{
      {console.log("test rendered")}
      // setResult(<pre ref={resultRef} >
      // {inputValue}
      // <button className="copy-button" data-clipboard-text={result}>Copy</button>
      // </pre>)
      setResult(<pre onClick={copyToClipboard}>{inputValue}</pre>)
    }
  }

  function clearData() {
    const preElement = document.querySelector('pre');
    preElement.innerHTML = '';
  
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="cyberpunk-header">TEXT Punk</h1>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter text and x[number]" />
        <button type="submit">Submit</button>
        <button type="clear" onClick={clearData} >clear</button>
      </form>
      <p>{result}</p>
    </div>
  )
}

export default Index
