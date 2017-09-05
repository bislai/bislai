    //Map dimensions (in pixels)
    var width = 461,
        height = 600;

    //Map projection
    var projection = d3.geo.mercator()
        .scale(50832.460579212995)
        .center([-0.9273105000000003,41.69198426570548]) //projection center
        .translate([width/2,height/2]) //translate to center the map in view

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
        .attr("class","features");

    //Create choropleth scale
    var color = d3.scale.quantize()
        .domain([0,1])
        .range(d3.range(3).map(function(i) { return "q" + i + "-3"; }));

    //Create a tooltip, hidden at the start
    var tooltip = d3.select("body").append("div").attr("class","tooltip");

    d3.json("mapas/distrito-electoral-zaragoza.geojson",function(error,geodata) {
      if (error) return console.log(error); //unknown error, check the console

      //Create a path for each map feature in the data
      features.selectAll("path")
        .data(geodata.features)
        .enter()
        .append("path")
        .attr("d",path)
        .on("mouseover",showTooltip)
        .on("mousemove",moveTooltip)
        .on("mouseout",hideTooltip)
        .on("click",clicked);

    });

    // Add optional onClick events for features here
    // d.properties contains the attributes (e.g. d.properties.name, d.properties.population)
    function clicked(d,i) {

    }


    //Position of the tooltip relative to the cursor
    var tooltipOffset = {x: 5, y: -25};

    //Create a tooltip, hidden at the start
    function showTooltip(d) {
      moveTooltip();

      tooltip.style("display","block")
          .text(d.properties.distrito);
    }

    //Move the tooltip to track the mouse
    function moveTooltip() {
      tooltip.style("top",(d3.event.pageY+tooltipOffset.y)+"px")
          .style("left",(d3.event.pageX+tooltipOffset.x)+"px");
    }

    //Create a tooltip, hidden at the start
    function hideTooltip() {
      tooltip.style("display","none");
    }
