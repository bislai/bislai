function unanimidadChart() {

  var ctx = document.getElementById("myChart");

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

// create a scene
new ScrollMagic.Scene({
        duration: 100,    // the scene should last for a scroll distance of 100px
        offset: 90        // start this scene after scrolling for 50px
    })
    .setPin("#unanimidad") // pins the element for the the scene's duration
    .addTo(controller) // assign the scene to the controller
    .on("enter", unanimidadChart);

