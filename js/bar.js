function data_gen_1(input_year, data) {
    var csv_value = 'country,value'
    var output = []
    var dict = {}
    const clearDict = dict => {
        Object.keys(dict).map(key => delete dict[key]);
    };
    clearDict(dict)
    //console.log(data)
    var sorted = {}
    for (var i = 0; i < data.length; i++) {
        row = data[i]
        //console.log(row)
        if (row.variable == "inflow") {
            if (row.year == input_year) {
                //console.log(row)
                if (row.gender == "Total") {
                    if (row.value > 1000) {
                        //console.log(row, input_year)
                        temp = {}
                        temp["country"] = row.country
                        temp["value"] = row.value
                        output.push(temp)
                        dict[row.country] = row.value
                        csv_value = csv_value + "\n" + row.country + "," + row.value
                    }
                }
            }
        }
    }
    sorted = sort_dict(dict)
    //console.log(csv_value)
    console.log(output)
    //console.log("dict", dict)
    return output
}
//function hi(baaarSVG_name, data){

var data1 = [
    { group: "A", value: 4 },
    { group: "B", value: 16 },
    { group: "C", value: 8 }
];

var data2 = [
    { group: "A", value: 7 },
    { group: "B", value: 1 },
    { group: "C", value: 20 },
    { group: "D", value: 10 }
];
baaarSVG = d3.select("#vis_1_right")
// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 896 - margin.left ,
    height = 496 - margin.top ;

// append the baaarSVG object to the body of the page



// Initialize the X axis
var x = d3.scaleBand()
    .range([100, (width+100)])
    .padding(0.2);
var xAxis = baaarSVG.append("g")
    .attr("transform", "translate(0," + height + ")")
    .attr("class", "myYaxis")


// Initialize the Y axis
var y = d3.scaleLinear()
    .range([height, 50]);
var yAxis = baaarSVG.append("g")
    .attr("class", "myYaxis")


// A function that create / update the plot for a given variable:
function update(input_year) {
    d3.csv("data/inflows_and_outflows.csv", (row, i) => {
        return {
            variable: row.Variable,
            year: +row.Year,
            value: +row.Value,
            gender: row.Gender,
            country: row.Country,
        };
    }).then(rows => {
        baaarSVG.append("text")
		.attr("class", "x label")
		.attr("text-anchor", "end")
		.attr("x", width +35)
		.attr("y", height - 6)
		.text("Country");

	baaarSVG.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("y", 60)
		.attr("x", -30)
		.attr("dy", ".75em")
		.attr("transform", "rotate(-90)")
		.text("Number of People");   
        //console.log(rows)
        data = rows;
        //console.log(rows)
        chartData = data_gen_1(input_year, rows)
        x.domain(chartData.map(function (d) { return d.country; }))
        xAxis.call(d3.axisBottom(x))

        // Update the Y axis
        y.domain([0, d3.max(chartData, function (d) { return d.value })]);
        yAxis.transition().duration(1000).call(d3.axisLeft(y));

        // Create the u variable
        var u = baaarSVG.selectAll("rect")
            .attr("class", "rect")
            .data(chartData)

        u
            .enter()
            .append("rect") // Add a new rect for each new elements
            .merge(u) // get the already existing elements as well
            .transition() // and apply changes to all of them
            .duration(1000)
            .attr("x", function (d) { return x(d.country); })
            .attr("y", function (d) { return y(d.value); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.value); })
            .attr("fill", "#69b3a2")

        // If less group in the new dataset, I delete the ones not in use anymore
        u
            .exit()
            .remove()
    })
        .catch(error => {
            console.log(error);
        });

}
