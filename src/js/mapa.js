$(function() {
    d3.json("mapas/distrito-electoral-zaragoza.geojson", function(err, data) {
        mapDraw(data);
    });

    function mapDraw(geojson) {
        mapboxgl.accessToken =
            "pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";
        var map = new mapboxgl.Map({
            container: "map", // container id
            style: "mapbox://styles/jorgeatgu/cj9x6vj1k6eux2sl4jh9c2jpn", //hosted style id
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
            .attr("class", "tooltip");

        var featureElement = svg
            .selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("class", "distritos")
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
                        '<div class="container-tooltip-leyenda"><p class="tooltipLeyenda"><span>Censo:</span> <span class="resultado"> ' +
                        geoJson.properties.total +
                        '</span><p/>' +
                        '<p class="tooltipLeyenda"><span>Votantes:</span> <span class="resultado">' +
                        geoJson.properties.votantes +
                        '%</span><p/>' +
                        '<p class="tooltipLeyenda"><span>Abstención:</span> <span class="resultado">' +
                        geoJson.properties.abstencion +
                        '%</span><p/></div>' +
                        '<div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado"><span style="width:' + geoJson.properties.pp * 2.5 + '%" class="bgc-pp">PP</span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.pp + '%</span><span class="resultadoVotos">' + geoJson.properties.ppVotos + '</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado"><span style="width:' + geoJson.properties.zec * 2.5 + '%" class="bgc-zec">ZEC</span></span><span class="resultado"><span  class="resultadoVotos"> ' + geoJson.properties.zec + '%</span><span class="resultadoVotos">' + geoJson.properties.zecVotos + '</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado"><span style="width:' + geoJson.properties.psoe * 2.5 + '%" class="bgc-psoe">PSOE</span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.psoe + '%</span> <span class="resultadoVotos">' + geoJson.properties.psoeVotos + '</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado"><span style="width:' + geoJson.properties.cs * 2.5 + '%" class="bgc-cs">CS</span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.cs + '%</span> <span class="resultadoVotos">' + geoJson.properties.csVotos + '</span><p/>' +
                        '<p class="tooltipPartido"><span class="resultado"><span style="width:' + geoJson.properties.cha * 2.5 + '%" class="bgc-cha">CHA</span></span><span class="resultado"><span class="resultadoVotos"> ' + geoJson.properties.cha + '%</span> <span class="resultadoVotos"> ' + geoJson.properties.chaVotos + '</span><p/></div>'
                )
                .transition()
                .duration(200);
        }

        // map.on("viewreset", update);
        // map.on("movestart", function() {
        //     svg.classed("hidden", true);
        // });
        // map.on("rotate", function() {
        //     svg.classed("hidden", true);
        // });
        // map.on("moveend", function() {
        //     update();
        //     svg.classed("hidden", false);
        // });

        map.scrollZoom.disable();

        update();

        function projectPoint(lon, lat) {
            var point = map.project(new mapboxgl.LngLat(lon, lat));
            this.stream.point(point.x, point.y);
        }
    }
});
