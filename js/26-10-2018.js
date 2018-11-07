"use strict";

//Mocion 2
var primera = c3.generate({
    data: {
        columns: [["A favor: PSOE + C'S", 9], ["En contra: ZEC", 9], ["Abstención: PP + CHA", 11]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion2'
});

//Mocion 3
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 19], ["Abstención: ZEC + CHA", 11]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion3'
});

//Mocion 4
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S + CHA", 21], ["En contra: ZEC", 9]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion4'
});

//Mocion 5
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S + CHA", 21], ["Abstención: ZEC", 9]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion5'
});

//Mocion 6
var primera = c3.generate({
    data: {
        columns: [["A favor: PP", 18], ["En contra: ZEC + CHA", 9], ["Abstención: PSOE + C'S", 2]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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

//Mocion 7
var primera = c3.generate({
    data: {
        columns: [["A favor: PP", 9], ["En contra: ZEC + PSOE + C'S + CHA", 20]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion7'
});

//Mocion 8
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + C'S + CHA", 19], ["En contra: PP", 9]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion8'
});

//Moción 9
var primera = c3.generate({
    data: {
        columns: [["Unanimidad", 31]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion9'
});

//Mocion 10
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 19], ["En contra: ZEC", 9], ["Abstención: CHA", 2]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion10'
});

//Mocion 11
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + CHA", 16], ["Abstención: PP + C'S", 11]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion11'
});

//Mocion 11-2
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + CHA", 17], ["En contra: PP", 9], ["Abstención: C'S", 4]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion11-2'
});

//Mocion 11-3
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + C'S + CHA", 21], ["Abstención: PP", 9]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion11-3'
});

//Mocion 12
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S + CHA", 21], ["En contra: ZEC", 9]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion12'
});

//Mocion 13
var primera = c3.generate({
    data: {
        columns: [["Unanimidad", 31]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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

//Mocion 14
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S + CHA", 21], ["En contra: ZEC", 9]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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

//Mocion 14-2
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 18], ["En contra: ZEC", 9], ["Abstención: CHA", 2]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion14-2'
});

//Mocion 14-3
var primera = c3.generate({
    data: {
        columns: [["Unanimidad", 31]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion14-3'
});

//Mocion 15
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + CHA", 15], ["En contra: PP + C'S", 13]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion15'
});

//Mocion 16
var primera = c3.generate({
    data: {
        columns: [["Unanimidad", 31]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion16'
});

//Mocion 17
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 21], ["En contra: ZEC + CHA", 9]],
        type: 'bar',
        labels: {

            format: function format(v, id, i, j) {
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
    bindto: '#mocion17'
});