Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/notes/notes.js', async: true }
    ]
});

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var options = {
    segmentShowStroke : true,

    segmentStrokeColor : "#222",

    responsive: true,

}

var barChartData = {
    labels : ["Seattle","San Francisco","Portland","Austin","New Orleans","Los Angeles","Denver", "Hartford", "Boston"],
    datasets : [
        {
            strokeColor : "rgba(255,10,51,0.5)",
            fillColor : "rgba(14,255,10,1)",
            highlightFill: "rgba(251,255,10,0.75)",
            highlightStroke: "rgba(96,10,255,1)",
            data : [4.8,6.2,5.4,5.3,5.1,4.6,4.6, 4.6,4.8]
        },
    ]

}
var lineChartData = {
        labels : ["1996","1999","2004","2005","2006","2007","2008",
        "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        datasets : [
            {
                label: "No",
                fillColor : "rgba(220,220,220,0.2)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [68,62,55,59,56,53,56,57,53,45,48,43,42,37]
            },
            {
                label: "Yes",
                fillColor : "rgba(151,187,205,0.2)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : [27,35,42,37,42,46,40,40,44,53,50,54,55,60]
            }
        ]

    }

    var data1 = [
                    {
                        value: 96,
                        color: "#4caf50",
                        label: "normal"
                    },
                    {
                        value: 4,
                        color: "#f44336",
                        lable: "LGBT"
                    }
                ]
window.onload = function(){
    var opinions = document.getElementById("opinions").getContext("2d");
    window.myLine = new Chart(opinions).Line(lineChartData, opinions);
    var city = document.getElementById("cities").getContext("2d");
    window.myBar = new Chart(city).Bar(barChartData, opinions);
    var ctx = document.getElementById("LGBTPer").getContext("2d");
    window.myChart = new Chart(ctx).Pie(data1, options);
}
