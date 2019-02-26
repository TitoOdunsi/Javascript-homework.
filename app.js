// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function tableBuilder(data) {
    tbod.html("");
    data.forEach((dataRow) => {
        var row = tbody.append(td);
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
             cell.text(val);
        }
      );
    });
}

function clicker() {
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    tableBuilder(filteredData);
}

d3.selectAll("#filter-btn").on("click", clicker);
buildTable(tableDta);