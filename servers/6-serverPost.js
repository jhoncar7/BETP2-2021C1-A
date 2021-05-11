import express from 'express';
const app = express();
const PORT = 3000;

// convierte los body en objetos
app.use(express.json());

app.post('/inventors', (req, res)=>{
    console.log(`Nombre: ${req.body.first}`);
    res.send(`
        ${req.body.first}
        ${req.body.last}
        ${req.body.year}
    `);
});

app.get('/inventors', (req, res)=>{
    console.log('Llego un get');
    res.send(200);
});

app.listen(PORT, ()=> console.log('Server up!'));