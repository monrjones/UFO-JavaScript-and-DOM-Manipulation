// from data.js
var tableData = data;

//get reference to the table body
var tbody = d3.select("tbody");
//consle log ufo data
console.log(data);

//loop from the data
data.forEach(function(ufoReport){
  console.log(ufoReport);
});

//append one table row for each reported object
data.forEach(function(ufoReport){
  console.log(ufoReport);
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]){
    console.log(key, value);
    var cell =tbody.append("td");
  });
});

//update cells
data.forEach(function(ufoReport){
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]){
    console.log(key, value);
    var cell =tbody.append("td");
    cell.text(value);
  });
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filteredData = data.filter(ufoSight => ufoSight.datetime === inputValue);

  console.log(filteredData);

  var empty= d3.select("tbody");
  empty.html("");

  var filterUFO =d3.select("tbody");

  filteredData.forEach(function(ufoUpdate){
    var row =filterUFO.append("tr");

    Object.entries(ufoUpdate).forEach(function([key, value]){
      var cell = filterUFO.append("td");
      cell.text(value);
    });
  });

});
