// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo
// 4.- Leer el archivo actualizado
// 5.- Mostrar en consola

// utilizando promesas 
import fs from 'fs/promises';
const path = './inventors.json';

const inventor = {first: 'Rene', last: 'Favarolo', year: 1923};

async function getInventors(){
    return fs.readFile(path, 'utf-8');
}

async function pushInventor(inventor, inventors){
    inventors.push(inventor);
    return fs.writeFile(path, JSON.stringify(inventors, null, ' '));
}

let inventors = await getInventors();

await pushInventor(inventor, JSON.parse(inventors));

inventors = await getInventors();

console.log(inventors);



