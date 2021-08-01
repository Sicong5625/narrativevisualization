# World Population, Birth rate, and the Aging Population    
<script src="https://d3js.org/d3.v5.min.js"></script>
<script>
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
</script>