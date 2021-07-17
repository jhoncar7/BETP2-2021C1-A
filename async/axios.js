import axios from 'axios';

function getUsers(){
    return axios.request('http://fakeapi.jsonparseronline.com/users');    
}

async function llamada(){
    setInterval(async () => {
        const users = await getUsers();    
        console.log('corrio');
    }, 5000);    
}
await llamada();
//console.log(users);

// const axios = require('axios');

// async function getAllUsers(){
//     let usuarios = await axios.request('http://fakeapi.jsonparseronline.com/users');
//     return usuarios; 
// }

// function getUser(id){
//     return axios.request('http://fakeapi.jsonparseronline.com/users/'+id);
// }

// (async function(){
// const usuarios = await getAllUsers();
// console.log(usuarios);
// })();



// (async () => {
//     let users = await getAllUsers();
//     console.log(users);
// })();

// const users = axios('http://fakeapi.jsonparseronline.com/users?age_gte=30')
//     .then(value => {
//         console.log(value.data);
//     })    
//     .catch(error =>{
//         console.log(error);
//     });
