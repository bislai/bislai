function unanimidadChart() {

  var ctx = document.getElementById("chart");

  var myBarChart = new Chart(ctx, {
      type: 'bar',
      duration: 3000,
      easing: 'easeInCubic',
      options: {
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                mirror:false,
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
          labels: ["Unanimidad", "Disconformidad"],
          datasets: [{

              data: [37.59 , 62.41],
              backgroundColor: [
                  '#36B287',
                  '#D0577C'
              ]
          }]
      }
  });

}

function repeticionChart() {

  var ctx = document.getElementById("chart");

  var myBarChart = new Chart(ctx, {
      type: 'bar',
      duration: 3000,
      easing: 'easeInCubic',
      options: {
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                mirror:false,
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
          labels: ["PP + PSOE + C'S", "ZEC + PSOE + CHA", "ZEC + PSOE + C'S" ],
          datasets: [{
              data: [11.31 , 10.58, 2.5],
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

  var ctx = document.getElementById("chart");

  var myBarChart = new Chart(ctx, {
      type: 'bar',
      duration: 3000,
      easing: 'easeInCubic',
      options: {
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                mirror:false,
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
              data: [47 , 28, 50, 44, 36],
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

  var ctx = document.getElementById("chart");

  var myBarChart = new Chart(ctx, {
      type: 'bar',
      duration: 3000,
      easing: 'easeInCubic',
      options: {
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                mirror:false,
                suggestedMin: 0,
                suggestedMax: 20,
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
            data: [ 8.02 , 10.21, 5.47, 9.12, 10.21],
            backgroundColor: [
                'rgba(0, 128, 184,1)',
                'rgba(154, 22, 34,1)',
                'rgba(227, 6, 19,1)',
                'rgba(240, 122, 54,1)',
                'rgba(239, 176, 39,.2)'
            ]
        }]

      }
  });

}

function encontraChart() {

  var ctx = document.getElementById("chart");

  var myBarChart = new Chart(ctx, {
      type: 'bar',
      duration: 3000,
      easing: 'easeInCubic',
      options: {
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                mirror:false,
                suggestedMin: 0,
                suggestedMax: 30,
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
            data: [ 19.70 , 24.08, 11.31, 8.02, 15.32],
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

  var ctx = document.getElementById("chart");

  var myBarChart = new Chart(ctx, {
      type: 'bar',
      duration: 3000,
      easing: 'easeInCubic',
      options: {
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                mirror:false,
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
            data: [ 35.03 , 28.46, 46.35, 45.98, 36.86],
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
var scroller = scrollama();

var step = document.getElementsByClassName('.step');

// scrollama event handlers
function handleStepEnter(response) {
    // response = { element, direction, index }


    if (response.index === 0) {
        unanimidadChart();
    }

    if (response.index === 1) {
        repeticionChart();
    }

    if (response.index === 2) {
        masMocionesChart();
    }

    if (response.index === 3) {
        abstenidoChart();
    }

    if (response.index === 4) {
        abstenidoChart();
    }

    if (response.index === 5) {
        encontraChart();
    }

    if (response.index === 6) {
        afavorChart();
    }


}

function handleContainerEnter(response) {
    // response = { direction }


}

function handleContainerExit(response) {
    // response = { direction }


}

function init() {
    // 1. force a resize on load to ensure proper dimensions are sent to scrollama

    // 2. setup the scroller passing options
    // this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller.setup({
        container: '#scroll',
        graphic: '.scroll__graphic',
        text: '.scroll__text',
        step: '.scroll__text .step',
        debug: true,
        offset: 0.6,
    })
        .onStepEnter(handleStepEnter)
        .onContainerEnter(handleContainerEnter)
        .onContainerExit(handleContainerExit);

}

// kick things off
init();
