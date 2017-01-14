//Mocion 13
var primera = c3.generate({
    data: {
        columns: [
           ["A favor: PP + PSOE + C'S", 19],
           ["En contra: ZEC + CHA", 11]
        ],
        type : 'pie'
    },
    color: {
      pattern: ['#55AF32', '#C56159']
    },
     bindto: '#mocion13'
});

//Mocion 14
var primera = c3.generate({
    data: {
        columns: [
            ["Unanimidad", 31]
        ],
        type : 'pie'
    },
    color: {
      pattern: ['#55AF32', '#C56159']
    },
     bindto: '#mocion14'
});

//Moción 14-2
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: ZEC + PSOE + C'S", 19],
            ["En contra: CHA", 2],
            ["Abstención: PP", 9]
        ],
        type : 'pie'
    },
    color: {
      pattern: ['#55AF32', '#C56159', '#a9a5a5']
    },
     bindto: '#mocion14-2'
});
