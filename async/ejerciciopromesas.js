// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo
// 4.- Leer el archivo actualizado
// 5.- Mostrar en consola

// utilizando promesas 
import fs from 'fs/promises';
const path = './inventors.json';

const inventor = {first: 'Rene', last: 'Favarolo', year: 1923};

// 1.- Leer un json
fs.readFile(path, 'utf-8').then(data=>{
    let inventors = JSON.parse(data);
    //2.- Insertar un inventor
    inventors.push(inventor);
    //3.- Actualizar el archivo
    return fs.writeFile(path, JSON.stringify(inventors, null, ' '));
}).then(() =>
    // 4.- Leer archivo actualizado    
     fs.readFile(path, 'utf-8')
).then(data => {
    // 5.- Mostrar los inventores actualizados
    console.log(data);
}).catch(error =>{
    console.log(error.message);
});