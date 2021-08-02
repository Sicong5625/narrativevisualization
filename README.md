# Fuel Efficiency
<html>
    <script src="https://d3js.org/d3.v5.min.js"></script>   
    <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>

    <body onload="load1(); load2();">
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
                    
                </ul>
            <hr>
        </div>

        <h2 id="one">Looking for a car that performs better in Highways or Cities?</h2>
        <p>See performance of major car brands that has 4 engine cylinders in cities and highways by clicking on the buttons</p>
        <div>
            <button id="highway" onclick="change('AverageHighwayMPG')">Average Highway MPG</button>
            <button id="city" onclick="change('AverageCityMPG')">Average City MPG</button>
        </div>
        <svg id="scene1" width=1000 height=1200>
            <text x="900" y="700"></text>

            <line x1="0" y1="700" x2="900" y2="700" stroke="grey" stroke-dasharray="4" />
        </svg>

        <hr>
        <a href="#one" class="back">Previous</a>
        <hr>
        <h3 id="two">Choose you car based on the number of Engin Cyliners.</h3>
        <p>This visualization shows us the relationship between all three fields: fuel type, engine cylinder, and average MPG. The size of the 
            plotted point indicates the mileage, while the density represents the relative value of the cars that fall into that configuration of fuel type and
            cylinder number.
        </p>
        <svg id="scene2" width=1000 height=1200>
            <text x="900" y="700"></text>

            <line x1="0" y1="700" x2="900" y2="700" stroke="grey" stroke-dasharray="4" />
        </svg>
        <hr>
        <a href="#one" class="back">Previous</a>
        <hr>
        <!-- Script -->
        <script src="d3ele.js"></script>

    </body>
</html>