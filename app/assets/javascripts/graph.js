console.log('Graph Page')


$.ajax({
  url: "/report"
}).done(function(data){
  console.log(data);

  var q3Data = data.q3.map(function(i){
    return i * 20;
  });

//Question 3: simple bar chart
console.log(q3Data);
  // appending svg div
  var svg = d3.select(".q3Graph")
    .append('svg')
    .attr("height","100%")
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
    .attr("fill",function(d,i){
      if(i == 0){
        return 'tomato';
      }else {
        return 'blue';
      };
    });

});
