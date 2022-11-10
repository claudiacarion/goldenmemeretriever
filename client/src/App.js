import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Meme from "./components/Meme";
import WhatAreMemes from './components/WhatAreMemes';
import WhyMemes from './components/WhyMemes';

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
            <Link to="/what">What?</Link><br />
          </li>
          <li>
            <Link to="/why">Why?</Link>
          </li>
          </ul>
          <Routes>
          <Route path="/what" element={<WhatAreMemes />}></Route>
          <Route path="/why" element={<WhyMemes />}></Route>
          </Routes>
      </header>
      <main>
          <button onClick={fetchData}>Meme Me</button><br/>
          {memes ? 
          <Meme memes={memes} />
          : 'Give me(me) a sec...'}
        </main>
      </section>
      </BrowserRouter>
  );
}

export default App;
