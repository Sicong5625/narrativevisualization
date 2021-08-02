# World Population, Birth rate, and the Aging Population    
<script src="https://d3js.org/d3.v5.min.js"></script>   
<style> path {stroke: black;}</style>   
  

<body>
    <script>
        var width = 600, height = 500, spacing=100;
        var lowerBound = 1960
        
        const age = d3.csv("/narrativevisualization/data/age_dep_old.csv", function(data) {
            for (var i = 0; i < data.length; i++) {
                console.log(data);
            }
        });

        const pop = d3.csv("/narrativevisualization/data/total.csv", function(data) {
            for (var i = 0; i < data.length; i++) {
                console.log(data);
            }
        });

        var svg = d3.select("body").append("svg").attr("width", width).attr("height", height)
            .append("g").attr("transform", "translate("+ spacing/2 +", "+ spacing/2 +")");

        var y=d3.scaleLinear().domain([0,50]).range([height-spacing,0]);
        var x=d3.scaleLinear().domain([1960,2020]).range([0,width-spacing]);
        svg.append("g").call(d3.axisLeft(y));
        svg.append("g").call(d3.axisBottom(x));
        
    </script>
</body>