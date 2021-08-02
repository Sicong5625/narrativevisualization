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
            <text x="900" y="700">Good gas mileage</text>

            <line x1="0" y1="700" x2="900" y2="700" stroke="black" stroke-dasharray="4" />
        </svg>









        <script>
            var scene1 = d3.select('#scene1')
            var scene2 = d3.select('#scene2')
            var scene3 = d3.select('#scene3')
            var width = 800, height = 800, spacing=120;
     
            const data =d3.csv("narrativevisualization/cars2017.csv");

            var y=d3.scaleLinear().domain([0, 120]).range([height-spacing,0]);
            var x=d3.scaleLinear().domain([10, 20, 30, 40, 50]).range([1,width-spacing]);
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

            
            function change(setting) {
                if (setting === "AverageHighwayMPG") {
                    scene1.selectAll("rect")
                        .transition()
                        .duration(2000)
                        .attr("fill", "#5E4FA2")
                        .attr("y", function (d, i) { return y(d.AverageHighwayMPG) + 10; })
                        .attr("height", function (d, i) { return height - y(d.AverageHighwayMPG); })
                } else {
                    scene1.selectAll("rect")
                        .transition()
                        .duration(2000)
                        .attr("fill", "#66C2A5")
                        .attr("y", function (d, i) { return y(d.AverageCityMPG) + 10; })
                        .attr("height", function (d, i) { return height - y(d.AverageCityMPG); })
                }
            }
            
        </script>
    </body>
</html>