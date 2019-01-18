"use strict";

var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

$(function () {
    d3.json("mapas/distritos-pp-zaragoza.geojson", function (err, data) {
        mapDraw(data);
    });

    function mapDraw(geojson) {
        mapboxgl.accessToken = process.env.MAPBOX;
        var map = new mapboxgl.Map({
            container: "map", // container id
            style: "mapbox://styles/jorgeatgu/cj8c0okok7se32spv3t4rx8bv", //hosted style id
            center: [-0.850431, 41.651729], // starting position
            zoom: 11.5 // starting zoom
        });

        map.addControl(new mapboxgl.Navigation());

        var container = map.getCanvasContainer();
        var svg = d3.select(container).append("svg");
        var distritos = svg.append("g").attr("class", "distritos");

        var transform = d3.geoTransform({ point: projectPoint });
        var path = d3.geoPath().projection(transform);

        var tooltip = d3.select("#map").append("div").attr("class", "tooltip tooltip-pp");

        var featureElement = svg.selectAll("path").data(geojson.features).enter().append("path").attr("class", "distritosPP").on("mouseover", showTooltip).transition().duration(200);

        function update() {
            featureElement.attr("d", path);
        }

        function showTooltip(geoJson) {
            // moveTooltip();
            tooltip.style("display", "block").html('<h4 class="tooltipTitulo">' + geoJson.properties.distrito + '</h4>' + '<div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2015</span><span style="width:' + geoJson.properties.quince_p * 1.65 + '%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.quince_p + '%</span><span class="resultadoVotos">' + geoJson.properties.quince_v + ' votos</span><p/>' + '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2011</span><span style="width:' + geoJson.properties.once_p * 1.65 + '%" class="bgc-pp"></span></span><span class="resultado"><span  class="resultadoVotos"> ' + geoJson.properties.once_p + '%</span><span class="resultadoVotos">' + geoJson.properties.once_v + ' votos</span><p/>' + '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2007</span><span style="width:' + geoJson.properties.siete_p * 1.65 + '%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.siete_p + '%</span> <span class="resultadoVotos">' + geoJson.properties.siete_v + ' votos</span><p/>' + '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2003</span><span style="width:' + geoJson.properties.tres_p * 1.65 + '%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.tres_p + '%</span> <span class="resultadoVotos">' + geoJson.properties.tres_v + ' votos</span><p/>' + '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1999</span><span style="width:' + geoJson.properties.nueve_p * 1.65 + '%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.nueve_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.nueve_v + ' votos</span><p/>' + '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1995</span><span style="width:' + geoJson.properties.cinco_p * 1.65 + '%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.cinco_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.cinco_v + ' votos</span><p/>' + '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1991</span><span style="width:' + geoJson.properties.uno_p * 1.65 + '%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.uno_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.uno_v + ' votos</span><p/>' + '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1987</span><span style="width:' + geoJson.properties.ochosiete_p * 1.65 + '%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.ochosiete_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.ochosiete_v + ' votos</span><p/></div>').transition().duration(200);
        }
        map.scrollZoom.disable();

        update();

        function projectPoint(lon, lat) {
            var point = map.project(new mapboxgl.LngLat(lon, lat));
            this.stream.point(point.x, point.y);
        }
    }
});

function distritoElectoralPP() {

    var porcentaje = "%";

    var margin = { top: 48, right: 24, bottom: 24, left: 24 },
        width = 320 - margin.left - margin.right,
        height = 340 - margin.top - margin.bottom;

    var x = d3.scaleBand().range([0, width], .2);

    var y = d3.scaleLinear().range([height, 0]);

    var xAxis = d3.axisBottom(x).tickFormat(d3.format("d"));

    var yAxis = d3.axisLeft(y).ticks(5).tickFormat(function (d) {
        return d + porcentaje;
    }).tickSize(-width);

    d3.csv("datos/elecciones/elecciones-distrito-pp.csv", function (err, data) {

        var datos = data;
        datos.forEach(function (d) {
            d.fecha = d.fecha;
            d.cantidad = +d.cantidad;
        });

        var nestdistrito = d3.nest().key(function (d) {
            return d.distrito;
        }).entries(data);

        x.domain(data.map(function (d) {
            return d.fecha;
        }));
        y.domain([0, 80]);

        var svg = d3.select(".graficas-pp").selectAll("svg").data(nestdistrito).enter().append("svg").attr("class", "distrito").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.selectAll(".bar").data(function (d) {
            return d.values;
        }).enter().append("rect").attr("class", "bar").attr("x", function (d) {
            return x(d.fecha);
        }).attr("width", x.bandwidth() - 2).attr("y", function (d) {
            return y(d.cantidad);
        }).attr("height", function (d) {
            return height - y(d.cantidad);
        }).attr("fill", "#0080b8");

        svg.selectAll("text").data(function (d) {
            return d.values;
        }).enter().append("text").attr("class", "tooltip-porcentaje").text(function (d) {
            return d.cantidad;
        }).attr("x", function (d) {
            return x(d.fecha);
        }).attr("y", function (d) {
            return y(d.cantidad) - 5;
        });

        svg.append("g").attr("class", "yAxis").call(yAxis);

        svg.append("g").attr("class", "yAxis").call(yAxis);

        svg.append("text").attr("class", "nombre-distrito").attr("y", "-15px").attr("x", "0").text(function (d) {
            return d.key;
        });
    });
}

var csvElements = ['datos/pp/en-su-contra.csv', 'datos/pp/a-su-favor.csv', 'datos/pp/abstencion.csv', 'datos/pp/en-contra.csv', 'datos/pp/a-favor.csv'];

function estadisticasChart(datos) {
    //Estructura similar a la que utilizan en algunos proyectos de pudding.cool
    var margin = { top: 24, right: 24, bottom: 24, left: 24 };
    var width = 0;
    var height = 0;
    var w = 0;
    var h = 0;
    var chart = d3.select('.chart-estadisticas');
    var svg = chart.select('svg');
    var scales = {};
    var dataz = void 0;

    //Escala para los ejes X e Y
    function setupScales() {

        var countX = d3.scaleBand().domain(dataz.map(function (d) {
            return d.nombre;
        }));

        var countY = d3.scaleLinear().domain([0, d3.max(dataz, function (d) {
            return d.valor;
        }) + d3.max(dataz, function (d) {
            return d.valor;
        }) / 4]);

        scales.count = { x: countX, y: countY };
    }

    //Seleccionamos el contenedor donde irán las escalas y en este caso el area donde se pirntara nuestra gráfica
    function setupElements() {

        var g = svg.select('.chart-estadisticas-container');

        g.append('g').attr('class', 'axis axis-x');

        g.append('g').attr('class', 'axis axis-y');

        g.append('g').attr('class', 'area-container-chart-vertical');
    }

    //Actualizando escalas
    function updateScales(width, height) {
        scales.count.x.range([0, width]).padding(0.6);
        scales.count.y.range([height, 0]);
    }

    //Dibujando ejes
    function drawAxes(g) {

        var axisX = d3.axisBottom(scales.count.x);

        g.select(".axis-x").attr("transform", "translate(0," + height + ")").call(axisX);

        var axisY = d3.axisLeft(scales.count.y).tickFormat(d3.format("d")).ticks(5).tickSizeInner(-w);

        g.select(".axis-y").transition().duration(1000).call(axisY);
    }

    function updateChart(dataz) {
        w = chart.node().offsetWidth;
        h = 400;

        width = w - margin.left - margin.right;
        height = h - margin.top - margin.bottom;

        svg.attr('width', w).attr('height', h);

        var translate = "translate(" + margin.left + "," + margin.top + ")";

        var g = svg.select('.chart-estadisticas-container');

        g.attr("transform", translate);

        updateScales(width, height);

        var container = chart.select('.area-container-chart-vertical');

        var layer = container.selectAll('.bar-vertical').data(dataz);

        var newLayer = layer.enter().append('rect').attr('class', 'bar-vertical');

        layer.merge(newLayer).attr("width", scales.count.x.bandwidth()).attr("x", function (d) {
            return scales.count.x(d.nombre);
        }).attr("y", function (d) {
            return scales.count.y(0);
        }).attr("height", 0).transition().ease(d3.easeSin).duration(1200).attr("y", function (d) {
            return scales.count.y(d.valor);
        }).attr("height", function (d) {
            return height - scales.count.y(d.valor);
        });

        drawAxes(g);
    }

    function resize() {
        updateChart(dataz);
    }

    // LOAD THE DATA
    function loadData() {

        d3.csv(datos, function (error, data) {
            if (error) {
                console.log(error);
            } else {
                dataz = data;
                dataz.forEach(function (d) {
                    d.valor = +d.valor;
                });
                setupElements();
                setupScales();
                updateChart(dataz);
            }
        });
    }

    window.addEventListener('resize', resize);

    loadData();
}

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
    var graphicMarginTop = Math.floor(graphicHeight / 2);

    graphic.style.width = graphicWidth;
    graphic.style.height = graphicHeight;

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    // response = { element, direction, index }
    if (response.index === 0) {
        estadisticasChart(csvElements[0]);
    } else if (response.index === 1) {
        estadisticasChart(csvElements[1]);
    } else if (response.index === 2) {
        estadisticasChart(csvElements[2]);
    } else if (response.index === 3) {
        estadisticasChart(csvElements[3]);
    } else if (response.index === 4) {
        estadisticasChart(csvElements[4]);
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
        offset: 0.63
    }).onStepEnter(handleStepEnter);
    // setup resize event
    window.addEventListener('resize', handleResize);
}

function initResponsive() {
    scroller.setup({
        step: '.step' // required - class name of trigger steps
    }).onStepEnter(handleStepEnter);
}

if (width > 769) {
    init();
} else {
    initResponsive();
}

function multipleLines() {

    var margin = { top: 24, right: 24, bottom: 24, left: 24 },
        width = 960 - margin.left - margin.right,
        height = 420 - margin.top - margin.bottom;

    var colors = ["#9a1622", "#e30613", "#0080b8", "#f07a36"];
    var color = d3.scaleOrdinal(colors);

    var parseDate = d3.timeParse("%x");

    var x = d3.scaleTime().range([0, width]);

    var y = d3.scaleLinear().range([height, 0]);

    var area = d3.area().x(function (d) {
        return x(d.fecha);
    }).y0(height).y1(function (d) {
        return y(d.votos);
    }).curve(d3.curveBasis);

    var line = d3.line().x(function (d) {
        return x(d.fecha);
    }).y(function (d) {
        return y(d.votos);
    }).curve(d3.curveBasis);

    d3.csv("datos/pp/legislatura-pp-votos-a-favor.csv", type, function (error, data) {

        var symbols = d3.nest().key(function (d) {
            return d.presentada;
        }).entries(data);

        symbols.forEach(function (s) {
            s.maxPrice = d3.max(s.values, function (d) {
                return d.votos;
            });
        });

        x.domain([d3.min(data, function (d) {
            return d.fecha;
        }), d3.max(data, function (d) {
            return d.fecha;
        })]);

        y.domain([d3.min(data, function (d) {
            return d.votos;
        }), d3.max(data, function (d) {
            return d.votos;
        })]);

        var svg = d3.select(".grafica-favor-legislatura").selectAll("svg").data(symbols).enter().append("svg").attr('viewBox', '0 0 ' + (width + (margin.left + margin.right)) + '  ' + (height + (margin.top + margin.bottom))).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append('g').attr('class', 'axis axis-x');

        svg.append('g').attr('class', 'axis axis-y');

        var axisX = d3.axisBottom(x).tickFormat(d3.timeFormat("%Y")).ticks(5);

        var axisY = d3.axisLeft(y).tickFormat(d3.format("d")).ticks(5).tickSizeInner(-width);

        svg.select(".axis-x").attr("transform", "translate(0," + height + ")").call(axisX);

        svg.select(".axis-y").call(axisY);

        svg.append("path").attr("class", "area").attr('class', function (d) {
            return d.key;
        }).style("opacity", 0.7).attr("d", function (d) {
            return area(d.values);
        });

        svg.append("path").attr("class", "line").attr("d", function (d) {
            return line(d.values);
        }).style("stroke", "#111");

        svg.append("text").attr("class", "multiple-legend").attr("x", 16).attr("y", -10).style("text-anchor", "start").text(function (d) {
            return d.key;
        });
    });

    function type(d) {
        d.votos = +d.votos;
        d.fecha = parseDate(d.fecha);
        return d;
    }
}

multipleLines();
distritoElectoralPP();