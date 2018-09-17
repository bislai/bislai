'use strict';

var configDataLabels = {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    borderRadius: 5,
    color: 'white',
    padding: {
        top: 5,
        right: 10,
        bottom: 5,
        left: 10
    }
};

var configDataLabelsPartidos = {
    color: 'black',
    font: {
        size: "20",
        weight: 'bold'
    }
};

var votaciones = ["1979", "1983", "1987", "1991", "1995", "1999", "2003", "2007", "2011", "2015"];

var partidos = ["PP", "ZEC", "PSOE", "CHA"];

var colorPartidos = ['rgba(0, 128, 184, 1)', 'rgba(154, 22, 34, 1)', 'rgba(227, 6, 19, 1)', 'rgba(239, 176, 39, 1)'];

function historico() {

    var unanimidad = document.getElementById("historico");

    var myBarunanimidad = new Chart(unanimidad, {
        type: 'line',
        duration: 300,
        easing: 'easeInCubic',
        options: {
            plugins: {
                datalabels: configDataLabels
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 31,
                        fontColor: '#111'
                    },
                    gridLines: {
                        color: '#111',
                        lineWidth: 1
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#111'
                    },
                    gridLines: {
                        color: '#111',
                        lineWidth: 1
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: false
        },
        data: {
            labels: votaciones,
            datasets: [{
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
                backgroundColor: ['#0d0412'],
                borderColor: ["#ccc"],
                borderWidth: [1],
                datalabels: {
                    align: 'end',
                    anchor: 'end'
                }
            }]
        }
    });
}

function enContra() {

    var enContra = document.getElementById("en-contra");

    var myBarenContra = new Chart(enContra, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            plugins: {
                datalabels: configDataLabelsPartidos
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 20
                    },
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }],
                xAxes: [{
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }]
            },
            legend: {
                display: false
            },
            tooltips: false
        },
        data: {
            labels: partidos,
            datasets: [{

                data: [10, 17, 4, 13],
                backgroundColor: ['rgba(0, 128, 184, 1)', 'rgba(154, 22, 34, 1)', 'rgba(227, 6, 19, 1)', 'rgba(239, 176, 39, 1)']
            }]
        }
    });
}

function aFavor() {

    var aFavor = document.getElementById("a-favor");

    var myBaraFavor = new Chart(aFavor, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            plugins: {
                datalabels: configDataLabelsPartidos
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 20
                    },
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }],
                xAxes: [{
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }]
            },
            legend: {
                display: false
            },
            tooltips: false
        },
        data: {
            labels: partidos,
            datasets: [{

                data: [30, 12, 42, 16],
                backgroundColor: ['rgba(0, 128, 184, 1)', 'rgba(154, 22, 34, 1)', 'rgba(227, 6, 19, 1)', 'rgba(239, 176, 39, 1)']
            }]
        }
    });
}

function Abstencion() {

    var Abstencion = document.getElementById("abstencion");

    var myBarAbstencion = new Chart(Abstencion, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            plugins: {
                datalabels: configDataLabelsPartidos
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 20
                    },
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }],
                xAxes: [{
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }]
            },
            legend: {
                display: false
            },
            tooltips: false
        },
        data: {
            labels: partidos,
            datasets: [{

                data: [7, 18, 1, 18],
                backgroundColor: ['rgba(0, 128, 184, 1)', 'rgba(154, 22, 34, 1)', 'rgba(227, 6, 19, 1)', 'rgba(239, 176, 39, 1)']
            }]
        }
    });
}

function votandoEnContra() {

    var votandoEnContra = document.getElementById("votando-en-contra");

    var myBarvotandoEnContra = new Chart(votandoEnContra, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            plugins: {
                datalabels: configDataLabelsPartidos
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 20
                    },
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }],
                xAxes: [{
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }]
            },
            legend: {
                display: false
            },
            tooltips: false
        },
        data: {
            labels: partidos,
            datasets: [{

                data: [5, 17, 6, 13],
                backgroundColor: ['rgba(0, 128, 184, 1)', 'rgba(154, 22, 34, 1)', 'rgba(227, 6, 19, 1)', 'rgba(239, 176, 39, 1)']
            }]
        }
    });
}

function votandoAFavor() {

    var votandoAFavor = document.getElementById("votando-a-favor");

    var myBarvotandoAFavor = new Chart(votandoAFavor, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            plugins: {
                datalabels: configDataLabelsPartidos
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 20
                    },
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }],
                xAxes: [{
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                }]
            },
            legend: {
                display: false
            },
            tooltips: false
        },
        data: {
            labels: partidos,
            datasets: [{

                data: [59, 22, 55, 29],
                backgroundColor: ['rgba(0, 128, 184, 1)', 'rgba(154, 22, 34, 1)', 'rgba(227, 6, 19, 1)', 'rgba(239, 176, 39, 1)']
            }]
        }
    });
}

historico();
enContra();
aFavor();
Abstencion();
votandoEnContra();
votandoAFavor();