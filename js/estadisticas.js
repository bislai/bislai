'use strict';

function unanimidadChart() {

    var ctx = document.getElementById("unanimidad-chart");

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["unanimidad", "disconformidad"],
            datasets: [{

                label: ["unanimidad", "disconformidad"],
                data: [37.59, 62.41],
                backgroundColor: ['rgba(32, 159, 105, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(32, 159, 105,1)', 'rgba(255,99,132,1)'],
                borderWidth: 1
            }]
        }
    });
}

function repeticionChart() {

    var ctx = document.getElementById("repeticion-chart");

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["PP + PSOE + C'S", "ZEC + PSOE + CHA", "ZEC + PSOE + C'S"],
            datasets: [{
                data: [11.31, 10.58, 2.5],
                backgroundColor: ['rgba(32, 159, 105, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(32, 159, 105,1)', 'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }]
        }
    });
}

function masMocionesChart() {

    var ctx = document.getElementById("mas-mociones-chart");

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["PP", "ZEC", "PSOE", "C'S", "CHA"],
            datasets: [{
                data: [47, 28, 50, 44, 36],
                backgroundColor: ['rgba(0, 128, 184,.2)', 'rgba(154, 22, 34,.2)', 'rgba(227, 6, 19,.2)', 'rgba(240, 122, 54,.2)', 'rgba(239, 176, 39,.2)'],
                borderColor: ['rgba(0, 128, 184,1)', 'rgba(154, 22, 34,1)', 'rgba(227, 6, 19,1)', 'rgba(240, 122, 54,1)', 'rgba(239, 176, 39,1)'],
                borderWidth: 1
            }]
        }
    });
}

function abstenidoChart() {

    var ctx = document.getElementById("abstencion-mociones-chart");

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["PP", "ZEC", "PSOE", "C'S", "CHA"],
            datasets: [{
                data: [8.02, 10.21, 5.47, 9.12, 10.21],
                backgroundColor: ['rgba(0, 128, 184,.2)', 'rgba(154, 22, 34,.2)', 'rgba(227, 6, 19,.2)', 'rgba(240, 122, 54,.2)', 'rgba(239, 176, 39,.2)'],
                borderColor: ['rgba(0, 128, 184,1)', 'rgba(154, 22, 34,1)', 'rgba(227, 6, 19,1)', 'rgba(240, 122, 54,1)', 'rgba(239, 176, 39,1)'],
                borderWidth: 1
            }]

        }
    });
}

function encontraChart() {

    var ctx = document.getElementById("en-contra-mociones-chart");

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["PP", "ZEC", "PSOE", "C'S", "CHA"],
            datasets: [{
                data: [19.70, 24.08, 11.31, 8.02, 15.32],
                backgroundColor: ['rgba(0, 128, 184,.2)', 'rgba(154, 22, 34,.2)', 'rgba(227, 6, 19,.2)', 'rgba(240, 122, 54,.2)', 'rgba(239, 176, 39,.2)'],
                borderColor: ['rgba(0, 128, 184,1)', 'rgba(154, 22, 34,1)', 'rgba(227, 6, 19,1)', 'rgba(240, 122, 54,1)', 'rgba(239, 176, 39,1)'],
                borderWidth: 1
            }]

        }
    });
}

function afavorChart() {

    var ctx = document.getElementById("a-favor-mociones-chart");

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        duration: 3000,
        easing: 'easeInCubic',
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["PP", "ZEC", "PSOE", "C'S", "CHA"],
            datasets: [{
                data: [35.03, 28.46, 46.35, 45.98, 36.86],
                backgroundColor: ['rgba(0, 128, 184,.2)', 'rgba(154, 22, 34,.2)', 'rgba(227, 6, 19,.2)', 'rgba(240, 122, 54,.2)', 'rgba(239, 176, 39,.2)'],
                borderColor: ['rgba(0, 128, 184,1)', 'rgba(154, 22, 34,1)', 'rgba(227, 6, 19,1)', 'rgba(240, 122, 54,1)', 'rgba(239, 176, 39,1)'],
                borderWidth: 1
            }]

        }
    });
}

//Obteniendo la anchura de la ventana
var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

if (width > 1024) {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: 200,
        offset: 300
    }).setPin("#unanimidad").addTo(controller).on("enter", unanimidadChart);

    var repeticion = document.getElementById('repeticion');
    var repeDimension = repeticion.getBoundingClientRect();
    var repeTop = repeDimension.top - 50;

    new ScrollMagic.Scene({
        duration: 200,
        offset: repeTop
    }).setPin("#repeticion").addTo(controller).on("enter", repeticionChart);

    var masMociones = document.getElementById('mas-mociones');
    var masMocionesDimension = masMociones.getBoundingClientRect();
    var masMocionesTop = masMocionesDimension.top - 50;

    new ScrollMagic.Scene({
        duration: 200,
        offset: masMocionesTop
    }).setPin("#mas-mociones").addTo(controller).on("enter", masMocionesChart);

    var abstenidoMociones = document.getElementById('abstenido-mociones');
    var abstenidoMocionesDimension = abstenidoMociones.getBoundingClientRect();
    var abstenidoMocionesTop = abstenidoMocionesDimension.top - 50;

    new ScrollMagic.Scene({
        duration: 200,
        offset: abstenidoMocionesTop
    }).setPin("#abstenido-mociones").addTo(controller).on("enter", abstenidoChart);

    var encontraMociones = document.getElementById('en-contra-mociones');
    var encontraMocionesDimension = encontraMociones.getBoundingClientRect();
    var encontraMocionesTop = encontraMocionesDimension.top - 50;

    new ScrollMagic.Scene({
        duration: 200,
        offset: encontraMocionesTop
    }).setPin("#en-contra-mociones").addTo(controller).on("enter", encontraChart);

    var afavorMociones = document.getElementById('a-favor-mociones');
    var afavorMocionesDimension = afavorMociones.getBoundingClientRect();
    var afavorMocionesTop = afavorMocionesDimension.top - 50;

    new ScrollMagic.Scene({
        duration: 200,
        offset: afavorMocionesTop
    }).setPin("#a-favor-mociones").addTo(controller).on("enter", afavorChart);
} else {

    unanimidadChart();
    repeticionChart();
    masMocionesChart();
    abstenidoChart();
    encontraChart();
    afavorChart();
}

// Javascript
var data = {
    labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm", "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

    datasets: [{
        title: "Some Data",
        values: [25, 40, 30, 35, 8, 52, 17, -4]
    }, {
        title: "Another Set",
        values: [25, 50, -10, 15, 18, 32, 27, 14]
    }, {
        title: "Yet Another",
        values: [15, 20, -3, -15, 58, 12, -17, 37]
    }]
};

var chart = new Chart({
    parent: "#chart-unanimidad", // or a DOM element
    title: "My Awesome Chart",
    data: data,
    type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
    height: 250,

    colors: ['#7cd6fd', 'violet', 'blue'],
    // hex-codes or these preset colors;
    // defaults (in order):
    // ['light-blue', 'blue', 'violet', 'red',
    // 'orange', 'yellow', 'green', 'light-green',
    // 'purple', 'magenta', 'grey', 'dark-grey']

    format_tooltip_x: function format_tooltip_x(d) {
        return (d + '').toUpperCase();
    },
    format_tooltip_y: function format_tooltip_y(d) {
        return d + ' pts';
    }
});