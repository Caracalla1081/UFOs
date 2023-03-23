// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filteredUFO = {}


// 3. Use this function to update the filters. 
function updateFilters() {


    // 4a. Save the element that was changed as a variable.
        let ufoELEMENT1 = d3.select(this)
    // 4b. Save the value that was changed as a variable.
        let ufoVALUE1 = ufoELEMENT1.property("value")
        console.log(ufoVALUE1);
    // 4c. Save the id of the filter that was changed as a variable.
        let ufoID1 = ufoELEMENT1.attr("id")
        console.log(ufoID1);
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
        if (ufoVALUE1 !== "") {
          filteredUFO[ufoID1] = ufoVALUE1;
        }
        else {
          delete filteredUFO[ufoID1];
        }
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
      let filteredUFOdata = tableData.filter((obj) => {;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
      for(ufoID1 in filteredUFO) {
          if(obj[ufoID1] !== filteredUFO[ufoID1]) {
            return false;
          }
      }
      return true;
    });
  
    // 10. Finally, rebuild the table using the filtered data
        buildTable(filteredUFOdata);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
