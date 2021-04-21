const datasource = require('./datasource');

const inventor = {_id: 10, first: 'TEST_1', last:'TEST_1', year: 1900}

datasource.deleteInventor(inventor);

console.log(datasource.getInventors());