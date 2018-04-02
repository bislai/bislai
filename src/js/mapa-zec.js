$(function() {
    d3.json("mapas/distritos-zec-zaragoza.geojson", function(err, data) {
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
            .attr("class", "tooltip tooltip-zec");

        var featureElement = svg
            .selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("class", "distritosZEC")
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
                        '<div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2015</span><span style="width:' + geoJson.properties.quince_p * 1.65 + '%" class="bgc-zec"></span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.quince_p + '%</span><span class="resultadoVotos">' + geoJson.properties.quince_v + ' votos</span><p/>'
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
