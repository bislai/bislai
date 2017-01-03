var votosFavor = [
  {partido: 'PP', votos: 11},
  {partido: 'ZEC', votos: 9},
  {partido: 'PSOE', votos: 6},
  {partido: 'C`S', votos: 2}
];

var votosContra = [
  {partido: 'Nadie', votos: 0}
];

var abstencion = [
  {partido: 'CHA', votos: 2}
];

//Funcion para sumar votos
function sumarVotos(arrayVotos){
  return arrayVotos.reduce(function(acumulado, votoObj){
    return acumulado + votoObj.votos;
  },0);
}

//Función que obtiene el títlo de los partidos. Ejemplo: CHA + ZEC
function tituloPartidos(arrayVotos){
  return arrayVotos
    .map(function(votoObj){
      return votoObj.partido;
    })
    .join(' + ');
}




var chart = c3.generate({
    data: {
        columns: [
            ["A favor: PP + ZEC + PSOE + C'S", 28],
            // ["En contra:", 0],
            ["Abstención: CHA", 2]
        ],
        type : 'pie'
    },
    color: {
      pattern: ['#55AF32',  '#a9a5a5']
    }
});
