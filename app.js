function calculate(){
  let principal = $( "#principal" ).val();
  let interest = $( "#interest" ).val();
  let time = $( "#time" ).val();
  let total;
  
  interest = Math.pow(((interest / 100) + 1), time);
  total = interest * principal;
  interest = total - principal; 

  var full = "<strong>Starting Amount: </strong>$" + principal +
      "<br><strong>Interest Earned: </strong>$" + interest.toFixed(2) +
      "<br><strong>Total Now: </strong>$" + total.toFixed(2);
  $( "#results" ).html(full);
}

$( document ).ready(function(){
  console.log("ready!");
  $( "#fields" ).append("<button onclick='calculate()'>Calculate Interest</button>");
});
