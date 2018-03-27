$(function() {
    d3.json("mapas/distritos-cha-zaragoza.geojson", function(err, data) {
        mapDraw(data);
    });

    function mapDraw(geojson) {
        mapboxgl.accessToken =
            "pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";
        var map = new mapboxgl.Map({
            container: "map", // container id
            style: "mapbox://styles/jorgeatgu/cjf4fr0sj019m2qqiaz1mynna", //hosted style id
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
            .attr("class", "tooltip tooltip-cha");

        var featureElement = svg
            .selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("class", "distritosCHA")
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
                        '<div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2015</span><span style="width:' + geoJson.properties.quince_p * 1.65 + '%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.quince_p + '%</span><span class="resultadoVotos">' + geoJson.properties.quince_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2011</span><span style="width:' + geoJson.properties.once_p * 1.65 + '%" class="bgc-cha"></span></span><span class="resultado"><span  class="resultadoVotos"> ' + geoJson.properties.once_p + '%</span><span class="resultadoVotos">' + geoJson.properties.once_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2007</span><span style="width:' + geoJson.properties.siete_p * 1.65 + '%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.siete_p + '%</span> <span class="resultadoVotos">' + geoJson.properties.siete_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2003</span><span style="width:' + geoJson.properties.tres_p * 1.65 + '%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.tres_p + '%</span> <span class="resultadoVotos">' + geoJson.properties.tres_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1999</span><span style="width:' + geoJson.properties.nueve_p * 1.65 + '%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.nueve_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.nueve_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1995</span><span style="width:' + geoJson.properties.cinco_p * 1.65 + '%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.cinco_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.cinco_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1991</span><span style="width:' + geoJson.properties.uno_p * 1.65 + '%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.uno_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.uno_v + ' votos</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1987</span><span style="width:' + geoJson.properties.ochosiete_p * 1.65 + '%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.ochosiete_p + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.ochosiete_v + ' votos</span><p/></div>'
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

function graficasCha() {

    var margin = {top: 8, right: 10, bottom: 2, left: 10},
        width = 960 - margin.left - margin.right,
        height = 69 - margin.top - margin.bottom;

    var parseDate = d3.time.format("%b %Y").parse;

    var x = d3.time.scale()
        .range([0, width]);

    d3.csv("elecciones-distrito-cha.csv", type, function(error, data) {
      var symbols = d3.nest()
          .key(function(d) { return d.distrito; })
          .entries(data);

      x.domain([
        d3.min(symbols, function(distrito) { return distrito.values[0].date; }),
        d3.max(symbols, function(distrito) { return distrito.values[distrito.values.length - 1].date; })
      ]);

      var svg = d3.select(".graficas-cha").selectAll("svg")
          .data(symbols)
        .enter().append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
          .each(function(distrito) {
            distrito.y = d3.scale.linear()
                .domain([0, d3.max(distrito.values, function(d) { return d.cantidad; })])
                .range([height, 0]);
          });

      svg.append("path")
          .attr("class", "area")
          .attr("d", function(distrito) {
            return d3.svg.area()
                .x(function(d) { return x(d.fecha); })
                .y1(function(d) { return distrito.y(d.cantidad); })
                .y0(height)
                (distrito.values);
          });

      svg.append("path")
          .attr("class", "line")
          .attr("d", function(distrito) {
            return d3.svg.line()
                .x(function(d) { return x(d.fecha); })
                .y(function(d) { return distrito.y(d.cantidad); })
                (distrito.values);
          });

      svg.append("text")
          .attr("x", width - 6)
          .attr("y", height - 6)
          .style("text-anchor", "end")
          .text(function(distrito) { return distrito.key; });
    });

    function type(d) {
      d.cantidad = +d.cantidad;
      d.fecha = parseDate(d.date);
      return d;
    }
}


graficasCha()

