import React, { useState, useEffect, useRef } from 'react';

const Home = () => {

  const [memes, setMemes] = useState()
  const [searchInput, setSearchInput] = useState();
  const searchText = useRef();
  
  const fetchData = (url) => {
    return fetch('/api')
      .then(res => res.json())
      .then(data => setMemes(data))
      .catch(err => console.error('error:' + err));
  }

  const searchData = (id) => {
    return fetch(`/api/${id}`)
      .then(res => res.json())
      .then(data => setMemes(data))
      .catch(err => console.error('error:' + err));
  }

  useEffect(() => { //fetch everything
    fetchData('/api')
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    searchData(searchText.current.value)
    // setSearchInput(e.target.value);
  };

  const randomIndex = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const printMeme = () => {
    const index = Math.floor(randomIndex(0, memes.length))
  
    return (
      <section className="image-container">
        <h3>WHAT IS THIS MEME CALLED?</h3>
        <h3>{memes[index].name}</h3>
        <img src={memes[index].image} alt='Oh no! The URL is broken in the API!'/>
        <form onSubmit={handleChange}>
        <input ref={searchText} className='search' type="number" placeholder='Enter a number between 0-255' />
        </form>
        <button> Search! </button>
      </section>
    )
  }

  return <>
    <section className="meme-container">
      <button onClick={fetchData}> Give me another one! </button>
      <br/>
      {
        memes ? 
          printMeme()
        : 'Give me(me) a sec...'
      }
    </section>
  </>
}

export default Home;