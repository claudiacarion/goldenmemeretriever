import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

const app = express();
const port = 5211;

app.use(bodyParser.json());


app.get('/api',(req,res) => {
  fetch('https://alpha-meme-maker.herokuapp.com/memes/')
    .then(res => res.json())
    .then(json => res.send(json.data))
    .catch(err => console.error('error:' + err));
})

app.get('/api/:id',(req,res) => {
  const id = req.params.id;
  fetch(`https://alpha-meme-maker.herokuapp.com/memes/${id}`)
    .then(res => res.json())
    .then(json => {
      return res.send(json.data);
    })
    .catch(err => console.error('error:' + err));
})

app.listen(port, () => {
     console.log(`app is listening to port ${port}`);
})