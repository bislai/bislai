"use strict";

//Mocion 24
var primera = c3.generate({
    data: {
        columns: [["A favor: PSOE + C'S + CHA", 10], ["En contra: PP + ZEC", 18]],
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
    bindto: '#mocion24'
});

//Mocion 24-2
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + C'S + CHA", 19], ["En contra: PP ", 9]],
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
    bindto: '#mocion24-2'
});

//Moción 24-3
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + C'S + CHA", 19], ["En contra: PP ", 9]],
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
    bindto: '#mocion24-3'
});

//Moción 25
var primera = c3.generate({
    data: {
        columns: [["unanimidad", 30]],
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
    bindto: '#mocion25'
});

//Moción 26
var primera = c3.generate({
    data: {
        columns: [["unanimidad", 30]],
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
    bindto: '#mocion26'
});

//Moción 28
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + C'S", 13], ["En contra: ZEC + PSOE + CHA ", 16]],
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
    bindto: '#mocion28'
});

//Moción 28-2
var primera = c3.generate({
    data: {
        columns: [["A favor: PP + C'S", 13], ["En contra: ZEC + PSOE", 15], ["Abstención: CHA", 1]],
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
    bindto: '#mocion28-2'
});

//Moción 30
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
    bindto: '#mocion30'
});

//Moción 31
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
        pattern: ['#209F69', '#8CD4EB']
    },
    bindto: '#mocion31'
});

//Moción 31-2
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
    bindto: '#mocion31-2'
});

//Moción 31-3
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
        pattern: ['#209F69', '#8CD4EB']
    },
    bindto: '#mocion31-3'
});

//Moción 31-4
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
    bindto: '#mocion31-4'
});

//Moción 31-5
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
    bindto: '#mocion31-5'
});

//Moción 32
var primera = c3.generate({
    data: {
        columns: [["A favor: ZEC + PSOE + CHA", 16], ["En contra: PP", 10], ["Abstención: C'S'", 3]],
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
    bindto: '#mocion32'
});