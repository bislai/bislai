// var width = 960,
//     height = 500,
//     centered;

// // Define color scale
// var color = d3.scale.linear()
//   .domain([1, 20])
//   .clamp(true)
//   .range(['#fff', '#409A99']);

// var projection = d3.geo.mercator()
//   .scale(1500)
//   // Center the Map in Colombia
//   .center([-74, 4.5])
//   .translate([width / 2, height / 2]);

// var path = d3.geo.path()
//   .projection(projection);

// // Set svg width & height
// var svg = d3.select('svg')
//   .attr('width', width)
//   .attr('height', height);

// // Add background
// svg.append('rect')
//   .attr('class', 'background')
//   .attr('width', width)
//   .attr('height', height)
//   .on('click', clicked);

// var g = svg.append('g');

// var effectLayer = g.append('g')
//   .classed('effect-layer', true);

// var mapLayer = g.append('g')
//   .classed('map-layer', true);

// var dummyText = g.append('text')
//   .classed('dummy-text', true)
//   .attr('x', 10)
//   .attr('y', 30)
//   .style('opacity', 0);

// var bigText = g.append('text')
//   .classed('big-text', true)
//   .attr('x', 20)
//   .attr('y', 45);

// // Load map data
// d3.json('mapas/distrito-electoral-zaragoza.geojson', function(error, mapData) {
//   var features = mapData.features;

//   // Update color scale domain based on data
//   color.domain([0, d3.max(features, nameLength)]);

//   // Draw each province as a path
//   mapLayer.selectAll('path')
//       .data(features)
//     .enter().append('path')
//       .attr('d', path)
//       .attr('vector-effect', 'non-scaling-stroke')
//       .style('fill', fillFn)
//       .on('mouseover', mouseover)
//       .on('mouseout', mouseout)
//       .on('click', clicked);
// });

// // Get province name
// function nameFn(d){
//   return d && d.properties ? d.properties.NOMBRE_DPT : null;
// }

// // Get province name length
// function nameLength(d){
//   var n = nameFn(d);
//   return n ? n.length : 0;
// }

// // Get province color
// function fillFn(d){
//   return color(nameLength(d));
// }

// // When clicked, zoom in
// function clicked(d) {
//   var x, y, k;

//   // Compute centroid of the selected path
//   if (d && centered !== d) {
//     var centroid = path.centroid(d);
//     x = centroid[0];
//     y = centroid[1];
//     k = 4;
//     centered = d;
//   } else {
//     x = width / 2;
//     y = height / 2;
//     k = 1;
//     centered = null;
//   }

//   // Highlight the clicked province
//   mapLayer.selectAll('path')
//     .style('fill', function(d){return centered && d===centered ? '#D5708B' : fillFn(d);});

//   // Zoom
//   g.transition()
//     .duration(750)
//     .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
// }

// function mouseover(d){
//   // Highlight hovered province
//   d3.select(this).style('fill', 'orange');

//   // Draw effects
//   textArt(nameFn(d));
// }

// function mouseout(d){
//   // Reset province color
//   mapLayer.selectAll('path')
//     .style('fill', function(d){return centered && d===centered ? '#D5708B' : fillFn(d);});

//   // Remove effect text
//   effectLayer.selectAll('text').transition()
//     .style('opacity', 0)
//     .remove();

//   // Clear province name
//   bigText.text('');
// }
