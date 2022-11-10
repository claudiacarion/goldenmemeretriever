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
        <nav>
        <ul>
          <li>
            <Link to="/">I wanna go home!</Link><br />
          </li>
          <li>
            <Link to="/memes">Get a random meme!</Link><br />
          </li>
          <li>
            <Link to="/what">What is a meme?</Link><br />
          </li>
          <li>
            <Link to="/why">Why do people like memes?</Link>
          </li>
          </ul>
        </nav>
      </header>
      <main className='main'>
          <Routes>
          <Route path="/" element={<p>Don't you want a meme? Click on 'Get a random meme!'</p>}></Route>
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
