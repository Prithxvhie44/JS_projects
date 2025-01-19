import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.get('/contact', (req, res) => {
    res.send('Hello World!');
  }); 
  

app.get('/about', (req, res) => {
    res.send(<h1>About me section</h1>);
  }); 
  

app.listen(port, () => {    
  console.log('Server is running on',port);
});