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
        <div>
          <h1> GOLDEN (MEME) RETRIEVER </h1>
        </div>
        <nav>
        <ul className='menu-items'>
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
          <Route path="/" element={<><p className='welcome'>Welcome to the Golden (Meme) Retriever! <br />Click on 'Get a random meme!'</p><img src='http://cdn.akc.org/content/article-body-image/via_pinterest.jpg' alt="Welcome image is broken!" className='welcome-img' /></>
}></Route>
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
