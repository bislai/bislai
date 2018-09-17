var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

var csvElements = [ 'datos/unanimidad.csv', 'datos/tripartitos.csv', 'datos/presentada.csv', 'datos/abstencion.csv', 'datos/en-contra.csv', 'datos/a-favor.csv', 'datos/soledad.csv']


function estadisticasChart(datos) {
        //Estructura similar a la que utilizan en algunos proyectos de pudding.cool
        const margin = { top: 24, right: 24, bottom: 24, left: 24 };
        let width = 0;
        let height = 0;
        let w = 0;
        let h = 0;
        const chart = d3.select('.chart-estadisticas');
        const svg = chart.select('svg');
        const scales = {};
        let dataz;

        //Escala para los ejes X e Y
        function setupScales() {

            const countX = d3.scaleBand()
                .domain(dataz.map(function(d) { return d.nombre; }));

            const countY = d3.scaleLinear()
                    .domain(
                        [0,
                        d3.max(dataz, d => d.valor)]
                );

            scales.count = { x: countX,  y: countY };

        }

        //Seleccionamos el contenedor donde irán las escalas y en este caso el area donde se pirntara nuestra gráfica
        function setupElements() {

            const g = svg.select('.chart-estadisticas-container');

            g.append('g').attr('class', 'axis axis-x');

            g.append('g').attr('class', 'axis axis-y');

            g.append('g').attr('class', 'area-container-chart-vertical');

        }

        //Actualizando escalas
        function updateScales(width, height){
            scales.count.x.range([0, width]).padding(0.8);
            scales.count.y.range([height, 0]);
        }

        //Dibujando ejes
        function drawAxes(g) {

            const axisX = d3.axisBottom(scales.count.x)

            g.select(".axis-x")
                .attr("transform", "translate(0," + height + ")")
                .call(axisX)

            const axisY = d3.axisLeft(scales.count.y)
                .tickFormat(d3.format("d"))
                .ticks(5)
                .tickSizeInner(-w)

            g.select(".axis-y")
                .call(axisY)

        }

        function updateChart(dataz) {
            w = chart.node().offsetWidth;
            h = 600;

            width = w - margin.left - margin.right;
            height = h - margin.top - margin.bottom;

            svg
                .attr('width', w)
                .attr('height', h);

            const translate = "translate(" + margin.left + "," + margin.top + ")";

            const g = svg.select('.chart-estadisticas-container')

            g.attr("transform", translate)

            updateScales(width, height)

            const container = chart.select('.area-container-chart-vertical')

            const layer = container.selectAll('.bar-vertical')
                   .data(dataz)

            const newLayer = layer.enter()
                    .append('rect')
                    .attr('class', 'bar-vertical')

            layer.merge(newLayer)
                .attr("width", 45)
                .attr("x", d => scales.count.x(d.nombre))
                .attr("y", d => scales.count.y(0))
                .attr("height", 0)
                .transition()
                .ease(d3.easeSin)
                .duration(1200)
                .attr("y", d => scales.count.y(d.valor))
                .attr("height", d => height - scales.count.y(d.valor));

            drawAxes(g)

        }

        function resize() {
            updateChart(dataz)
        }

        // LOAD THE DATA
        function loadData() {

            d3.csv(datos, function(error, data) {
                    if (error) {
                          console.log(error);
                    } else {
                          dataz = data
                          dataz.forEach( d => {
                              d.valor = +d.valor;
                          });
                          setupElements()
                          setupScales()
                          updateChart(dataz)
                    }

            });
        }

        window.addEventListener('resize', resize)

        loadData()


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
    if (response.index === 0)  {
        d3.selectAll('rect').remove();
        estadisticasChart(csvElements[0])
    } else if (response.index === 1) {
        estadisticasChart(csvElements[1])
    } else if (response.index === 2) {
        estadisticasChart(csvElements[2])
    } else if (response.index === 3) {
        estadisticasChart(csvElements[3])
    } else if (response.index === 4) {
        estadisticasChart(csvElements[4])
    } else if (response.index === 5) {
        estadisticasChart(csvElements[5])
    } else if (response.index === 6) {
        estadisticasChart(csvElements[6])
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
