const fs = require('fs');

const PATH = `${__dirname}/inventors.json`;

function getInventors(){
    return JSON.parse(fs.readFileSync(PATH, 'utf-8'));
}

function getInventor(id){
    return getInventors()
        .find(inventor => inventor._id == id);
}

function pushInventor(inventor){
    const inventors = getInventors();
    inventors.push(inventor);
    
    fs.writeFileSync(PATH, JSON.stringify(inventors, null, ' '));
    return getInventor(inventor._id);
}

function deleteInventor(id){
    const inventors = getInventors();
    inventors.splice(
        inventors.findIndex(inventor => inventor._id == id),1
    );
    fs.writeFileSync(PATH, JSON.stringify(inventors, null, ' '));
}

function updateInventor(inventor){
    const inventors = getInventors();
    inventors.splice(
        inventors.findIndex(currentInventor => currentInventor._id == inventor.id),1,inventor
    );
    fs.writeFileSync(PATH, JSON.stringify(inventors, null, ' '));
}

module.exports = {getInventors, getInventor, pushInventor, deleteInventor, updateInventor}