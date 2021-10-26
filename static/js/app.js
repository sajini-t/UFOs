// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data){
    // code to clear existing data in table
    tbody.html("");

    // Next, loop through each object in the data
    data.forEach((dataRow) => {
        // create a row in the table for each object/element in the data.js file
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            // set up the action of appending data into a table data tag (<td>
            let cell = row.append("td");
            // add the values to the cell in the current row
            cell.text(val)
            }
        );
    });
}