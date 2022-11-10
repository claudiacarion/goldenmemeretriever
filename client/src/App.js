import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [memes, setMemes] = useState()
  const [input, setInput] = useState()

  const fetchData = async(url) => {
    const data = await fetch(url)
    setMemes(data);
  }

  const dataHandler = (e) => {
    e.preventDefault() //prevent page from rendering
    console.log(memes)
  }

  useEffect(() => { //fetch everything
    fetchData('/api')
  }, [])

  // useEffect(() => { //fetch specific
  //   fetchData(`/api/${input}`)
  // }, [input])

  return (
    <div className="App">
      <h1> GOLDEN MEME RETRIEVER </h1>
      <input onChange={e => setInput(e.target.value)}></input>
      <button onClick={dataHandler}>Meme Me</button>
    </div>
  );
}

export default App;
