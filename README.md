# the Aging Population
<html>
    <script src="https://d3js.org/d3.v5.min.js"></script>   
    <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>

    <body>
        <div id="plot1", style="text-align:center;"></div>
        <script>
            var width = 800, height = 500, spacing=120;
            var lowerBound = 1960;
            function range(start, end) {
                return Array(end - start + 1).fill().map((_, idx) => start + idx)
            }
            const age = d3.csv("/narrativevisualization/data/age_dep_old.csv", function(data) {
                for (var i = 0; i < data.length; i++) {
                    console.log(data);
                }
            });
            var seqNumbers = range(lowerBound, 2020);
            var dataReady = age.map( function(grpName) { 
                return {
                    name: age.Country_Name,
                    values: age.map(function(d,i) {
                    return {time: seqNumbers[i], value: +d[grpName]};
                    })
                };
            });
            
            const code = d3.csv("/narrativevisualization/data/country_code.csv", function(data) {
                for (var i = 0; i < data.length; i++) {
                    console.log(data);
                }
            });
            const myColor = d3.scaleOrdinal()
                .domain(age.Country_Name)
                .range(d3.schemeSet2);

            var svg = d3.select("plot1").append("svg").attr("width", width).attr("height", height)
                .append("g").attr("transform", "translate("+ spacing/2 +", "+ spacing/2 +")");
            var y=d3.scaleLinear().domain([0,50]).range([height-spacing,0]);
            var x=d3.scaleLinear().domain([1960,2020]).range([1,width-spacing]);
            svg.append("g").call(d3.axisLeft(y));
            svg.append("g").attr("transform","translate(0,"+(height-spacing) +")").call(d3.axisBottom(x));
            svg.attr("class", "center-screen");
            
            const line = d3.line()
                .x(d => x(+d.time))
                .y(d => y(+d.value))
            svg.selectAll("myLines")
                .data(dataReady)
                .join("path")
                    .attr("d", d => line(d.values))
                    .attr("stroke", d => myColor(d.name))
                    .style("stroke-width", 4)
                    .style("fill", "none")
            
        </script>
    </body>
</html>