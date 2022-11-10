import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Image from "./components/Image";
import WhatAreMemes from './components/WhatAreMemes';
import Home from './components/Home';


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
    <BrowserRouter>
    <section className="App">
      <header>
        <h1> GOLDEN MEME RETRIEVER </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/">Meme Me!</Link>
            <Link to="/about">About</Link>
          </li>
          </ul>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/image" element={<Image />}></Route>
          <Route path="/about" element={<WhatAreMemes />}></Route>
          </Routes>
      </header>
      <main>
          <button onClick={fetchData}>Meme Me</button><br/>
          {memes ? 
          <Image memes={memes} />
          : 'Give me a sec...'}
        </main>
      </section>
      </BrowserRouter>
  );
}

export default App;
