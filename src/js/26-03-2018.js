//Mocion 2
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: PP + PSOE + C'S + CHA", 21],
            ["Abstención: ZEC", 8]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#696969']
    },
    bindto: '#mocion2'
});

//Mocion 2-2
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: PSOE + C'S + CHA", 12],
            ["Abstención: PP + ZEC", 17]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#696969']
    },
    bindto: '#mocion2-2'
});

//Mocion 3
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: ZEC + PSOE + C'S + CHA", 20],
            ["En contra: PP", 9]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E']
    },
    bindto: '#mocion3'
});


//Mocion 4
var primera = c3.generate({
    data: {
        columns: [
            ["Unanimidad", 31]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69']
    },
    bindto: '#mocion4'
});

//Mocion 4-2
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: PP + PSOE + C'S + CHA", 21],
            ["En contra: ZEC", 8]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E']
    },
    bindto: '#mocion4-2'
});

//Mocion 5
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: ZEC + CHA", 10],
            ["En contra: PP", 9],
            ["Abstención: PSOE + C'S", 10]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E', '#696969']
    },
    bindto: '#mocion5'
});

//Mocion 6
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: PP", 9],
            ["En contra: ZEC + PSOE + CHA", 16],
            ["Abstención: C'S", 4]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E', '#696969']
    },
    bindto: '#mocion6'
});

//Moción 7
var primera = c3.generate({
    data: {
        columns: [
            ["Unanimidad", 31]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69']
    },
    bindto: '#mocion7'
});

//Moción 8
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: ZEC + CHA", 10],
            ["En contra: PP + C'S", 13],
            ["Abstención: PSOE", 6]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E', '#696969']
    },
    bindto: '#mocion8'
});

//Mocion 8-2
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: ZEC + PSOE + C'S + CHA", 20],
            ["En contra: PP", 9]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E']
    },
    bindto: '#mocion8-2'
});

//Moción 8-3
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: ZEC + CHA", 10],
            ["En contra: PP + C'S", 13],
            ["Abstención: PSOE", 6]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E', '#696969']
    },
    bindto: '#mocion8-3'
});

//Mocion 9
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: PP + PSOE + C'S", 19],
            ["En contra: ZEC", 8],
            ["Abstención: CHA", 2]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E', '#696969']
    },
    bindto: '#mocion9'
});

//Moción 9-2
var primera = c3.generate({
    data: {
        columns: [
            ["Unanimidad", 31]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69']
    },
    bindto: '#mocion9-2'
});

//Moción 9-3
var primera = c3.generate({
    data: {
        columns: [
            ["Unanimidad", 31]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69']
    },
    bindto: '#mocion9-3'
});

//Moción 10
var primera = c3.generate({
    data: {
        columns: [
            ["Unanimidad", 31]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69']
    },
    bindto: '#mocion10'
});

//Moción 11
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: PP", 9],
            ["En contra: ZEC + PSOE + CHA", 16],
            ["Abstención: C'S", 3]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E', '#696969']
    },
    bindto: '#mocion11'
});

//Moción 12
var primera = c3.generate({
    data: {
        columns: [
            ["Unanimidad", 31]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69']
    },
    bindto: '#mocion12'
});

//Moción 13
var primera = c3.generate({
    data: {
        columns: [
            ["Unanimidad", 31]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69']
    },
    bindto: '#mocion13'
});

//Moción 14
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: PP + PSOE + C'S + CHA", 20],
            ["En contra: ZEC", 9]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#D01F2E']
    },
    bindto: '#mocion14'
});

//Moción 15
var primera = c3.generate({
    data: {
        columns: [
            ["Unanimidad", 31]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69']
    },
    bindto: '#mocion15'
});

//Moción 16
var primera = c3.generate({
    data: {
        columns: [
            ["A favor: PP + PSOE + C'S", 19],
            ["Abstención: ZEC + CHA", 10]
        ],
        type: 'bar',
        labels: {

            format: function(v, id, i, j) {
                return v;
            }
        }
    },
    bar: {
        width: 100
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    },
    color: {
        pattern: ['#209F69', '#696969']
    },
    bindto: '#mocion16'
});
