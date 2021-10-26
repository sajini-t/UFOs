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


// The handleClick func will be run each time the filter button is clicked on the website.
// If no date has been entered as a filter, then all of the data will be returned instead.
function handleClick() {
    // we're telling D3 to look for the #datetime id in the HTML tags
    // By chaining .property("value"); to the d3.select function, 
    // we're telling D3 not only to look for where our date values are
    // stored on the webpage, but to actually grab that information and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");
    // giving the user the whole raw data for their search
    let filteredData = tableData;

    // Show only the rows where the date is equal to the date filter we created above
    // The triple equal signs test for equality, meaning that the date in the table has to match our filter exactly
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}


// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);


//-------------------------------------------------------------------------------------------------------    
/* if you use function keyword, then its an anonymous function
vegetables.forEach(function(element) {
    console.log(element);
});

if you don't use function keyword but the fat arrow, it becomes a fat arrow function
vegetables.forEach((element) => {
    console.log(element);
});


*/