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
}

var votaciones = [
    "1979", "1983", "1987", "1991", "1995", "1999", "2003", "2007", "2011", "2015"
]

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

                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#111'
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
                backgroundColor: [
                    '#fff'
                ],
                borderColor: [
                    "#ccc"
                ],
                borderWidth: [1],
                datalabels: {
                    align: 'end',
                    anchor: 'end'
                }
            }]
        }
    });

}

historico();
