console.log('Graph Page')

var q3Data;

$.ajax({
  url: "/report"
}).done(function(data){
  console.log(data);
  q3Data = data.q3;
});


//simple bar chart
//data

var q3Data = [50 , 100];

// appending svg div
var svg = d3.select("body")
  .append('svg')
  // .attr("height","100%")
  .attr("width","100%");

// setting attribute to rectangle
svg.selectAll("rect")
  .data(q3Data)
  .enter().append("rect")
    .attr("height", function(d){return d;})
    .attr("width","50")
    .attr("x",function(d,i){return 60 * i;})
    // browers draw things downwords(positioning)
    .attr("y",function(d,i){return 150-(d);})
    .attr("fill","tomato");
