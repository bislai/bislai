var ctx = document.getElementById("zec");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["PP", "ZEC", "PSOE", "C'S" ],
        datasets: [{
            label: '# of Votes',
            data: [20, 30, 20, 26],
            backgroundColor: [
                'rgba(0, 128, 184,.5)',
                'rgba(154, 22, 34,.5)',
                'rgba(227, 6, 19,.5)',
                'rgba(240, 122, 54,.5)'
            ],
            borderColor: [
                '#0080B8',
                '#9A1622',
                '#E30613',
                '#f07a36'
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

