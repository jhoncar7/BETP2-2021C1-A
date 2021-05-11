import express from 'express';
const app = express();
const PORT = 3000;

app.use('/', (req, res, next) =>{
    console.log('Entro al midleware');
    if(req.query.token === 'abcd123'){
        next();
    }
    else{
        res.status(401).send('login fail');
    }
});

app.get('/', (req, res)=>{
    console.log('get');
    res.send('Respuesta del servidor');
});



app.listen(PORT, ()=> console.log('Server up!'));