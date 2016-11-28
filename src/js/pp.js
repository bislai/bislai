var ctx = document.getElementById("zec");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["PSOE + C'S", "PSOE + CHA", "PSOE + PP", "PSOE + ZEC", "PSOE + CHA + PP", "PSOE + CHA + ZEC", "PSOE + CHA + C'S", "PSOE + C'S + ZEC", "PSOE + C'S + PP", "PSOE + ZEC + PP", "PSOE + ZEC + PP", "PSOE + ZEC + PP + CHA", "PSOE + ZEC + PP + C'S", "PSOE + ZEC + CHA + C'S", "PSOE + PP + CHA + C'S", ],
        datasets: [{
            label: '# of Votes',
            data: [100, 19, 3, 5, 2, 3, 100, 19, 3, 5, 2, 3, 13, 14],
            backgroundColor: [
                '#d7b7a7',
                '#c7d7a7',
                '#bda193',
                '#afbd93',
                '#afd7a7',
                '#a7d7b7',
                '#9abd93',
                '#93bda1',
                '#b7a7d7',
                '#a7c7d7',
                '#a192bd',
                '#93afbd',
                '#99a19f',
                '#597261'
            ],
            borderColor: [
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
                    display: true,
                    text: 'Zaragoza en común'
                }
    }
});
