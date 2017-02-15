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


