import React from 'react'

const Meme = memes => {
  
  const randomIndex = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const index = Math.floor(randomIndex(0, 255));

  return (
    <section className="image">
      <h4>{memes.memes[index].name}</h4>
      <img src={memes.memes[index].image} alt='PICS!'/>
    </section>
  )
}

export default Meme
