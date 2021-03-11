var tableData = data; // from data.js
var button = d3.select("#filter-btn"); //select HTML element
var form = d3.select("#form"); //select HTML element

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
function runEnter() {
    d3.event.preventDefault(); // Prevent the page from refreshing
    var inputElement = d3.select("#datetime"); // Select the input element and get the raw HTML node
    var inputValue = inputElement.property("value"); // Get the value property of the input element
    //filter the original array to only include dates which match the date value that the user inputs
    var filteredData = [];
    filteredData = tableData.filter(UFO => UFO.datetime === inputValue);

    console.log(inputValue);
    console.log(filteredData);

    var table = d3.select("tbody"); // Select the table element
    //clear the table before appending new results to it
    table.html("");
    //add data to the table
    filteredData.forEach((i) => {
        var row = table.append("tr");
        Object.entries(i).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  };