var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if (width > 767) {

    $(function() {
        d3.json("mapas/distritos-psoe-zaragoza.geojson", function(err, data) {
            mapDraw(data);
        });

        function mapDraw(geojson) {
            mapboxgl.accessToken =
                "pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";
            var map = new mapboxgl.Map({
                container: "map", // container id
                style: "mapbox://styles/jorgeatgu/cjf1lzmig08ry2sqqyvml8ycl", //hosted style id
                center: [-0.850431, 41.651729], // starting position
                zoom: 11.5 // starting zoom
            });

            map.addControl(new mapboxgl.Navigation());

            var container = map.getCanvasContainer();
            var svg = d3.select(container).append("svg");
            var distritos = svg.append("g").attr("class", "distritos");

            var transform = d3.geo.transform({ point: projectPoint });
            var path = d3.geo.path().projection(transform);

            var tooltip = d3
                .select("#map")
                .append("div")
                .attr("class", "tooltip tooltip-psoe");

            var featureElement = svg
                .selectAll("path")
                .data(geojson.features)
                .enter()
                .append("path")
                .attr("class", "distritosPSOE")
                .on("mouseover", showTooltip)
                .transition()
                .duration(200);

            function update() {
                featureElement.attr("d", path);
            }

            function showTooltip(geoJson) {
                // moveTooltip();
                tooltip
                    .style("display", "block")
                    .html(
                        '<h4 class="tooltipTitulo">' +
                        geoJson.properties.distrito +
                        '</h4>' +
                        '<div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2015</span><span style="width:' + geoJson.properties.quince_p * 1.65 + '%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.quince_p + '%</span><span class="resultadoVotos">' + geoJson.properties.quince_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2011</span><span style="width:' + geoJson.properties.once_p * 1.65 + '%" class="bgc-psoe"></span></span><span class="resultado"><span  class="resultadoVotos"> ' + geoJson.properties.once_p + '%</span><span class="resultadoVotos">' + geoJson.properties.once_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2007</span><span style="width:' + geoJson.properties.siete_p * 1.65 + '%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.siete_p + '%</span> <span class="resultadoVotos">' + geoJson.properties.siete_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2003</span><span style="width:' + geoJson.properties.tres_p * 1.65 + '%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.tres_p + '%</span> <span class="resultadoVotos">' + geoJson.properties.tres_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1999</span><span style="width:' + geoJson.properties.nueve_p * 1.65 + '%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.nueve_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.nueve_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1995</span><span style="width:' + geoJson.properties.cinco_p * 1.65 + '%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.cinco_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.cinco_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1991</span><span style="width:' + geoJson.properties.uno_p * 1.65 + '%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.uno_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.uno_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1987</span><span style="width:' + geoJson.properties.ochosiete_p * 1.65 + '%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.ochosiete_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.ochosiete_v + ' votos</span><p/></div>'
                    )
                    .transition()
                    .duration(200);
            }
            map.scrollZoom.disable();

            update();

            function projectPoint(lon, lat) {
                var point = map.project(new mapboxgl.LngLat(lon, lat));
                this.stream.point(point.x, point.y);
            }
        }
    });

}

function graficasPSOE() {

    var porcentaje = "%";

    var margin = {top: 48, right: 48, bottom: 48, left: 48},
        width = 450 - margin.left - margin.right,
        height = 390 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .2);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .tickFormat(d3.format("d"))
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .ticks(5)
        .tickFormat(function(d) { return d + porcentaje; })
        .tickSize(-width)
        .orient("left")

    d3.csv("datos/elecciones/elecciones-distrito-psoe.csv", function(err, data) {

        datos = data;
        datos.forEach(function(d) {
            d.fecha = d.fecha;
            d.cantidad = +d.cantidad;
        });

        var nestdistrito = d3.nest()
            .key(function(d) { return d.distrito; })
            .entries(data);

        x.domain(data.map(function(d) { return d.fecha; }));
        y.domain([0, 60]);

        var svg = d3.select(".graficas-psoe").selectAll("svg")
            .data(nestdistrito)
            .enter()
            .append("svg")
            .attr("class", "distrito")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.selectAll(".bar")
            .data(function(d) {return d.values;})
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.fecha); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.cantidad); })
            .attr("height", function(d) { return height - y(d.cantidad); })
            .attr("fill", "#52788b");

        svg.selectAll("text")
            .data(function(d) {return d.values;})
            .enter()
            .append("text")
            .attr("class", "tooltip-porcentaje")
            .text(function(d) { return d.cantidad})
            .attr("x", function(d) { return x(d.fecha); })
            .attr("y", function(d) { return y(d.cantidad) - 5; });


        svg.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "yAxis")
            .call(yAxis)
            .append("text")
            .attr("class", "nombre-distrito")
            .attr("y", "-3%")
            .attr("x", "8px")
            .text(function(d) { return d.key });
    });

}


graficasPSOE();
