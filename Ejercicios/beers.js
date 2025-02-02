/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
  { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
  { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
  { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
  { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
  { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
];


function precio(beers, beerEnOferta) {

  for (let i = 0; i < beers.length; i++) {

    beers[i].file_name = ultimoElemento(beers[i].label);

    if (beers[i].name === beerEnOferta) {
      beers[i].precio = 320;
    } else if (beers[i].abv < 5 && beers[i].name !== beerEnOferta) {
      beers[i].precio = 300;
    } else if (beers[i].abv >= 5 && beers[i].name !== beerEnOferta)
      beers[i].precio = 350;
  }

  return beers;
}


function ultimoElemento(url) {

  let nameLabe = url.split('/');

  return nameLabe[nameLabe.length - 1];
}

function ordenar(beer) {

  let orden = beer.sort(function (x, y) {
    if (x.type < y.type) {
      return -1;
    }
    return 1;
  });

  return orden;
}
const nuevoArreglo = precio(beers, 'Purple Iris');

console.log(ordenar(nuevoArreglo));
