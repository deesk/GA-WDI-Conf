console.log('hi')

$.ajax({
  url: "/report"
}).data(function(data){
  console.log(data);
});
