var width = Math.max(960, innerWidth),
   height = Math.max(500, innerHeight);

var i = 0;

function particle(svg, xy) {
  var m = xy;

  svg.insert("circle", "rect")
      .attr("cx", m[0])
      .attr("cy", m[1])
      .attr("r", 1e-6)
      .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("stroke-opacity", 1)
    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("r", 100)
      .style("stroke-opacity", 1e-6)
      .remove();

  //  d3.event.preventDefault();
}

function startParticleAnimation() {
  var svg = d3.select("#pollution").append("svg")
    .attr("width", width)
    .attr("height", height);

  var particleSvg = function (xy) {
    xy = xy ? xy : d3.mouse(this);
    particle(svg, xy);
  };

  svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .on("ontouchstart" in document ? "touchmove" : "mousemove", particleSvg);
}
