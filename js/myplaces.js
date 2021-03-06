var width = 960,
    height = 500;

var projection = d3.geo.mercator()
    .center([0, 10 ])
    .scale(100)
    .rotate([-180,0]);

var svg = d3.select("#location").append("svg")
    .attr("width", width)
    .attr("height", height);

var path = d3.geo.path()
    .projection(projection);

var g = svg.append("g");

// load and display the World
d3.json("js/world-110m2.json", function(error, topology) {
	
// load and display the cities
d3.csv("js/cities.csv", function(error, data) {
    g.selectAll("circle")
       .data(data)
       .enter()
     .append("a")
				  .attr("xlink:href", function(d) {
					  return "https://www.google.com/search?q="+d.city;}
				  )
     .append("circle")
       .attr("cx", function(d) {
               return projection([d.lon, d.lat])[0];
       })
       .attr("cy", function(d) {
               return projection([d.lon, d.lat])[1];
       })
       .attr("r", 2)
       .style("fill", "green")
	.style("stroke", "white")
       .style("stroke-width", 0.5)
	; //fill the dot with yellow color
       
    g.selectAll("text")
       .data(data)
       .enter()
     .append("text") // append text
       .attr("x", function(d) {
               return projection([d.lon, d.lat])[0];
       })
       .attr("y", function(d) {
               return projection([d.lon, d.lat])[1];
       })
       //.attr("dy", -5) // set y position of bottom of text
      .style("fill", "yellow") // fill the text with the colour orange
      .style("font-size","7px")
      .attr("text-anchor", "middle") // set anchor y justification
      .text(function(d) {return d.city;}); // define the text to display

});

g.selectAll("path")
      .data(topojson.object(topology, topology.objects.countries)
          .geometries)
    .enter()
      .append("path")
      .attr("d", path)
});

// zoom and pan
var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

svg.call(zoom)
