"use strict";

//Mocion 2
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S + CHA", 21], ["Abstención: ZEC", 8]],
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
        pattern: ['#209F69', '#8CD4EB']
    },
    bindto: '#mocion2'
});

//Mocion 3
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + ZEC + C'S", 21], ["En contra: PSOE + CHA", 8]],
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
    bindto: '#mocion3'
});

//Mocion 4
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
    bindto: '#mocion4'
});

//Mocion 5
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
    bindto: '#mocion5'
});

//Mocion 6
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + C'S", 13], ["En contra: ZEC + PSOE + CHA", 15]],
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
    bindto: '#mocion6'
});

//Mocion 6-2
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 18], ["En contra: ZEC + CHA", 10]],
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
    bindto: '#mocion6-2'
});

//Mocion 6-3
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 18], ["En contra: ZEC + CHA", 10]],
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
    bindto: '#mocion6-3'
});

//Mocion 6-4
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 18], ["En contra: ZEC + CHA", 10]],
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
    bindto: '#mocion6-4'
});

//Mocion 6-5
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 18], ["En contra: ZEC + CHA", 10]],
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
    bindto: '#mocion6-5'
});

//Moción 7
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S + CHA", 20], ["En contra: ZEC", 8]],
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

//Moción 8
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
    bindto: '#mocion8'
});

//Moción 9
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + CHA", 16], ["En contra: PP", 9], ["Abstención: C'S", 4]],
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
        pattern: ['#209F69', '#D01F2E', '#8CD4EB']
    },
    bindto: '#mocion9'
});

//Moción 9-2
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + CHA", 16], ["En contra: PP", 9], ["Abstención: PSOE + C'S", 4]],
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
        pattern: ['#209F69', '#D01F2E', '#8CD4EB']
    },
    bindto: '#mocion9-2'
});

//Mocion 10
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + CHA", 16], ["En contra: PP + C'S", 13], ["Abstención: PSOE", 4]],
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
        pattern: ['#209F69', '#D01F2E', '#8CD4EB']
    },
    bindto: '#mocion10'
});

//Moción 11
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S + CHA", 21], ["En contra: ZEC", 8]],
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
    bindto: '#mocion11'
});

//Moción 11-2
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
    bindto: '#mocion11-2'
});

//Moción 12
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
    bindto: '#mocion11'
});

//Moción 11
var primera = c3.generate({
    data: {
        columns: [["A favor: PP", 9], ["En contra: ZEC + PSOE + CHA", 16], ["Abstención: C'S", 3]],
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
        pattern: ['#209F69', '#D01F2E', '#8CD4EB']
    },
    bindto: '#mocion11'
});

//Moción 12
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
    bindto: '#mocion12'
});

//Moción 13
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

//Moción 14
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S + CHA", 20], ["En contra: ZEC", 9]],
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

//Moción 15
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
    bindto: '#mocion15'
});

//Moción 16
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 19], ["Abstención: ZEC + CHA", 10]],
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
        pattern: ['#209F69', '#8CD4EB']
    },
    bindto: '#mocion16'
});