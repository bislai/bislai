$(document).ready(function() {
    //Obtenemos la posición donde se ubica el mapa. Le sumamos la posición del scroll.
    var positionMap = document
        .getElementById("map-wrap")
        .getBoundingClientRect();
    var scroll = $(window).scrollTop();
    var positionMapTop = 100;
    var header = $("header");
    console.log(positionMapTop);

    $(window).scroll(function() {
        if (scroll > positionMapTop) {
            $(header).addClass("display-n");
        } else {
            $(header).removeClass("display-n");
        }
    });
});

$(function() {
    d3.json("mapas/distrito-electoral-zaragoza.geojson", function(err, data) {
        mapDraw(data);
    });

    function mapDraw(geojson) {
        mapboxgl.accessToken =
            "pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";
        var map = new mapboxgl.Map({
            container: "map", // container id
            style: "mapbox://styles/jorgeatgu/cj832ibiua5bs2rnpv6sdaihb", //hosted style id
            center: [-0.89668, 41.657112], // starting position
            zoom: 11 // starting zoom
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
                        "</h4>" +
                        '<div class="container-tooltip-leyenda"><p class="tooltipLeyenda"><span>Censo:</span> <span class="resultado"> ' +
                        geoJson.properties.total +
                        "</span><p/>" +
                        '<p class="tooltipLeyenda"><span>Votantes:</span> <span class="resultado">' +
                        geoJson.properties.votantes +
                        "%</span><p/>" +
                        '<p class="tooltipLeyenda"><span>Abstención:</span> <span class="resultado">' +
                        geoJson.properties.abstencion +
                        "%</span><p/></div>" +
                        '<div class="container-tooltip-partido"><p class="tooltipPartido"><span class="bgc-pp">PP</span><span class="resultado">' +
                        geoJson.properties.pp +
                        "%</span><p/>" +
                        '<p class="tooltipPartido"> <span class="bgc-zec">ZEC</span><span class="resultado">' +
                        geoJson.properties.zec +
                        "%</span><p/>" +
                        '<p class="tooltipPartido"><span class="bgc-psoe">PSOE</span><span class="resultado">' +
                        geoJson.properties.psoe +
                        "%</span><p/>" +
                        '<p class="tooltipPartido"><span class="bgc-cs">C&#39s</span><span class="resultado">' +
                        geoJson.properties.cs +
                        "%</span><p/>" +
                        '<p class="tooltipPartido"><span class="bgc-cha">CHA</span><span class="resultado">' +
                        geoJson.properties.cha +
                        "%</span><p/></div>"
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
