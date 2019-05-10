var svgHeight=.9*$(window).height();
var svgWidth=.8*$(window).width();

// var svgWidth = 1300;
// var svgHeight = 750;

var margin = {
  top: .05*svgHeight,
  right: .2*svgWidth,
  bottom: .2*svgHeight,
  left: .05*svgWidth,
  padding: .1*svgHeight
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// chartGroup.append("text")
//   .attr("x", (width / 2))             
//   .attr("y", 0 - (margin.top / 2))
//   .attr("text-anchor", "middle")  
//   .style("font-size", "2vh") 
//   .style("font-family","Karla-Regular")  
//   .text("Female Education and Child Mortality Rate by Country");

// Initial Params
var chosenXAxis = "Primary";

// function used for updating x-scale var upon click on axis label
function xScale(educationMortality, chosenXAxis) {
  // create scales

  var xLinearScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0,width]);

  return xLinearScale;

}

// function used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

// function used for updating circles group with a transition to
// new circles
function renderCircles(circlesGroup, newXScale, chosenXAxis) {
  
  circlesGroup.transition()
    .duration(1000)
    .attr("cx", d => newXScale(d[chosenXAxis]));

  return circlesGroup;
}

// function used for updating circles group with new tooltip
function updateToolTip(chosenXAxis, circlesGroup) {

  if (chosenXAxis === "Primary") {
    var label = "% of Females Out of Primary School:";
  }
  else if (chosenXAxis === "Both") {
    var label = "% of Females Out of Primary and Secondary School:";
  }
  else {
    var label = "% of Females Out of Secondary School:";
  }

  var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.Country}<br>${label} ${d[chosenXAxis]}<br>Mortality Rate: ${d.Mortality}`);
    });

  circlesGroup.call(toolTip);

  circlesGroup.on("mouseover", function(data) {
    toolTip.show(data);
  });
    // onmouseout event
    circlesGroup.on("mouseout", function(data) {
      toolTip.hide(data);
    });

  return circlesGroup;
}

// Retrieve data from the CSV file and execute everything below
d3.csv("alleducationandmortality1.csv", function(err, educationMortality) {
  if (err) throw err;

  // parse data
  educationMortality.forEach(function(data) {
    data.Primary = +data.Primary;
    data.Mortality = +data.Mortality;
    data.Both = +data.Both;
    data.Secondary = +data.Secondary;
  });

  // xLinearScale function above csv import
  var xLinearScale = xScale(educationMortality, chosenXAxis);

  // Create y scale function
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(educationMortality, d => d.Mortality)])
    .range([height, 0]);

  // Create initial axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // append x axis
  var xAxis = chartGroup.append("g")
    .classed("x-axis", true)
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // append y axis
  chartGroup.append("g")
    .call(leftAxis);

  // append initial circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(educationMortality)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d.Mortality))
    .attr("r", 10)
    .style("fill", d => d.circle_color)
    .attr("opacity", ".5");

  circlesGroup = updateToolTip("Primary", circlesGroup);

  // Create group for  2 x- axis labels
  var labelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);

  var PrimaryLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .attr("value", "Primary") // value to grab for event listener
    .classed("graph-active", true)
    .style("font-family","Karla-Regular")
    .text("Females Out of Primary School (percent)");

  var secondaryLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 40)
    .attr("value", "Secondary") // value to grab for event listener
    .classed("graph-inactive", true)
    .style("font-family","Karla-Regular")
    .text("Females Out of Secondary School (percent)");

  var bothLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 60)
    .attr("value", "Both") // value to grab for event listener
    .classed("graph-inactive", true)
    .style("font-family","Karla-Regular")
    .text("Females Out of Primary & Secondary School (percent)");

  // append y axis
  chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .classed("axis-text", true)
    .text("Mortality Rate (deaths per 1000 live births)");


  // x axis labels event listener
  labelsGroup.selectAll("text")
    .on("click", function() {
      // get value of selection
      var value = d3.select(this).attr("value");
      if (value !== chosenXAxis) {

        // replaces chosenXAxis with value
        chosenXAxis = value;

        // console.log(chosenXAxis)

        // functions here found above csv import
        // updates x scale for new data
        xLinearScale = xScale(educationMortality, chosenXAxis);

        // updates x axis with transition
        xAxis = renderAxes(xLinearScale, xAxis);

        // updates circles with new x values
        circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis);

        // updates tooltips with new info
        circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

        // changes classes to change bold text
        if (chosenXAxis === "Both") {
          secondaryLabel
            .classed("graph-active", false)
            .classed("graph-inactive", true);
          PrimaryLabel
            .classed("graph-active", false)
            .classed("graph-inactive", true);
          bothLabel
            .classed("graph-active", true)
            .classed("graph-inactive", false);
        }
        else if (chosenXAxis === "Secondary") {
          secondaryLabel
            .classed("graph-active", true)
            .classed("graph-inactive", false);
          PrimaryLabel
            .classed("graph-active", false)
            .classed("graph-inactive", true);
            bothLabel
            .classed("graph-active", false)
            .classed("graph-inactive", true);
        }
        else {
          secondaryLabel
            .classed("graph-active", false)
            .classed("graph-inactive", true);
          PrimaryLabel
            .classed("graph-active", true)
            .classed("graph-inactive", false);
            bothLabel
            .classed("graph-active", false)
            .classed("graph-inactive", true);
        }
      }
    });
});

var rectangleWorld = svg.append("rect")
 .attr("x", .8*svgWidth)
 .attr("y", .14*svgHeight)
 .attr("width", 35)
 .attr("height", 13)
 .attr("fill", "#529999")
 .attr("opacity", .5);

var rectangleSubAfrica = svg.append("rect")
 .attr("x", .8*svgWidth)
 .attr("y", .09*svgHeight)
 .attr("width", 35)
 .attr("height", 13)
 .attr("fill", "firebrick")
 .attr("opacity", .5);


svg.append("text")
   .attr("x", .83*svgWidth)
   .attr("y", .15*svgHeight)
   .attr("fill", "#529999")
   .attr("font-family", "Karla-Regular")
   .text("Rest of the World");

svg.append("text")
     .attr("x", .83*svgWidth)
     .attr("y", .1*svgHeight)
     .attr("fill", "firebrick")
     .attr("font-family", "Karla-Regular")
     .text("Sub-Saharan Africa");