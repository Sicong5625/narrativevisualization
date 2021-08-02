var scene1 = d3.select('#scene1')
var scene2 = d3.select('#scene2')
var scene3 = d3.select('#scene3')
var width = 950, height = 950, spacing=120;
var margin = { top: 10, right: 100, bottom: 50, left: 50 },
    width = 1000 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

var makes = ["Acura", "Alfa Romeo", "Audi", "BMW", "Buick",  "Cadillac", "Chevrolet", "Chrysler",
    "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", 
    "Land Rover", "Lexus", "Lincoln","Mazda", , "Mercedes-Benz", "MINI", "Mitsubishi",
    "Nissan", "Porsche", "Ram", "Subaru", "Toyota", "Volkswagen", "Volvo"];

var highway_mpgs = ["35", "33", "32", "32", "31", "32", "34", "36", "25", "34", "31", "27", "38", "34", "27", "39", "31", "33",
    "27", "36", "29", "35", "30", "33", "31", "33", "27", "28", "33", "35", "33", "29"];

var city_mpgs = ["25", "24", "24", "23", "23", 
"22", "27", "23", "19", "26", "24", "20", "30", "27", "25", "30", "24", "27", 
    "20", "39", "23", "27", "23", "24", "24", "26", "21", "21", "25", "32", "24", "23"];



var y=d3.scaleLinear().domain([0, 30]).range([height-spacing,0]);
var x=d3.scaleLinear().domain([10, 20, 30, 40]).range([1,width-spacing]);

var xAxis = d3.axisBottom()
    .scale(x)

var yAxis = d3.axisLeft()
    .scale(y)


scene1.append("g").append("g").call(d3.axisLeft(y));
scene1.append("g").attr("transform","translate(0,"+(height-spacing) +")").call(d3.axisBottom(x));
scene1.attr("class", "center-screen");
scene1.append('text')
    .attr('x', -500)
    .attr('y', 15)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Mileage')

scene1.append('text')
    .attr('x', 500)
    .attr('y', 1050)
    .attr('text-anchor', 'middle')
    .text('Car Brand')
scene2.append('text')
    .attr('x', 500)
    .attr('y', 390)
    .attr('text-anchor', 'middle')
    .text('Average Highway MPG')

var bar_tooltip = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")



    async function load1() {
        d3.csv("/narrativevisualization/cars2017.csv").then(function (d) {
            var makeScale = d3.scaleBand()
                .range([0, width])
                .domain(data_given.map(function (d) { return d.Make }))

            var makeAxis = d3.axisBottom()
                .scale(makeScale)
                .ticks(5);

            scene1.append("g")
                .attr("transform", "translate(50,950)")
                .attr("class", "axis")
                .call(makeAxis)
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-30)")
                .style("text-anchor", "end");

            scene1.selectAll("rect")
                .data(d)
                .enter()
                .append("rect")
                .attr("x", function (d, i) { return margin.left + makeScale(makes[i]); })
                .attr("y", function (d, i) { return y(highway_mpgs[i]) + 10; })
                .attr("width", makeScale.bandwidth() - 10)
                .attr("height", function (d, i) { return height - y(highway_mpgs[i]); })
                .attr("fill", "#5E4FA2").on("mouseover", function (d, i) {
                    bar_tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    bar_tooltip.html(makes[i])
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function (d) {
                    bar_tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });
        })
    }


function change(setting) {
    if (setting === "AverageHighwayMPG") {
        scene1.selectAll("rect")
            .transition()
            .duration(2000)
            .attr("fill", "#5E4FA2")
            .attr("y", function (d, i) { return y(highway_mpgs[i]) + 10; })
            .attr("height", function (d, i) { return height - y(highway_mpgs[i]); })
    } else {
        scene1.selectAll("rect")
            .transition()
            .duration(2000)
            .attr("fill", "#66C2A5")
            .attr("y", function (d, i) { return y(city_mpgs[i]) + 10; })
            .attr("height", function (d, i) { return height - y(city_mpgs[i]); })
    }
}
var keys_cyls = ["2", "4", "6", "8", "10", "12"]
var myColor = d3.scaleOrdinal()
    .domain(keys_cyls)
    .range(["#5E4FA2", "#3288BD", "#66C2A5", "#ABDDA4", "#E6F598",
        "#FFFFBF"]);

var tooltip = d3.select("body").append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

// Legend
var size = 20
scene2.selectAll("legend")
    .data(keys_cyls)
    .enter()
    .append("rect")
    .attr("x", 100)
    .attr("y", function (d, i) { return 200 + i * (size + 5) })
    .attr("width", size)
    .attr("height", size)
    .attr("stroke", "black")
    .style("fill", function (d) { return myColor(d) })
    .on("mouseover", function (d) { highlight(d) })
    .on("mouseleave", function (d) { noHighlight(d) })

scene2.selectAll("labels")
    .data(keys_cyls)
    .enter()
    .append("text")
    .attr("x", 100 + size * 1.2)
    .attr("y", function (d, i) { return 200 + i * (size + 5) + (size / 2) })
    .style("fill", function (d) { return "black" })
    .text(function (d) { return d })
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
    .on("mouseover", highlight)
    .on("mouseleave", noHighlight)

// Annotation
scene2.append('rect')
    .attr("x", 300)
    .attr("y", 200)
    .attr("width", 500)
    .attr("height", 30)
    .style("fill", 'lightgray')

scene2.append('text')
    .attr("x", 310)
    .attr("y", 220)
    .attr("width", 60)
    .attr("height", 20)
    .style("fill", 'black')
    .text("Fewer engineer cylinders are largely correlated with better mileage.")
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")

var highlight = function (d) {
    scene2.selectAll(".datapt").style("opacity", .05)
    scene2.selectAll(".a" + d).style("opacity", 1)
}

var noHighlight = function (d) {
    d3.selectAll(".datapt").style("opacity", 1)
}

async function load2() {
    d3.csv("/narrativevisualization/cars2017.csv").then(function (d) {
        scene2.selectAll("scene2")
            .append("g")
            .data(d)
            .enter()
            .append("circle")
            // .attr("class", function (d) { return "datapt " + "a" + d.EngineCylinders })
            .attr("cx", function (d) { return d.AverageHighwayMPG * 20 })
            .attr("cy", function (d) { return 300 })
            .attr("r", "7")
            .attr("fill", function (d) { return myColor(d.EngineCylinders); })
            .on("mouseover", function (d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(d.Make)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    })
}
