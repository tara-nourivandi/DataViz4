
pie_data = {}


function titanic_vis_1(svg_name, data, variable, year, value, gender) {

	var in2000 = in2001 = in2002 = in2003 = in2004 = in2005 = in2006 = in2007 = in2008 = in2009 = in2010 = in2011 =
		in2012 = in2013 = in2014 = in2015 = in2016 = in2017 = in2018 = in2019 = 0;

	var out2000 = out2001 = out2002 = out2003 = out2004 = out2005 = out2006 = out2007 = out2008 = out2009 = out2010 = out2011 =
		out2012 = out2013 = out2014 = out2015 = out2016 = out2017 = out2018 = out2019 = 0;

	var new_data_in_2000 = []; var new_data_in_2001 = []; var new_data_in_2002 = []; var new_data_in_2003 = []; var new_data_in_2004 = []; var new_data_in_2005 = []; var new_data_in_2006 = []; var new_data_in_2007 = [];
	var new_data_in_2008 = []; var new_data_in_2009 = []; var new_data_in_2010 = []; var new_data_in_2011 = []; var new_data_in_2012 = []; var new_data_in_2013 = []; var new_data_in_2014 = [];
	var new_data_in_2015 = []; var new_data_in_2016 = []; var new_data_in_2017 = []; var new_data_in_2018 = []; var new_data_in_2019 = [];[];

	var new_data_out_2000 = []; var new_data_out_2001 = []; var new_data_out_2002 = []; var new_data_out_2003 = []; var new_data_out_2004 = []; var new_data_out_2005 = []; var new_data_out_2006 = []; var new_data_out_2007 = [];
	var new_data_out_2008 = []; var new_data_out_2009 = []; var new_data_out_2010 = []; var new_data_out_2011 = []; var new_data_out_2012 = []; var new_data_out_2013 = []; var new_data_out_2014 = [];
	var new_data_out_2015 = []; var new_data_out_2016 = []; var new_data_out_2017 = []; var new_data_out_2018 = []; var new_data_out_2019 = [];




	for (var i = 0; i < data.length; i++) {
		if (data[i].variable == "inflow") {
			switch (data[i].year) {
				case 2000:
					if (data[i].gender == "Total") {
						in2000 += data[i].value;
						new_data_in_2000.push(data[i])
					}
					break;
				case 2001:
					if (data[i].gender == "Total") {
						in2001 += data[i].value;
						new_data_in_2001.push(data[i])
					}
					break;

				case 2002:
					if (data[i].gender == "Total") {
						in2002 += data[i].value;
						new_data_in_2002.push(data[i])
					}
					break;

				case 2003:
					if (data[i].gender == "Total") {
						in2003 += data[i].value;
						new_data_in_2003.push(data[i])
					}
					break;

				case 2004:
					if (data[i].gender == "Total") {
						in2004 += data[i].value;
						new_data_in_2004.push(data[i])
					}
					break;

				case 2005:
					if (data[i].gender == "Total") {
						in2005 += data[i].value;
						new_data_in_2005.push(data[i])
					}
					break;

				case 2006:
					if (data[i].gender == "Total") {
						in2006 += data[i].value;
						new_data_in_2006.push(data[i])
					}
					break;

				case 2007:
					if (data[i].gender == "Total") {
						in2007 += data[i].value;
						new_data_in_2007.push(data[i])
					}
					break;

				case 2008:
					if (data[i].gender == "Total") {
						in2008 += data[i].value;
						new_data_in_2008.push(data[i])
					}
					break;

				case 2009:
					if (data[i].gender == "Total") {
						in2009 += data[i].value;
						new_data_in_2009.push(data[i])
					}
					break;

				case 2010:
					if (data[i].gender == "Total") {
						in2010 += data[i].value;
						new_data_in_2010.push(data[i])
					}
					break;

				case 2011:
					if (data[i].gender == "Total") {
						in2011 += data[i].value;
						new_data_in_2011.push(data[i])
					}
					break;

				case 2012:
					if (data[i].gender == "Total") {
						in2012 += data[i].value;
						new_data_in_2012.push(data[i])
					}
					break;

				case 2013:
					if (data[i].gender == "Total") {
						in2013 += data[i].value;
						new_data_in_2013.push(data[i])
					}
					break;

				case 2014:
					if (data[i].gender == "Total") {
						in2014 += data[i].value;
						new_data_in_2014.push(data[i])
					}
					break;

				case 2015:
					if (data[i].gender == "Total") {
						in2015 += data[i].value;
						new_data_in_2015.push(data[i])
					}
					break;

				case 2016:
					if (data[i].gender == "Total") {
						in2016 += data[i].value;
						new_data_in_2016.push(data[i])
					}
					break;

				case 2017:
					if (data[i].gender == "Total") {
						in2017 += data[i].value;
						new_data_in_2017.push(data[i])
					}
					break;

				case 2018:
					if (data[i].gender == "Total") {
						in2018 += data[i].value;
						new_data_in_2018.push(data[i])
					}
					break;

				case 2019:
					if (data[i].gender == "Total") {
						in2019 += data[i].value;
						new_data_in_2019.push(data[i])
					}
					break;

				default:

			}

		}


		if (data[i].variable == "outflow") {
			switch (data[i].year) {
				case 2000:
					if (data[i].gender == "Total") {
						out2000 += data[i].value;
						new_data_out_2000.push(data[i])
					}
					break;
				case 2001:
					if (data[i].gender == "Total") {
						out2001 += data[i].value;
						new_data_out_2001.push(data[i])
					}
					break;

				case 2002:
					if (data[i].gender == "Total") {
						out2002 += data[i].value;
						new_data_out_2002.push(data[i])
					}
					break;

				case 2003:
					if (data[i].gender == "Total") {
						out2003 += data[i].value;
						new_data_out_2003.push(data[i])
					}
					break;

				case 2004:
					if (data[i].gender == "Total") {
						out2004 += data[i].value;
						new_data_out_2004.push(data[i])
					}
					break;

				case 2005:
					if (data[i].gender == "Total") {
						out2005 += data[i].value;
						new_data_out_2005.push(data[i])
					}
					break;

				case 2006:
					if (data[i].gender == "Total") {
						out2006 += data[i].value;
						new_data_out_2006.push(data[i])
					}
					break;

				case 2007:
					if (data[i].gender == "Total") {
						out2007 += data[i].value;
						new_data_out_2007.push(data[i])
					}
					break;

				case 2008:
					if (data[i].gender == "Total") {
						out2008 += data[i].value;
						new_data_out_2008.push(data[i])
					}
					break;

				case 2009:
					if (data[i].gender == "Total") {
						out2009 += data[i].value;
						new_data_out_2009.push(data[i])
					}
					break;

				case 2010:
					if (data[i].gender == "Total") {
						out2010 += data[i].value;
						new_data_out_2010.push(data[i])
					}
					break;

				case 2011:
					if (data[i].gender == "Total") {
						out2011 += data[i].value;
						new_data_out_2011.push(data[i])
					}
					break;

				case 2012:
					if (data[i].gender == "Total") {
						out2012 += data[i].value;
						new_data_out_2012.push(data[i])
					}
					break;

				case 2013:
					if (data[i].gender == "Total") {
						out2013 += data[i].value;
						new_data_out_2013.push(data[i])
					}
					break;

				case 2014:
					if (data[i].gender == "Total") {
						out2014 += data[i].value;
						new_data_out_2014.push(data[i])
					}
					break;

				case 2015:
					if (data[i].gender == "Total") {
						out2015 += data[i].value;
						new_data_out_2015.push(data[i])
					}
					break;

				case 2016:
					if (data[i].gender == "Total") {
						out2016 += data[i].value;
						new_data_out_2016.push(data[i])
					}
					break;

				case 2017:
					if (data[i].gender == "Total") {
						out2017 += data[i].value;
						new_data_out_2017.push(data[i])
					}
					break;

				case 2018:
					if (data[i].gender == "Total") {
						out2018 += data[i].value;
						new_data_out_2018.push(data[i])
					}
					break;

				case 2019:
					if (data[i].gender == "Total") {
						out2019 += data[i].value;
						new_data_out_2019.push(data[i])
					}
					break;

				default:
					break;
			}

		}

		//console.log(data[i].year);
	}
	/* 	console.log(in2010)
		console.log(in2011)
		console.log(in2012)
		console.log(in2013)
		console.log(in2014)
		console.log(in2015)
		console.log(in2016)
		console.log(in2017)
		console.log(in2018)
		console.log(in2019) */
	/* console.log(out2000)
	console.log(out2001)
	console.log(out2002)
	console.log(out2003)
	console.log(out2004)
	console.log(out2005)
	console.log(out2006)
	console.log(out2007)
	console.log(out2008)
	console.log(out2009)
	console.log(out2010)
	console.log(out2011)
	console.log(out2012)
	console.log(out2013)
	console.log(out2014)
	console.log(out2015)
	console.log(out2016)
	console.log(out2017)
	console.log(out2018)
	console.log(out2019) */


}


function viz_1(svg_name_left, data, year, plot_year, inflow, outflow) {
	var margin = { top: 10, right: 30, bottom: 30, left: 60 },
		width = $(svg_name_left).width() - margin.left - margin.right,
		height = $(svg_name_left).height() - margin.top - margin.bottom;
	console.log($(svg_name_left).width())
	console.log($(svg_name_left).height())
	// append the svg object to the body of the page
	var svg_left = d3.select(svg_name_left)
	var x = d3.scaleTime()
		.domain(d3.extent(data, function (d) { return d.year; }))
		.range([margin.left, width]);

	svg_left.append("g")
		.attr("transform", "translate(0," + (height + 10) + ")")
		.call(d3.axisBottom(x));

	// Add Y axis
	var y = d3.scaleLinear()
		.domain([0, 100000])
		.range([height, 0]);
	svg_left.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		.call(d3.axisLeft(y));

	// Add the line
	svg_left.append("path")
		.datum(data)
		.attr("fill", "none")
		.attr("stroke", "violet")
		.attr("stroke-width", 5)
		.attr("d", d3.line()
			.x(function (d) { return x(d.year) })
			.y(function (d) { return y(d.inflow) })
		)
	svg_left.append("path")
		.datum(data)
		.attr("fill", "none")
		.attr("stroke", "steelblue")
		.attr("stroke-width", 5)
		.attr("d", d3.line()
			.x(function (d) { return x(d.year) })
			.y(function (d) { return y(d.outflow) })
		)
	enter1 = svg_left.selectAll("empty")
		.data(data)
		.enter()
		.append("circle")
		.attr("cx", function (d) { return x(d.year); })
		.attr("cy", function (d) { return y(d.inflow); })
		.attr("class", function (d, i) { return "pt" + i; })
		.attr("r", 8)
		.attr("fill", "#FC1DD3")
		.attr("stroke", "grey")
		.attr("fill-opacity", 0.70)
		.on("mouseover", function (d, i) {
			//console.log(i)
			d3.selectAll("circle.pt" + i)
				.attr("r", 11)
		})
		.on("mouseout", function (d, i) {
			d3.selectAll("circle.pt" + i)
				.attr("r", 8)
		})
	enter1.append("svg:title")
		.text(function (d) { return "The total inflow of Iranians for foreign\n countries in year " + d.year_for_plot + " was " + d.inflow + " people.	"; });


	svg_left.append("rect").attr("x", 100).attr("y", 30).attr("height", 15).attr("width", 15).style("fill", "#FC1DD3").style("opacity", 0.7)
	svg_left.append("text").attr("x", 120).attr("y", 40).text(" Inflow of Iranian to other conutries").attr("alignment-baseline", "middle")

	svg_left.append("rect").attr("x", 100).attr("y", 60).attr("height", 15).attr("width", 15).style("fill", "#1D63FC").style("opacity", 0.7)
	svg_left.append("text").attr("x", 120).attr("y", 70).text(" Outflow of Iran from other countries").attr("alignment-baseline", "middle")


	svg_left.append("text")
		.attr("class", "x label")
		.attr("text-anchor", "end")
		.attr("x", width + 15)
		.attr("y", height - 6)
		.text("Year");

	svg_left.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("y", 70)
		.attr("x", -20)
		.attr("dy", ".75em")
		.attr("transform", "rotate(-90)")
		.text("Number of People");

	// plot z vs x in 2nd plot
	enter2 = svg_left.selectAll("empty")
		.data(data)
		.enter()
		.append("circle")
		.attr("cx", function (d) { return x(d.year); })
		.attr("cy", function (d) { return y(d.outflow); })
		.attr("class", function (d, i) { return "pt" + i; })
		.attr("r", 8)
		.attr("fill", "#1D63FC")
		.attr("stroke", "grey")
		.attr("fill-opacity", 0.70)
		.on("mouseover", function (d, i) {
			//console.log(i)
			d3.selectAll("circle.pt" + i)
				.attr("r", 11)
		})
		.on("mouseout", function (d, i) {
			d3.selectAll("circle.pt" + i)
				.attr("r", 8)
		})
	enter2.append("svg:title")
		.text(function (d) { return "The total outflow of foreign citizens\n for Iran in year " + d.year_for_plot + " was " + d.outflow + " people."; });

	svg_left.append("text")
		.attr("class", "x label")
		.attr("text-anchor", "end")
		.attr("x", chart_width - 250)
		.attr("y", chart_height - 6)
		.text("ACT Level");

	svg_left.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("y", 6)
		.attr("x", -20)
		.attr("dy", ".75em")
		.attr("transform", "rotate(-90)")
		.text("Number of cases");

}
function viz_1_right(svg_name, input_data) {
	svg_bar = d3.select("#vis_1_right")
	var margin = { top: 10, right: 30, bottom: 30, left: 60 },
		width = $("#vis_1_right").width() - margin.left - margin.right,
		height = $("#vis_1_right").height() - margin.top - margin.bottom;
	var margin = { top: 30, right: 30, bottom: 70, left: 60 },
		width = 460 - margin.left - margin.right,
		height = 400 - margin.top - margin.bottom;

	// Initialize the X axis
	var x = d3.scaleBand()
		.range([0, width])
		.padding(0.2)

	var xAxis = svg_bar.append("g")
		.attr("transform", "translate(0," + height + ")")

	// Initialize the Y axis
	var y = d3.scaleLinear()
		.range([height, 0]);
	var yAxis = svg_bar.append("g")
		.attr("class", "myYaxis")

	data = data_gen_1(2019, input_data)
	// A function that create / update the plot for a given variable:
	function update(data) {

		// Update the X axis
		x.domain(data.map(function (d) { return d.country; }))

		xAxis.call(d3.axisBottom(x))
			.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", "rotate(-65)");;

		// Update the Y axis
		y.domain([0, d3.max(data, function (d) { return d.value })]);
		yAxis.transition().duration(1000).call(d3.axisLeft(y));

		// Create the u variable
		var u = svg.selectAll("rect")
			.data(data)

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
	}

	// Initialize the plot with the first dataset
	update(data)
}



function viz_1_right_f(svg_name, data) {
	pie_data = data
	pie_svg = d3.select(svg_name)
	var margin = { top: 10, right: 30, bottom: 30, left: 60 },
		width = $(svg_name).width() - margin.left - margin.right,
		height = $(svg_name).height() - margin.top - margin.bottom;
	var radius = Math.min(width, height) / 2 - 40;

	var color = d3.scaleOrdinal()
		.domain(["Austria", "Canada", "Germany", "Korea", "Sweden", "United States", "United Kingdom",
			"Australia", "Turkey", "Italy", "Netherlands", "Denmark", "Hungary", "Spain",
			"France", "Belgium", "Finland"])
		.range(d3.schemeDark2);



	updatePie(data_gen_1(2019), radius)

	//	console.log(color.domain())
	//	console.log(color.range())

	//console.log(height)
}



var info2001 = {}

function viz_2(svg_name, data, country, men, women) {


	//console.log(data)
	let gap = 10
	let width = $(svg_name).width() / 2 - gap;
	let height = $(svg_name).height();

	let x = d3.scaleBand()
		.domain(data.map(function (d) { return d[country]; }))
		.range([70, width - 10]);

	console.log(x.domain())
	var y = d3.scaleLinear()
		.domain([0, 24000])
		.range([height - 50, 30]);


	svg = d3.select(svg_name)



	svg1 = svg
		.append("svg")
		.attr("id", "svg1")
		.attr("height", height)
		.attr("width", width)


	svg2 = svg
		.append("g") // group to move svg sideways
		.attr("transform", "translate(" + (width + gap) + ")")
		.append("svg")
		.attr("id", "svg2")
		.attr("height", height)
		.attr("width", width)



	svg1.append("rect")
		.attr("height", height)
		.attr("width", width)
		.attr("stroke", "black")
		.attr("fill", "#FFFF")
		.attr("stroke-width", 2)
	svg2.append("rect")
		.attr("height", height)
		.attr("width", width)
		.attr("stroke", "black")
		.attr("fill", "#FFFF")
		.attr("stroke-width", 2)

	svg1.append("g")
		.call(d3.axisLeft(y))
		.attr("transform", "translate(" + 50 + ",0)");
	svg2.append("g")
		.call(d3.axisLeft(y))
		.attr("transform", "translate(" + 50 + ",0)");

	svg1.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("y", 60)
		.attr("x", -20)
		.attr("dy", ".75em")
		.attr("transform", "rotate(-90)")
		.text("Number of women");
	svg2.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("y", 60)
		.attr("x", -20)
		.attr("dy", ".75em")
		.attr("transform", "rotate(-90)")
		.text("Number of men");



	enter1 = svg1.selectAll("empty")
		.data(data)
		.enter()
		.append("circle")
		.attr("cx", function (d) { return x(d.country); })
		.attr("cy", function (d) { return y(d.women); })
		.attr("class", function (d, i) { return "pt" + i; })
		.attr("r", 7)
		.attr("fill", "#E504B5")
		.attr("stroke", "grey")
		.attr("fill-opacity", 0.75)
		.on("mouseover", function (d, i) {
			d3.selectAll("circle.pt" + i)
				//.attr("fill", function (d) { return c(d[className]) })
				.attr("r", 10)
		})
		.on("mouseout", function (d, i) {
			d3.selectAll("circle.pt" + i)
				//.attr("fill", function (d) { return c(d[className]) })
				.attr("r", 7)
		})
	enter1.append("svg:title")
		.text(function (d) { return "Inflow of Iranian women to\n " + d.country + " in 2019 was " + d.women + "." });



	enter2 = svg2.selectAll("empty")
		.data(data)
		.enter()
		.append("circle")
		.attr("cx", function (d) { return x(d.country); })
		.attr("cy", function (d) { return y(d.men); })
		.attr("class", function (d, i) { return "pt" + i; })
		.attr("r", 7)
		.attr("fill", "#000C4B")
		.attr("stroke", "grey")
		.attr("fill-opacity", 0.70)
		.on("mouseover", function (d, i) {
			//console.log(i)
			d3.selectAll("circle.pt" + i)
				//.attr("fill", function (d) { return c(d[className]) })
				.attr("r", 10)
		})
		.on("mouseout", function (d, i) {
			d3.selectAll("circle.pt" + i)
				//.attr("fill", function (d) { return c(d[className]) })
				.attr("r", 7)
		})
	enter2.append("svg:title")
		.attr("fill", "white")

		.text(function (d) { return "Inflow of Iranian men to\n " + d.country + " in 2019 was " + d.men + "."; });

}

function viz_3(svg_name, data, year, c1, v1, c2, v2, c3, v3, c4, v4, c5, v5, total) {
	svg = d3.select(svg_name)

	var dict = {}
	for (var i = 0; i < data.length; i++) {
		dict[data[i].v1] = data[i].c1
		dict[data[i].v2] = data[i].c2
		dict[data[i].v3] = data[i].c3
		dict[data[i].v4] = data[i].c4
		dict[data[i].v5] = data[i].c5
		dict[data[i].total] = "Total"
	}

	var margin = { top: 10, right: 30, bottom: 30, left: 60 },
		width = $(svg_name).width() - margin.left - margin.right,
		height = $(svg_name).height() - margin.top - margin.bottom;


	var subgroups = data.columns.slice(6)
	var groups = d3.map(data, function (d) { return (d.year) }).keys()

	//console.log(subgroups)
	var x = d3.scaleBand()
		.domain(groups)
		.range([0, width])
		.padding([0.2])
	svg.append("g")
		.attr("transform", "translate(50," + (height) + ")")
		.call(d3.axisBottom(x).tickSize(0))
		.selectAll("text")
		.attr('font-size', 15);

	var y = d3.scaleLinear()
		.domain([0, 110000])
		.range([height, 20]);

	svg.append("g")
		.attr("transform", "translate(50,0)")
		.call(d3.axisLeft(y));

	var xSubgroup = d3.scaleBand()
		.domain(subgroups)
		.range([0, x.bandwidth()])
		.padding([0.05])

	var color = d3.scaleOrdinal()
		.domain(subgroups)
		.range(['#DFFF00', '#FF7F50', '#DE3163', '#9FE2BF', '#6495ED', '#CCCCFF'])


	enter = svg.append("g")
		.selectAll("g")
		// Enter in data = loop group per group
		.data(data)
		.enter()
		.append("g")
		.attr("transform", function (d) { return "translate(" + (x(d.year) + 70) + ",0)"; })
		.selectAll("rect")
		.data(function (d) { return subgroups.map(function (key) { return { key: key, value: d[key] }; }); })
		.enter().append("rect")
		.attr("x", function (d) { return xSubgroup(d.key); })
		.attr("y", function (d) { return y(d.value); })
		.attr("width", xSubgroup.bandwidth())
		.attr("height", function (d) { return height - y(d.value); })
		.attr("fill", function (d) { return color(d.key); })
		.on("mouseover", function (d) {
			d3.select(this).attr("stroke", "gray").attr("stroke-width", 2);


			//.attr("fill", function (d) { return cm(d[actLevel]) }) 

		})
		.on("mouseout", function (d) {

			d3.select(this).attr("stroke", "gray").attr("stroke-width", 0);

			/* 			d3.select(this)
							.attr("fill", function (d) { return c2(d[actLevel]) }) */

		})

	enter.append("svg:title")
		.text(function (d) {
			return dict[d.value] + ": " + d.value
				;
		});
	svg.append("rect").attr("x", 100).attr("y", 30).attr("height", 15).attr("width", 15).style("fill", "#DFFF00").style("opacity", 0.7)
	svg.append("text").attr("x", 120).attr("y", 40).text(" Conutry with the highest Iranian inflows").attr("alignment-baseline", "middle")

	svg.append("rect").attr("x", 100).attr("y", 60).attr("height", 15).attr("width", 15).style("fill", "#FF7F50").style("opacity", 0.7)
	svg.append("text").attr("x", 120).attr("y", 70).text(" Conutry with the second highest Iranian inflows").attr("alignment-baseline", "middle")

	svg.append("rect").attr("x", 100).attr("y", 90).attr("height", 15).attr("width", 15).style("fill", "#DE3163").style("opacity", 0.7)
	svg.append("text").attr("x", 120).attr("y", 100).text(" Conutry with the third highest Iranian inflows").attr("alignment-baseline", "middle")

	svg.append("rect").attr("x", 100).attr("y", 120).attr("height", 15).attr("width", 15).style("fill", "#9FE2BF").style("opacity", 0.7)
	svg.append("text").attr("x", 120).attr("y", 130).text(" Conutry with the fourth highest Iranian inflows").attr("alignment-baseline", "middle")

	svg.append("rect").attr("x", 100).attr("y", 150).attr("height", 15).attr("width", 15).style("fill", "#6495ED").style("opacity", 0.7)
	svg.append("text").attr("x", 120).attr("y", 160).text(" Conutry with the fifth highest Iranian inflows").attr("alignment-baseline", "middle")


	svg.append("text")
		.attr("class", "x label")
		.attr("text-anchor", "end")
		.attr("x", width + 70)
		.attr("y", height +15)
		.text("Year group");

	svg.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("y", 60)
		.attr("x", -30)
		.attr("dy", ".75em")
		.attr("transform", "rotate(-90)")
		.text("Number of People");
}
function viz_3_data(data) {
	var first_group = [];
	var second_group = [];
	var third_group = [];
	var fourth_group = [];
	var first_group_dict = {}
	var second_group_dict = {}
	var third_group_dict = {}
	var fourth_group_dict = {}

	//console.log(data)
	findData(data)
	function findData(data) {
		for (var j = 0; j < data.length; j++) {
			first_group_dict[data[j].country] = 0
			second_group_dict[data[j].country] = 0
			third_group_dict[data[j].country] = 0
			fourth_group_dict[data[j].country] = 0
		}
		for (var i = 0; i < data.length; i++) {
			if (data[i].year <= 2004) {
				first_group.push(data[i])
				first_group_dict[data[i].country] = first_group_dict[data[i].country] + data[i].value;
			}
			else if (data[i].year > 2004 && data[i].year < 2010) {
				second_group.push(data[i])
				second_group_dict[data[i].country] = second_group_dict[data[i].country] + data[i].value;
			}
			else if (data[i].year > 2009 && data[i].year < 2015) {
				third_group.push(data[i])
				third_group_dict[data[i].country] = third_group_dict[data[i].country] + data[i].value;
			}
			else if (data[i].year > 2014) {
				fourth_group.push(data[i])
				fourth_group_dict[data[i].country] = fourth_group_dict[data[i].country] + data[i].value;
			}
		}
	}



	sort_dict(fourth_group_dict)
}
function sort_dict(dict) {

	// Step - 1
	// Create the array of key-value pairs
	var items = Object.keys(dict).map(
		(key) => { return [key, dict[key]] });

	// Step - 2
	// Sort the array based on the second element (i.e. the value)
	items.sort(
		(first, second) => { return first[1] - second[1] }
	);

	// Step - 3
	// Obtain the list of keys in sorted order of the values.
	var keys = items.map(
		(e) => { return e[0] });
	keys.reverse();
	items.reverse();
	//console.log(items);
	return items
}
function viz_4(svg_name, data, variable, country, year, value) {

	var margin = { top: 10, right: 30, bottom: 30, left: 60 },
		width = $(svg_name).width() - margin.left - margin.right,
		height = 400 - margin.top - margin.bottom;

	// append the SVG object to the body of the page
	var SVG = d3.select(svg_name)

	//console.log(data)
	// Add X axis
	var x = d3.scaleBand()
		.domain(data.map(function (d) { return d.country; }))
		.range([20, width]);


	//console.log(x.domain())
	var xAxis = SVG.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x))
		.selectAll("text")
		.style("text-anchor", "end")
		.attr("dx", "-.8em")
		.attr("dy", ".15em")
		.attr("transform", "rotate(-65)");;

	// Add Y axis
	var y = d3.scaleLinear()
		.domain([0, 19000])
		.range([height, 0]);
	var yAxis = SVG.append("g")
		.call(d3.axisLeft(y));


	// Create the scatter variable: where both the circles and the brush take place
	var scatter = SVG.append('g')
	//.attr("clip-path", "url(#clip)")

	// Add circles
	scatter
		.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
		.attr("cx", function (d) { return x(d.country); })
		.attr("cy", function (d) { return y(d.value); })
		.attr("r", 5)
		.style("fill", "#61a3a9")
		.style("opacity", 0.5)

}

function updatePie(data, radius) {
	//console.log(radius)
	var color = d3.scaleOrdinal()
		.domain(["Austria", "Canada", "Germany", "Korea", "Sweden", "United States", "United Kingdom", "Australia", "Turkey", "Italy", "Netherlands", "Denmark", "Hungary", "Spain", "France", "Belgium", "Finland"])
		.range(["#581845", "#5DADE2", "#52BE80", "#F1C40F", "#E74C3C", "#F9E79F", "#21618C", "#566573", "violet", "#E22916", "#117A65", "#D35400", "#BFC9CA", "#2874A6"]);

	// Compute the position of each group on the pie:
	var pie = d3.pie()
		.value(function (d) { return d.value; })

	//.sort(function (a, b) { return d3.ascending(a.key, b.key); }) // This make sure that group order remains the same in the pie chart
	var data_ready = pie(d3.entries(data))
	//console.log("data + data ready", data_ready)
	console.log(color("Australia"))
	for (var i = 0; i < data_ready.length; i++)
		console.log("data + data ready", data_ready[i].data.key)

	// map to data
	var u = pie_svg.selectAll("path")
		.data(data_ready)
	//console.log(u.data())
	var arcGenerator = d3.arc()
		.innerRadius(50)
		.outerRadius(radius)


	var arcGeneratorForTooltip = d3.arc()
		.innerRadius(50)
		.outerRadius(radius + 20)
	// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
	l = u.enter()
		.append('path')
	l
		.attr("transform", "translate(200,200)")

		.merge(u)
		.transition()
		.duration(1000)
		.attr('d', arcGenerator)
		.attr('fill', function (d) { return (color(d.data.key)) })
		.attr("stroke", "white")
		.style("stroke-width", "2px")
		.style("opacity", 1)


	l.on("mouseover", function () {
		d3.select(this)
			.attr('d', arcGeneratorForTooltip)
	})

		.on("mouseout", function () {
			d3.select(this)
				.attr('d', arcGenerator)
		});
	// remove the group that is not present anymore


	l.append("pi_svg:title")
		//.text(function (d) { return d.data.desc; });
		.text(function (d) {
			console.log(d.data.key, d.data.value)
			return d.data.key + ":\n " + d.data.value
		})
	u
		.exit()
		.remove()


}

// Initialize the plot with the first dataset
function readTextFile(file) {
	var allText
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				allText = rawFile.responseText;
				//alert(allText);
			}
		}
	}
	rawFile.send(null);
	return allText
}



