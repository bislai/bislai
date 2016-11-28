var ctx = document.getElementById("zec");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["ZEC + C'S", "ZEC + CHA", "ZEC + PSOE", "ZEC + PP", "ZEC + CHA + PSOE", "ZEC + CHA + PP", "ZEC + CHA + C'S", "ZEC + C'S + PP", "ZEC + C'S + PSOE", "ZEC + PP + PSOE", "ZEC + PP + PSOE", "ZEC + PP + PSOE + CHA", "ZEC + PP + PSOE + C'S", "ZEC + PP + CHA + C'S", "ZEC + PSOE + CHA + C'S", ],
        datasets: [{
            label: '# of Votes',
            data: [100, 19, 3, 5, 2, 3, 100, 19, 3, 5, 2, 3, 13, 14],
            backgroundColor: [
                '43200e',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
        }
    }
});
