
<html>
    <script src="https://d3js.org/d3.v6.js"></script>

    <style type="text/css">

        body {
          margin: 0;
          font-family: sans-serif;
          font-size: 11px;
        }
  
        .axis path, .axis line {
          fill: none;
          stroke: black;
          shape-rendering: crispEdges; 
        }
        .tooltip {
            position: absolute;
            height: 100px;
            width: 200px;
            font-size: 20px;
            background-color:white;
            text-align:center;
            border-radius: 10px;
            border: 1px solid black;
            z-index: 100;
            pointer-events: none;
        }
       
  
    </style>
    <body onload="load1();load2() ">
        <script src="https://d3js.org/d3.v6.js"></script>
        <h1 id="intro">Fuel Efficiency of Automobiles in 2017</h1>
        <span >By Sicong He </span>
        <div>
            <hr>
                <h2 id="top">
                    A car's performacne in fuel effciency could be afffected by many factors. In this website, we will help you to make your decision of the car/bran that fits you the most using the data obtained in 2017.
                </h2>
                <ul>
                    <li>
                        <a href="#one" class="contents">Looking for a car that performs better in Highways or Cities?</a>
                    </li>
                    <li>
                        <a href="#two" class="contents">Choose you car based on the number of Engin Cyliners.</a>
                    </li>
                    <li>
                        <a href="#three" class="contents">Choose you car based on the fuel type.</a>
                    </li>
                    
                </ul>
            <hr>
        </div>

        <h2 id="one">Looking for a car that performs better in Highways or Cities?</h2>
        <p>See performance of major car brands in cities and on highways by clicking on the buttons</p>
        <div>
            <button id="highway" onclick="change('AverageHighwayMPG')">Average Highway MPG</button>
            <button id="city" onclick="change('AverageCityMPG')">Average City MPG</button>
        </div>
        <svg id="scene1" width=1000 height=1200>
            <text x="900" y="700"></text>

            
        </svg>

        <hr>
        <a href="#top" class="back">Previous</a>
        <a href="#two">Next</a>
        <hr>
        <h3 id="two">Choose you car based on the number of Engin Cyliners.</h3>
        <p>This visualization shows the relationship between engine cylinder and average MPG. The color of the circles repersent 
        the number of cylinders in the engine. The average highway/city MPG and the type of car will be automatically displayed on moving the
        mouse over the circles.
        </p>
        <svg id="scene2" width=1000 height=600>
            <text x="900" y="700"></text>

        </svg>
        <hr>
        <a href="#one" class="back">Previous</a>
        <a href="#three">Next</a>
        <hr>
        <h3 id="three">Choose you car based on the fuel type.</h3>
        <p>This visualization showsthe perforamnce of cars in cities by showing different fuel types with different colors on the scatterplot.
        Move the mouse over the dots to see further information.
        </p>
        <svg id="scene3" width=1000 height=600>
            <text x="900" y="700"></text>

        </svg>
        <hr>
        <a href="#top" class="back">Back to top</a>
        <a href="#two" class="back">Previous</a>
        <hr>
        
        <script src="d3ele.js"></script>

    </body>
</html>

the two contributors in the original repository are accounts linked to my school email and gmail for conveniences.