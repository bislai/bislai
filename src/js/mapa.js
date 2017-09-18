    //Map dimensions (in pixels)
    var width = 461,
        height = 600;

    //Map projection
    var projection = d3.geo.mercator()
        .scale(50832.460579212995)
        .center([-0.9273105000000003, 41.69198426570548]) //projection center
        .translate([width / 2, height / 2]) //translate to center the map in view

    //Generate paths based on projection
    var path = d3.geo.path()
        .projection(projection);

    //Create an SVG
    var svg = d3.select('.mapa')
        .append('svg')
        .attr('class', 'mapa-elecciones')
        .attr("width", width)
        .attr("height", height);

    //Group for the map features
    var features = svg.append("g")
        .attr("class", "features");

    //Create choropleth scale
    var color = d3.scale.quantize()
        .domain([57.25, 70.6])
        .range(d3.range(3).map(function(i) { return "q" + i + "-3"; }));

    //Create zoom/pan listener
    //Change [1,Infinity] to adjust the min/max zoom scale
    var zoom = d3.behavior.zoom()
        .scaleExtent([1, Infinity])
        .on("zoom", zoomed);

    svg.call(zoom);

    //Create a tooltip, hidden at the start
    var tooltip = d3.select(".mapa")
        .append("div")
        .attr("class", "tooltip");

    d3.json("mapas/distrito-electoral-zaragoza.geojson", function(error, geodata) {
        if (error) return console.log(error); //unknown error, check the console

        //Create a path for each map feature in the data
        features.selectAll("path")
            .data(geodata.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function(d) { return (typeof color(d.properties.votantes) == "string" ? color(d.properties.votantes) : ""); })
            .on("mouseover", showTooltip).on("mouseout", hideTooltip)
            .on("click", clicked);

    });

    // Add optional onClick events for features here
    // d.properties contains the attributes (e.g. d.properties.name, d.properties.population)
    function clicked(d, i) {

    }


    //Update map on zoom/pan
    function zoomed() {
        features.attr("transform", "translate(" + zoom.translate() + ")scale(" + zoom.scale() + ")")
            .selectAll("path").style("stroke-width", 1 / zoom.scale() + "px");
    }


    //Position of the tooltip relative to the cursor
    var tooltipOffset = { x: 5, y: -25 };

    //Create a tooltip, hidden at the start
    function showTooltip(d) {
        // moveTooltip();
        tooltip.style("display", "block")
            .html('<h4 class="tooltipTitulo">' + d.properties.distrito + '</h4>' +
                '<p class="tooltipPartido">' + '<img src="../img/logo-pp.png" class="tooltip-image">' + d.properties.pp + '%<p/>' +
                '<p class="tooltipPartido">' + '<img src="../img/logo-zec.png" class="tooltip-image">' + d.properties.zec + '%<p/>' +
                '<p class="tooltipPartido">' + '<img src="../img/logo-psoe.png" class="tooltip-image">' + d.properties.psoe + '%<p/>' +
                '<p class="tooltipPartido">' + '<img src="../img/logo-cs.png" class="tooltip-image">' + d.properties.cs + '%<p/>' +
                '<p class="tooltipPartido">' + '<img src="../img/logo-chunta.jpg" class="tooltip-image">' + d.properties.cha + '%<p/>'+
                '<p class="tooltipLeyenda">Población: ' + d.properties.total + '<p/>' +
                '<p class="tooltipLeyenda">Votantes: ' + d.properties.votantes + '%<p/>' +
                '<p class="tooltipLeyenda">Abstención: ' + d.properties.abstencion + '%<p/>');
    }

    // //Move the tooltip to track the mouse
    // function moveTooltip() {
    //     tooltip.style("top", (d3.event.pageY + tooltipOffset.y) + "px")
    //         .style("left", (d3.event.pageX + tooltipOffset.x) + "px");
    // }

    //Create a tooltip, hidden at the start
    // function hideTooltip() {
    //     tooltip.style("display", "none");
    // }
