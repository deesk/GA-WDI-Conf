console.log('Graph Page')

$.ajax({
  url: "/report"
}).done(function(data){
  console.log(data);

  $('.total-respos').text(data.q1_sum);

  //Question 1: pie chart
  var q1Data = data.q1;

    var q1Data = [
      { age: "Under 20",         count: q1Data[0] },
      { age: "Between 21 to 30", count: q1Data[1] },
      { age: "Between 31 to 40", count: q1Data[2] },
      { age: "41 Above",         count: q1Data[3] }
    ]
console.log(q1Data);

  var svg = d3.select(".q1graph").select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var color = d3.scaleOrdinal(["#7b6888", "#e74c3c", "#f39c12", "#d0743c", "#ff8c00"]);

  var pie = d3.pie()
      .sort(null)
      .value(function(d) { return d.count; });

  var path = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

  var label = d3.arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

  var arc = g.selectAll(".arc")
    .data(pie(q1Data))
    .enter().append("g")
      .attr("class", "arc");

  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return color(d.data.age); });

  arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.count; })


// Question 2:
var q2Data = data.q2.map(function(i){
  return i * 8;
});
var height = 320;
var margin = {left:50,right:10,top:10, bottom:0}
var q2Opt = ["3 years and under","Between 4 and 7 years","8 years and above"]
//color collection
var cat20 = d3.schemeCategory20;
//vertical axis in pixels
var y = d3.scaleLinear()
        .domain([0,20])
        .range([240,80]);
// axis y generator
var yAxis = d3.axisLeft(y);

var x = d3.scaleOrdinal()
        .domain(q2Opt)
        .range([70,175]);
var xAxis = d3.axisBottom(x);

var svg = d3.select(".q2graph")
  .append('svg')
  .attr("height",height)
  .attr("width","100%");

var chartGroup = svg.append("g")
  .attr("transform", "translate("+margin.left+","+margin.top+")")

// setting attribute to rectangle
chartGroup.selectAll("rect")
.data(q2Data)
.enter().append("rect")
  .attr("height", function(d){return d;})
  .attr("width","50")
  .attr("x",function(d,i){return 40 + (100 * i);}) //50+
  // browers draw bar downwords(positioning)
  .attr("y",function(d,i){return 241-(d);})
  .attr("fill",function(d,i){ return cat20[i];});

chartGroup.append("g")
  .attr("class","axis y")
  .call(yAxis);

chartGroup.append("g")
  .attr("class","axix q2-label hidden")
  .attr("transform", "translate(0,240)")//240
  .call(xAxis);





  //Question 3: simple bar chart
  //increment by 20times for each data of question no 3
  var q3Data = data.q3.map(function(i){
    return i * 8;
  });

  var height = 320;
  var margin = {left:50,right:10,top:10, bottom:0}
  var q3Opt = ["Yes","No"]
  //color collection
  var cat20 = d3.schemeCategory20;
  //vertical axis in pixels
  var y = d3.scaleLinear()
          .domain([0,20])
          .range([240,80]);
  // axis y generator
  var yAxis = d3.axisLeft(y);

  var x = d3.scaleOrdinal()
          .domain(q3Opt)
          .range([70,175]);
  var xAxis = d3.axisBottom(x);

  var svg = d3.select(".q3Graph")
    .append('svg')
    .attr("height",height)
    .attr("width","100%");

  var chartGroup = svg.append("g")
    .attr("transform", "translate("+margin.left+","+margin.top+")")

  // setting attribute to rectangle
  chartGroup.selectAll("rect")
  .data(q3Data)
  .enter().append("rect")
    .attr("height", function(d){return d;})
    .attr("width","50")
    .attr("x",function(d,i){return 50 + (100 * i);}) //50+
    // browers draw things downwords(positioning)
    .attr("y",function(d,i){return 241-(d);})
    .attr("fill",function(d,i){ return cat20[i];});

  chartGroup.append("g")
    .attr("class","axis y")
    .call(yAxis);

  chartGroup.append("g")
    .attr("class","axix x hidden")
    .attr("transform", "translate(0,240)")//240
    .call(xAxis);




});
