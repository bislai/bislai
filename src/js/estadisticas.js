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
                beginAtZero:true,
                mirror:false,
                suggestedMin: 0,
                suggestedMax: 100,
              }
            }]
        }
      },
      data: {
          labels: ["unanimidad", "disconformidad"],
          datasets: [{
              label: 'Unanimidad',
              data: [37.59 , 62.41],
              backgroundColor: [
                  'rgba(32, 159, 105, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(32, 159, 105,1)',
                  'rgba(255,99,132,1)'
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
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
                beginAtZero:true,
                mirror:false,
                suggestedMin: 0,
                suggestedMax: 100,
              }
            }]
        }
      },
      data: {
          labels: ["PP + PSOE + C'S", "disconformidad"],
          datasets: [{
              label: 'Unanimidad',
              data: [11.31 , 30],
              backgroundColor: [
                  'rgba(32, 159, 105, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(32, 159, 105,1)',
                  'rgba(255,99,132,1)'
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
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
                beginAtZero:true,
                mirror:false,
                suggestedMin: 0,
                suggestedMax: 100,
              }
            }]
        }
      },
      data: {
          labels: ["unanimidad", "disconformidad"],
          datasets: [{
              label: 'Unanimidad',
              data: [50 , 30],
              backgroundColor: [
                  'rgba(32, 159, 105, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(32, 159, 105,1)',
                  'rgba(255,99,132,1)'
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      }
  });

}

function perdidoChart() {

  var ctx = document.getElementById("perdido-mociones-chart");

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
        }
      },
      data: {
          labels: ["unanimidad", "disconformidad"],
          datasets: [{
              label: 'Unanimidad',
              data: [50 , 30],
              backgroundColor: [
                  'rgba(32, 159, 105, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(32, 159, 105,1)',
                  'rgba(255,99,132,1)'
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      }
  });

}

function ganadoChart() {

  var ctx = document.getElementById("ganado-mociones-chart");

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
        }
      },
      data: {
          labels: ["unanimidad", "disconformidad"],
          datasets: [{
              label: 'Unanimidad',
              data: [50 , 30],
              backgroundColor: [
                  'rgba(32, 159, 105, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(32, 159, 105,1)',
                  'rgba(255,99,132,1)'
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
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
                beginAtZero:true,
                mirror:false,
                suggestedMin: 0,
                suggestedMax: 100,
              }
            }]
        }
      },
      data: {
          labels: ["unanimidad", "disconformidad"],
          datasets: [{
              label: 'Unanimidad',
              data: [50 , 30],
              backgroundColor: [
                  'rgba(32, 159, 105, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(32, 159, 105,1)',
                  'rgba(255,99,132,1)'
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
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
                beginAtZero:true,
                mirror:false,
                suggestedMin: 0,
                suggestedMax: 100,
              }
            }]
        }
      },
      data: {
          labels: ["unanimidad", "disconformidad"],
          datasets: [{
              label: 'Unanimidad',
              data: [50 , 30],
              backgroundColor: [
                  'rgba(32, 159, 105, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(32, 159, 105,1)',
                  'rgba(255,99,132,1)'
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
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
                beginAtZero:true,
                mirror:false,
                suggestedMin: 0,
                suggestedMax: 100,
              }
            }]
        }
      },
      data: {
          labels: ["unanimidad", "disconformidad"],
          datasets: [{
              label: 'Unanimidad',
              data: [50 , 30],
              backgroundColor: [
                  'rgba(32, 159, 105, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(32, 159, 105,1)',
                  'rgba(255,99,132,1)'
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      }
  });

}


var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
        duration: 200,
        offset: 300
    })
    .setPin("#unanimidad")
    .addTo(controller)
    .on("enter", unanimidadChart);

var repeticion = document.getElementById('repeticion');
var repeDimension = repeticion.getBoundingClientRect();
var repeTop = repeDimension.top - 50;

new ScrollMagic.Scene({
        duration: 200,
        offset: repeTop
    })
    .setPin("#repeticion")
    .addTo(controller)
    .on("enter", repeticionChart);

var masMociones = document.getElementById('mas-mociones');
var masMocionesDimension = masMociones.getBoundingClientRect();
var masMocionesTop = masMocionesDimension.top - 50;

new ScrollMagic.Scene({
        duration: 200,
        offset: masMocionesTop
    })
    .setPin("#mas-mociones")
    .addTo(controller)
    .on("enter", masMocionesChart);


var perdidoMociones = document.getElementById('perdido-mociones');
var perdidoMocionesDimension = perdidoMociones.getBoundingClientRect();
var perdidoMocionesTop = perdidoMocionesDimension.top - 50;

new ScrollMagic.Scene({
        duration: 200,
        offset: perdidoMocionesTop
    })
    .setPin("#perdido-mociones")
    .addTo(controller)
    .on("enter", perdidoChart);


var ganadoMociones = document.getElementById('ganado-mociones');
var ganadoMocionesDimension = ganadoMociones.getBoundingClientRect();
var ganadoMocionesTop = ganadoMocionesDimension.top - 50;

new ScrollMagic.Scene({
        duration: 200,
        offset: ganadoMocionesTop
    })
    .setPin("#ganado-mociones")
    .addTo(controller)
    .on("enter", ganadoChart);


var abstenidoMociones = document.getElementById('abstenido-mociones');
var abstenidoMocionesDimension = abstenidoMociones.getBoundingClientRect();
var abstenidoMocionesTop = abstenidoMocionesDimension.top - 50;

new ScrollMagic.Scene({
        duration: 200,
        offset: abstenidoMocionesTop
    })
    .setPin("#abstenido-mociones")
    .addTo(controller)
    .on("enter", abstenidoChart);


var encontraMociones = document.getElementById('en-contra-mociones');
var encontraMocionesDimension = encontraMociones.getBoundingClientRect();
var encontraMocionesTop = encontraMocionesDimension.top - 50;

new ScrollMagic.Scene({
        duration: 200,
        offset: encontraMocionesTop
    })
    .setPin("#en-contra-mociones")
    .addTo(controller)
    .on("enter", encontraChart);


var afavorMociones = document.getElementById('a-favor-mociones');
var afavorMocionesDimension = afavorMociones.getBoundingClientRect();
var afavorMocionesTop = afavorMocionesDimension.top - 50;

new ScrollMagic.Scene({
        duration: 200,
        offset: afavorMocionesTop
    })
    .setPin("#a-favor-mociones")
    .addTo(controller)
    .on("enter", afavorChart);


