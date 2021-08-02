# World Population, Birth rate, and the Aging Population    
<script src="https://d3js.org/d3.v5.min.js"></script>   
<style> path {stroke: black;}</style>   
<svg width=300 height=300>  
</svg>
<body>
    <script>
        var width = 600, height = 500, spacing=120
        const age = d3.csv("/data/age_dep_old.csv", function(data) {
            for (var i = 0; i < data.length; i++) {
                console.log(data);
            }
        });

        const pop = d3.csv("/data/total.csv", function(data) {
            for (var i = 0; i < data.length; i++) {
                console.log(data);
            }
        });

        var svg = d3.select("body").append("svg").attr("width", width).attr("height", height)
            .append("g").attr("transform", "translate("+ spacing/2 +", "+ spacing/2 +"))
    </script>
</body>