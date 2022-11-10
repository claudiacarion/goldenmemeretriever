import React, { useState, useEffect } from 'react';

const Home = () => {

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


  const randomIndex = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const printMeme = () => {
    const index = Math.floor(randomIndex(0, memes.length))
    console.log(index, memes)
    return (
      <section className="image">
        <h4>{memes[index].name}</h4>
        <img src={memes[index].image} alt='PICS!'/>
      </section>
    )
  }

  return <>
    <button onClick={fetchData}> Meme Me </button>
    <br/>
    {
      memes ? 
        printMeme()
      : 'Give me(me) a sec...'
    }
  </>
}

export default Home;