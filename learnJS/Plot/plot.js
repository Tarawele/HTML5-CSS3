var parameters = {
    target: "#idMyfunction",
    data: [{
        fn: "sin(x)",
        color: "red"
    }],
    xAxis: {domain: [-1, 1]},
    yAxis: {domain: [0, 2*Math.PI]}
};

function plot(){
    var f = document.querySelector("#graph").value;
    var xmin = document.querySelector("#xmin").value;
    var xmax = document.querySelector("#xmax").value;
    var ymin = document.querySelector("#ymin").value;
    var ymax = document.querySelector("#ymax").value;
    var color = document.querySelector("#color").value;

    parameters.data[0].fn = f;
    parameters.xAxis.domain = [xmin, xmax];
    parameters.yAxis.domain = [ymin, ymax];
    parameters.data[0].color = color;
    
    functionPlot(parameters);
}

