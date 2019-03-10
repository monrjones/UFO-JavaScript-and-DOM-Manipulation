// from data.js
var tableData = data;

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

// when clicked call the handlesearchbutton
$searchBtn.addEventListener("search", handleSearchButtonClick);

// renderTable renders the tableData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
  
      // Get get the current sighting object and its fields
      var sighting = tableData[i];
      var fields = Object.keys(sighting);
  
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
  
        // For every field in the address object, create a new cell and set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = sighting[field];
      }
    }
  }

  function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterDate = $dateInput.value.trim();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
  
    if (filterDate.length != 0){
      tableData = data.filter(function(sighting) {
        var sightingDate = sighting.datetime;
         return sightingDate === filterDate;
           });
    }
  
    else {
      tableData = data
    }
  
    if (filterCity.length !=0){
      tableData = tableData.filter(function(sighting) {
        var sightingCity = sighting.city;
        return sightingCity === filterCity;
           });
    }
  
    else {
      tableData = data
    }
  
    if (filterState.length != 0){
      tableData = tableData.filter(function(sighting) {
        var sightingState = sighting.state;
         return sightingState === filterState;
           });
  
    }
  
    else {
      tableData = tableData
    }
  
    if (filterCountry.length != 0){
      tableData = tableData.filter(function(sighting) {
        var sightingCountry = sighting.country;
         return sightingCountry === filterCountry;
           });
  
    }
  
    else {
      tableData = tableData
    }  
    renderTable();
  }

  renderTable();