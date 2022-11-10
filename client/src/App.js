import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Meme from "./components/Meme";
import WhatAreMemes from './components/WhatAreMemes';
import WhyMemes from './components/WhyMemes';

function App() {
  return (
    <BrowserRouter>
    <section className="App">
      <header>
        <h1> GOLDEN (MEME) RETRIEVER </h1>
        <ul>
          <li>
            <Link to="/memes">Get a random Meme!</Link><br />
          </li>
          <li>
            <Link to="/what">What are Memes?</Link><br />
          </li>
          <li>
            <Link to="/why">Why do people like Memes?</Link>
          </li>
          </ul>
      </header>
      <main>
          <Routes>
          <Route path="/" element={<div>Don't you want a meme?</div>}></Route>
          <Route path="/memes" element={<Meme />}></Route>
          <Route path="/what" element={<WhatAreMemes />}></Route>
          <Route path="/why" element={<WhyMemes />}></Route>
          </Routes>
        </main>
      </section>
      </BrowserRouter>
  );
}

export default App;
