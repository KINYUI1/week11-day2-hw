const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send(`<div>99 Bottles of beer on the wall <a href="/98">take one down, pass it around</a></div>`)
})

app.get('/:number_of_bottles',(req,res)=>{
    const { number_of_bottles } = req.params;
    if(number_of_bottles == 0){
        res.send(`out of beer.`)
    }else{
        res.send(`<div>${number_of_bottles} botles of beer on the wall. <a href='${number_of_bottles - 1}'>take one down, pass it around</a></div>`)
    }
})

app.listen(PORT,()=>{
    console.log(`server listenning on port ${PORT}`);
})