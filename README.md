# Fuel Efficiency
<html>
    <script src="https://d3js.org/d3.v5.min.js"></script>   
    <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>

    <body onload="load1(); load2(); load3();">
        <div>
            <hr>
                <h1>
                    A car's performacne in fuel effciency could be afffected by many factors. In this website, we will help you to make your decision of the car/bran that fits you the most using the data obtained in 2017.
                </h1>
                <ul>
                    <li>
                        <a href="#one" class="contents">Looking for a car that performs better in Highways or Cities?</a>
                    </li>
                    <li>
                        <a href="#two" class="contents">Choose you car based on the number of Engin Cyliners.</a>
                    </li>
                    <li>
                        <a href="#three" class="contents">Choose you car not only based on engines, but also take fuel types into consideration!</a>
                    </li>
                </ul>
            <hr>
        </div>

        <h2 id="one">Looking for a car that performs better in Highways or Cities?</h2>
        <p>See performance of major car brands in cities and highways by clicking on the buttons</p>
        <div>
            <button id="highway" onclick="change('AverageHighwayMPG')">Average Highway MPG</button>
            <button id="city" onclick="change('AverageCityMPG')">Average City MPG</button>
        </div>
        <svg id="scene1" width=1000 height=1200>
            <text x="900" y="700"></text>

            <line x1="0" y1="700" x2="900" y2="700" stroke="grey" stroke-dasharray="4" />
        </svg>









        <script>
            var scene1 = d3.select('#scene1')
            var scene2 = d3.select('#scene2')
            var scene3 = d3.select('#scene3')
            var width = 950, height = 950, spacing=120;
            var margin = { top: 10, right: 100, bottom: 50, left: 50 },
                width = 1000 - margin.left - margin.right,
                height = 1000 - margin.top - margin.bottom;


            const data =d3.csv("narrativevisualization/cars2017.csv");
            var makes = ["Acura", "Alfa Romeo", "Audi", "BMW", "Buick",  "Cadillac", "Chevrolet", "Chrysler",
                "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", 
                "Land Rover", "Lexus", "Lincoln","Mazda", , "Mercedes-Benz", "MINI", "Mitsubishi",
                "Nissan", "Porsche", "Ram", "Subaru", "Toyota", "Volkswagen", "Volvo"];

            var highway_mpgs = ["35", "33", "32", "32", "31", "32", "34", "36", "25", "34", "31", "27", "38", "34", "27", "39", "31", "33",
                "27", "36", "29", "35", "30", "33", "31", "33", "27", "28", "33", "35", "33", "29"];

            var city_mpgs = ["25", "24", "24", "23", "23", 
            "22", "27", "23", "19", "26", "24", "20", "30", "27", "25", "30", "24", "27", 
                "20", "39", "23", "27", "23", "24", "24", "26", "21", "21", "25", "32", "24", "23"];



            var y=d3.scaleLinear().domain([0, 120]).range([height-spacing,0]);
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

            scene3.append('text')
                .attr('x', -500)
                .attr('y', 15)
                .attr('transform', 'rotate(-90)')
                .attr('text-anchor', 'middle')
                .text('Number of Cylinders')

            scene3.append('text')
                .attr('x', 500)
                .attr('y', 1150)
                .attr('text-anchor', 'middle')
                .text('Fuel Type')
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
                    var makeScale = d3.scaleBand()
            .range([0, width])
            .domain(data_given.map(function (d) { return d.Make; }))

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

        scene1.selectAll("mybar")
            .data(data_given)
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

// This function is called by the buttons on top of the plot
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

            
        </script>
    </body>
</html>