var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

var configDataLabels = {
    color: 'black',
    font: {
        size: "20",
        weight: 'bold'
    }
}

function unanimidadChart() {

    var unanimidad = document.getElementById("chart");

    var myBarunanimidad = new Chart(unanimidad, {
        type: 'bar',
        duration: 3000,
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
                        suggestedMax: 500
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
            labels: ["Unanimidad", "Disconformidad"],
            datasets: [{

                data: [190, 284],
                backgroundColor: [
                    '#36B287',
                    '#D0577C'
                ]
            }]
        }
    });

}

function repeticionChart() {

    var repeticion = document.getElementById("chart");

    var myBarrepeticion = new Chart(repeticion, {
        type: 'bar',
        duration: 3000,
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
                        suggestedMax: 25,
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["PP + PSOE + C'S", "ZEC + PSOE + CHA", "PP + ZEC + CHA"],
            datasets: [{
                data: [57, 53, 5],
                backgroundColor: [
                    'rgba(32, 159, 105, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ]
            }]
        }
    });

}

function masMocionesChart() {

    var masMocione = document.getElementById("chart");

    var myBarmasMocione = new Chart(masMocione, {
        type: 'bar',
        duration: 3000,
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
                        suggestedMax: 80
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
                data: [80, 47, 82, 83, 67],
                backgroundColor: [
                    'rgba(0, 128, 184, 1)',
                    'rgba(154, 22, 34, 1)',
                    'rgba(227, 6, 19, 1)',
                    'rgba(240, 122, 54, 1)',
                    'rgba(239, 176, 39, 1)'
                ]
            }]
        }
    });
}

function abstenidoChart() {

    var abstenido = document.getElementById("chart");

    var myBarabstenido = new Chart(abstenido, {
        type: 'bar',
        duration: 3000,
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
                        suggestedMax: 60,
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
                data: [38, 52, 24, 46, 45],
                backgroundColor: [
                    'rgba(0, 128, 184,1)',
                    'rgba(154, 22, 34,1)',
                    'rgba(227, 6, 19,1)',
                    'rgba(240, 122, 54,1)',
                    'rgba(239, 176, 39,1)'
                ]
            }]

        }
    });

}

function encontraChart() {

    var encontra = document.getElementById("chart");

    var myBarencontra = new Chart(encontra, {
        type: 'bar',
        duration: 3000,
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
                        suggestedMax: 100,
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
                data: [96, 106, 51, 39, 67],
                backgroundColor: [
                    'rgba(0, 128, 184,1)',
                    'rgba(154, 22, 34,1)',
                    'rgba(227, 6, 19,1)',
                    'rgba(240, 122, 54,1)',
                    'rgba(239, 176, 39,1)'
                ]
            }]

        }
    });

}

function afavorChart() {

    var afavor = document.getElementById("chart");

    var myBarafavor = new Chart(afavor, {
        type: 'bar',
        duration: 3000,
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
                        suggestedMax: 70,
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
                data: [103, 82, 152, 159, 120],
                backgroundColor: [
                    'rgba(0, 128, 184,1)',
                    'rgba(154, 22, 34,1)',
                    'rgba(227, 6, 19,1)',
                    'rgba(240, 122, 54,1)',
                    'rgba(239, 176, 39,1)'
                ]
            }]

        }
    });

}

function soledadChart() {

    var soledad = document.getElementById("chart");

    var myBarsoledad = new Chart(soledad, {
        type: 'bar',
        duration: 3000,
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
                        suggestedMax: 70,
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
                data: [102, 79, 16, 50, 30],
                backgroundColor: [
                    'rgba(0, 128, 184,1)',
                    'rgba(154, 22, 34,1)',
                    'rgba(227, 6, 19,1)',
                    'rgba(240, 122, 54,1)',
                    'rgba(239, 176, 39,1)'
                ]
            }]

        }
    });

}



// initialize the scrollama

var container = document.getElementById('scroll');
var step = document.querySelector('.step');
var graphic = document.querySelector('.scroll__graphic');
var text = document.querySelector('.scroll__text');

var scroller = scrollama();

function handleResize() {
    // 1. update height of step elements
    var stepHeight = Math.floor(window.innerHeight * 0.75);
    step.style.height = stepHeight + 'px';


    // 2. update width/height of graphic element

    var graphicMargin = 16 * 4;
    var textWidth = step.getBoundingClientRect();
    var containerWidth = container.getBoundingClientRect().width;
    console.log(containerWidth)
    var totaltext = textWidth.width;
    var totalcontainer = containerWidth.width;
    var graphicWidth = containerWidth - graphicMargin;
    var graphicHeight = Math.floor(window.innerHeight / 2);
    var graphicMarginTop = Math.floor(graphicHeight / 2)

    graphic.style.width = graphicWidth;
    graphic.style.height = graphicHeight;

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    // response = { element, direction, index }


    if (response.index === 0) {
        unanimidadChart();
    } else if (response.index === 1) {
        repeticionChart();
    } else if (response.index === 2) {
        masMocionesChart();
    } else if (response.index === 3) {
        abstenidoChart();
    } else if (response.index === 4) {
        encontraChart();
    } else if (response.index === 5) {
        afavorChart();
    } else if (response.index === 6) {
        soledadChart();
    }


}


function init() {
    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller.setup({
            container: '#scroll',
            graphic: '.scroll__graphic',
            text: '.scroll__text',
            step: '.scroll__text .step',
            offset: 0.63,
        })
        .onStepEnter(handleStepEnter);
    // setup resize event
    window.addEventListener('resize', handleResize);

}

function initResponsive() {
    scroller
      .setup({
        step: '.step' // required - class name of trigger steps
      })
      .onStepEnter(handleStepEnter)
      .onStepExit(handleStepExit);
}

if (width > 769) {
    init();
} else {
    initResponsive();
}


