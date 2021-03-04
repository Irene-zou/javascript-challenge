// from data.js
var tableData = data;

// YOUR CODE HERE!

tbody = d3.select("tbody")
console.log("hello")

function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

  function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)


//Select the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// Filter data
function clickSelect(){
    d3.event.preventDefault();
    //Print the value
    console.log(dateInputText.property("value"));
    //New table showing only filtered data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    displayData(new_table);
}


dateInputText.on("change", clickSelect)
