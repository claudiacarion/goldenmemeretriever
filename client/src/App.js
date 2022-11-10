import React, { useState, useEffect } from 'react';
import './App.css';
import Image from "./components/Image";

function App() {
  const [memes, setMemes] = useState()

  const fetchData = (url) => {
    return fetch('/api')
      .then(res => res.json())
      .then(data => setMemes(data))
      .catch(err => console.error('error:' + err));
  }

  useEffect(() => { //fetch everything
    fetchData('/api')
  }, [])

  return (
    <section className="App">
      <header>
        <h1> GOLDEN MEME RETRIEVER </h1>
      </header>
      <main>
          <button onClick={fetchData}>Meme Me</button><br/>
          {memes ? 
          <Image memes={memes} />
          : 'Give me a sec...'}
        </main>
      </section>
  );
}

export default App;
