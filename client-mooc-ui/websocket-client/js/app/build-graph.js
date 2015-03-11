//GRAPH CODE GOES HERE

$(function(){
    // Load the fonts
Highcharts.createElement('link', {
   href: '//fonts.googleapis.com/css?family=Dosis:400,600',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: "Dosis, sans-serif"
      }
   },
   title: {
      style: {
         fontSize: '16px',
         fontWeight: 'bold',
         textTransform: 'uppercase'
      }
   },
   tooltip: {
      borderWidth: 0,
      backgroundColor: 'rgba(219,219,216,0.8)',
      shadow: false
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      gridLineWidth: 1,
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   yAxis: {
      minorTickInterval: 'auto',
      title: {
         style: {
            textTransform: 'uppercase'
         }
      },
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   plotOptions: {
      candlestick: {
         lineColor: '#404048'
      },
      spline:{
        marker:{
          enabled: false,
          states:{
            hover:{
              enabled: true
            }
          }
        }
      }
    },


   // General
   background2: '#F0F0EA'
   
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                zoomType: 'x',
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series_1 = this.series[0];
                        var series_2 = this.series[1];

                        start_1 = setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y_1 = Math.random();
                            series_1.addPoint([x, y_1], true, true);
                                y_2 = Math.random();
                            series_2.addPoint([x, y_2], true, true);
                        }, 100);

                        //start_2 = setInterval(function () {
                            //var x = (new Date()).getTime(), // current time
                                //y = Math.random();
                            //series_2.addPoint([x, y], true, true);
                        //}, 500);
                    }
                }
            },
            title: {
                text: 'Live Random Data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 1
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 40,
                floating: true,
                backgroundColor: '#FFFFFF',
                borderWidth: 1
              },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            tooltip: {
                shared: true,
                crosshairs: true
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'Random data 1',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            },
            {
                name: 'Random data 2',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});