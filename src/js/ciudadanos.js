var configDataLabels = {
    color: 'black',
    font: {
        size: "16",
        weight: 'bold'
    }
}

var votaciones = [
    "1979","1983","1987","1991","1995","1999","2003","2007","2011","2015"
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
                data: [0,0,0,0,0,0,0,0,0,4],
                backgroundColor: [
                    '#fff'
                ],
                borderColor: [
                    "#ccc"
                ],
                borderWidth: [1]
            }]
        }
    });

}

historico();
