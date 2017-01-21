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
      pattern: ['#209F69', '#D01F2E']
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
      pattern: ['#209F69', '#D01F2E']
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
      pattern: ['#209F69', '#D01F2E', '#D7E4E4']
    },
     bindto: '#mocion14-2'
});
