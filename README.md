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

        <a href="#intro" class="back">Back to Top</a>
        <a href="#two" class="back">Previous</a>

        <h3 id="three">Choose you car based on the number of Engin Cyliners.</h3>
        <p>This visualization shows us the relationship between all three fields: fuel type, engine cylinder, and average MPG. The size of the 
            plotted point indicates the mileage, while the density represents the relative value of the cars that fall into that configuration of fuel type and
            cylinder number.
        </p>
        <svg id="scene2" width=1000 height=1200>
            <text x="900" y="700"></text>

            <line x1="0" y1="700" x2="900" y2="700" stroke="grey" stroke-dasharray="4" />
        </svg>

        <!-- Script -->
        <script src="d3ele.js"></script>

        <ul>
            <li>
                <a href="https://flunky.github.io/cars2017.csv">Data Source</a>
            </li>
            <li>
                <a href="https://bl.ocks.org/d3noob/4e4485d94aebf63ae8059258c40f2609">Tooltips</a>
            </li>
            <li>
                <a href="https://www.d3-graph-gallery.com/graph/bubble_tooltip.html">Tooltips 2</a>
            </li>
            <li>
                <a href="https://observablehq.com/@d3/d3-scaleordinal">ScaleOrdinal</a>
            </li>
            <li>
                <a href="https://www.d3-graph-gallery.com/graph/bubble_template.html">Opacity change on hover</a>
            </li>
        </ul>




    </body>
</html>