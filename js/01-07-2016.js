"use strict";

//Moción 2
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + C'S", 14], ["En contra: ZEC + CHA", 10], ["Abstención: PSOE", 6]],
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

//Mocion 2-2
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 20], ["En contra: ZEC + CHA", 10]],
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
    bindto: '#mocion2-2'
});

//Mocion 2-3
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE + C'S", 20], ["En contra: ZEC + CHA", 10]],
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
    bindto: '#mocion2-3'
});

//Mocion 3
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + C'S + CHA", 20], ["Abstención: PP", 10]],
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

//Moción 3-2
var primera = c3.generate({
    data: {
        columns: [["A favor: PSOE + C'S", 9], ["En contra: ZEC + CHA", 10], ["Abstención: PP", 10]],
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
    bindto: '#mocion3-2'
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
        columns: [["A favor: PSOE + C'S", 10], ["En contra: PP + ZEC + CHA", 20]],
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
    bindto: '#mocion5'
});

//Mocion 6
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
    bindto: '#mocion6'
});

//Moción 8
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + PSOE", 16], ["En contra: ZEC", 8], ["Abstención: C'S + CHA", 6]],
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
    bindto: '#mocion8'
});

//Mocion 9
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
    bindto: '#mocion10'
});

//Moción 13
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + CHA", 10], ["En contra: PP + PSOE", 16], ["Abstención: C'S ", 4]],
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
    bindto: '#mocion13'
});