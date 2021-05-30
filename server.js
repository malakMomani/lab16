'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;

app.get('/',(req,res)=>{
  res.send('Deploying using AWS Done ...');
});

app.listen(PORT,()=>{
  console.log(`Listening to ${PORT}`);
});