document.addEventListener('DOMContentLoaded', function() {
    getData('London,uk');
    getData('Paris,fr');
    getData('Berlin,de');
    getData('Copenhagen,dk');
}, false);


var data=[];
var labels=[];
var humidity=[];
var other=[];

function renderChart() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var ctx2 = document.getElementById("myChart2").getContext('2d');
    var ctx3 = document.getElementById("myChart3").getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                fill: 	true,
                fillColor: '#F0FFFF',
                borderColor: "#6495ED",
                backgroundColor: "#e755ba",
                pointDisplay: false,
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
                data: data,
                  
            }],
        },
        options: {
            elements: { point: { radius: 5 } },

            legend: {
                display: false,
            },

            scaleFontColor: 'red',
            responsive: true,
            tooltips: {
                mode: 'single',
            },
            scales: {
                display: false,
                xAxes: [{ 
                    gridLines: {
                        display: false,
                        color: "#FFFFFF"
                    },
                    ticks: {
                        display: false,
                        fontColor: "#FFFFFF", // this here
                    },
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        color: "#FFFFFF",
                    },
                }],
            }
        }         
    });
    var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                fill: 	true,
                fillColor: '#F0FFFF',
                borderColor: "#6495ED",
                backgroundColor: "#e755ba",
                pointDisplay: false,
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
                data: humidity,
                  
            }],
        },
        options: {
            elements: { point: { radius: 5 } },

            legend: {
                display: false,
            },

            scaleFontColor: 'red',
            responsive: true,
            tooltips: {
                mode: 'single',
            },
            scales: {
                display: false,
                xAxes: [{ 
                    gridLines: {
                        display: false,
                        color: "#FFFFFF"
                    },
                    ticks: {
                        display: false,
                        fontColor: "#FFFFFF", // this here
                    },
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        color: "#FFFFFF",
                    },
                }],
            }
        }         
    });
    var myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                fill: 	true,
                fillColor: '#F0FFFF',
                borderColor: "#6495ED",
                backgroundColor: "#e755ba",
                pointDisplay: false,
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
                data: other,
                  
            }],
        },
        options: {
            elements: { point: { radius: 5 } },

            legend: {
                display: false,
            },

            scaleFontColor: 'red',
            responsive: true,
            tooltips: {
                mode: 'single',
            },
            scales: {
                display: false,
                xAxes: [{ 
                    gridLines: {
                        display: false,
                        color: "#FFFFFF"
                    },
                    ticks: {
                        display: false,
                        fontColor: "#FFFFFF", // this here
                    },
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        color: "#FFFFFF",
                    },
                }],
            }
        }         
    });
}

function getData(id){

    console.log(data.UK)
    console.log(data.DE)
    console.log(data.FR)
    console.log(data.DK)

    var request = new XMLHttpRequest();
    //check city ID, guessing Lon ...
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+id+'&APPID=86ccbefb8db547e08c6be822900d77a1', true);
    request.onload = function () {
        // Begin accessing JSON data here
        data.push(JSON.parse(this.response).main.temp);
        humidity.push(JSON.parse(this.response).main.humidity);
        other.push(JSON.parse(this.response).main.pressure);
        labels.push(id);
        plotGraph();
        
    }
    request.send();
}

function updateAverageTemp(){
    document.getElementById('avg').innerHTML = Math.round((data[0]+data[1]+data[2]+data[3])/4)+'K';
    document.getElementById('avg2').innerHTML = Math.round((humidity[0]+humidity[1]+humidity[2]+humidity[3])/4)+'%';
    document.getElementById('avg3').innerHTML = Math.round((other[0]+other[1]+other[2]+other[3])/4)+'hPa';
    
}
function plotGraph(){
    renderChart(data, labels);
    if(data.length>0){
        updateAverageTemp();
    }
}