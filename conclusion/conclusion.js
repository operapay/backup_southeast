Highcharts.chart('line_con', {
    chart: {
        type: 'line',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Compare GDP',
        style: {
            color: 'white'
        }
    },
    subtitle: {
        text: 'Source: <a href="https://databank.worldbank.org">databank worldbank</a>',
        style: {
            color: 'white'
        }
    },
    xAxis: {
        categories: [
            '2014',
            '2015',
            '2016',
            '2017',
        ],
        labels: {
            style: {
                color: 'white'
            }
        },
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'GDP (US$ billion)',
            style: {
                color: 'white'
            }
        },
        labels: {
            style: {
                color: 'white'
            }
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<b>{series.name}</b>:<br>{point.y} US$ billion'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        }
    },
    legend: {
        itemStyle: {
            color: 'white',
        }
    },
    series: [{
        name: 'Philippines',
        data: [2.85E+02,2.93E+02,3.05E+02,3.14E+02]
        ,color : '#A3C4BC'
    }, {
        name: 'Indonesia',
        data: [8.91E+02,8.61E+02,9.32E+02,1.02E+03]
        ,color : '#CB807D'
    }, {
        name: 'Malaysia',
        data: [3.38E+02,2.97E+02,2.97E+02,3.15E+02]
        ,color : '#FE64A3'
    }, {
        name: 'Singapore',
        data: [3.12E+02,3.04E+02,3.10E+02,3.24E+02]
        ,color : '#F2DDA4'
    }, {
        name: 'Vietnam',
        data: [1.86E+02,1.93E+02,2.05E+02,2.24E+02]
        ,color : '#F0B5B3'
    }]
});
Highcharts.chart('column_con', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Compare GDP',
        style: {
            color: 'white'
        }
    },
    subtitle: {
        text: 'Source: <a href="https://databank.worldbank.org">databank worldbank</a>',
        style: {
            color: 'white'
        }
    },
    xAxis: {
        categories: [
            'Philippines',
            'Indonesia',
            'Malaysia',
            'Singapore',
            'Vietnam',
        ],
        labels: {
            style: {
                color: 'white'
            }
        },
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'GDP (US$ billion)',
            style: {
                color: 'white'
            }
        },
        labels: {
            style: {
                color: 'white'
            }
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<b>{series.name}</b>:<br>{point.y} US$ billion'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        }
    },
    legend: {
        itemStyle: {
            color: 'white',
        }
    },
    series: [{
        name: '2014',
        data: [2.85E+02,8.91E+02,3.38E+02,3.12E+02,1.86E+02],
        color : '#A3C4BC'

    }, {
        name: '2015',
        data: [2.93E+02,8.61E+02,2.97E+02,3.04E+02,1.93E+02]
        ,color : '#CB807D'
    }, {
        name: '2016',
        data: [3.05E+02,9.32E+02,2.97E+02,3.10E+02,2.05E+02]
        ,color : '#F2DDA4'
    }, {
        name: '2017',
        data: [3.14E+02,1.02E+03,3.15E+02,3.24E+02,2.24E+02]
        ,color : '#F0B5B3'
    }]
});
Highcharts.chart('bar_con', {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Compare Government Revenue',
        style: {
            color: 'white'
        }
    },
    subtitle: {
        text: 'Source: <a href="https://tradingeconomics.com">trading economics</a>',
        style: {
            color: 'white'
        }
    },
    xAxis: {
        categories: [
            'Philippines',
            'Indonesia',
            'Malaysia',
            'Singapore',
            'Vietnam',
        ],
        labels: {
            style: {
                color: 'white'
            }
        },
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Government Revenue (US$ billion)',
            style: {
                color: 'white'
            }
        },
        labels: {
            style: {
                color: 'white'
            }
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<b>{point.name}</b>:<br>{point.y} US$ billion'
    },
    plotOptions: {
        bar: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: {
        itemStyle: {
            color: 'white',
        }
    },
    series: [{
        name: '2017',
        data: [47.75, 118.95, 53.30, 51.92, 55.69],
        color : '#A3C4BC'

    }, {
        name: '2018',
        data: [49.58, 135.22, 57.54, 53.02, 63.89],
        color : '#CB807D'

    }]
});
Highcharts.chart('box_con', {

    chart: {
        type: 'boxplot',
        backgroundColor: 'transparent',
    },

    title: {
        text: 'Compare Taxable'
        ,style: {
            color: 'white'
        }
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: [
            'Philippines',
            'Indonesia',
            'Malaysia',
            'Singapore',
            'Vietnam',
        ],
        labels: {
            style: {
                color: 'white'
            }
        },
    },

    yAxis: {
        title: {
            text: 'taxable income (US$)'
            ,style: {
                color: 'white'
            }
        },
        labels: {
            style: {
                color: 'white'
            }
        },
        plotLines: [{
            value: 74339,
            color: '#FE64A3',
            width: 1,
            label: {
                text: 'Theoretical mean: 74339',
                align: 'right',
                style: {
                    color: 'gray'
                }
            }
        }]
    },
    series: [{
        data: [
            [4742, 41500, 78257, 115014, 151771],
            [3507, 11399, 19290, 27182, 35073],
            [1224, 62140, 123056, 183972, 244887],
            [22132, 75617, 129103, 182589, 236075],
            [2586, 12287, 21987, 31687, 41388]
        ],
        color : '#A3C4BC',
        tooltip: {
            headerFormat: '<em>{point.key}</em><br/>'
        }
    }]

});
Highcharts.chart('line2_con', {
    chart: {
        type: 'line',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Compare GDP per capita',
        style: {
            color: 'white'
        }
    },
    subtitle: {
        text: 'Source: <a href="https://databank.worldbank.org">databank worldbank</a>',
        style: {
            color: 'white'
        }
    },
    xAxis: {
        categories: [
            '2014',
            '2015',
            '2016',
            '2017',
        ],
        labels: {
            style: {
                color: 'white'
            }
        },
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'GDP per capita (US$)',
            style: {
                color: 'white'
            }
        },
        labels: {
            style: {
                color: 'white'
            }
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<b>{series.name}</b>:<br>{point.y} US$'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        }
    },
    legend: {
        itemStyle: {
            color: 'white',
        }
    },
    series: [{
        name: 'Philippines',
        data: [2842.94,2878.34,2950.91,2988.95]
        ,color : '#A3C4BC'
    }, {
        name: 'Indonesia',
        data: [3491.60,3334.55,3570.28,3846.86]
        ,color : '#CB807D'
    }, {
        name: 'Malaysia',
        data: [11183.73,9655.14,9515.19,9951.54]
        ,color : '#FE64A3'
    }, {
        name: 'Singapore',
        data: [56957.08,54940.86,55243.13,57714.29]
        ,color : '#F2DDA4'
    }, {
        name: 'Vietnam',
        data: [2012.05,2065.17,2170.65,2342.24]
        ,color : '#F0B5B3'
    }]
});
Highcharts.chart('column2_con', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Compare GDP per capita',
        style: {
            color: 'white'
        }
    },
    subtitle: {
        text: 'Source: <a href="https://databank.worldbank.org">databank worldbank</a>',
        style: {
            color: 'white'
        }
    },
    xAxis: {
        categories: [
            'Philippines',
            'Indonesia',
            'Malaysia',
            'Singapore',
            'Vietnam',
        ],
        labels: {
            style: {
                color: 'white'
            }
        },
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'GDP per capita (US$)',
            style: {
                color: 'white'
            }
        },
        labels: {
            style: {
                color: 'white'
            }
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<b>{series.name}</b>:<br>{point.y} US$'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        }
    },
    legend: {
        itemStyle: {
            color: 'white',
        }
    },
    series: [{
        name: '2014',
        data: [2842.94, 3491.60, 11183.73, 56957.08, 2012.05]
        ,color : '#A3C4BC'
    }, {
        name: '2015',
        data: [2878.34, 3334.55, 9655.14, 54940.86, 2065.17]
        ,color : '#CB807D'
    }, {
        name: '2016',
        data: [2950.91,3570.28, 9515.19, 55243.13, 2170.65]
        ,color : '#F2DDA4'
    }, {
        name: '2017',
        data: [2988.95, 3846.86, 9951.54, 57714.29,2342.24]
        ,color : '#F0B5B3'
    }]
});

function choose1() {
    document.getElementById("title-chart").innerHTML = "GDP";

    document.getElementById("choosen-1").style.display = "inline";
    document.getElementById("choosen-2").style.display = "none";
    document.getElementById("choosen-3").style.display = "none";
    document.getElementById("choosen-4").style.display = "none";

    document.getElementById("to1-2").style.display = "inline";
    document.getElementById("to2-1").style.display = "none";
    document.getElementById("to3-1").style.display = "none";
    document.getElementById("to3-2").style.display = "none";

    document.getElementById("line_con").style.display = "block";
    document.getElementById("column_con").style.display = "none";
}
function choose2() {
    document.getElementById("title-chart").innerHTML = "Goverment Revenue";

    document.getElementById("choosen-1").style.display = "none";
    document.getElementById("choosen-2").style.display = "inline";
    document.getElementById("choosen-3").style.display = "none";
    document.getElementById("choosen-4").style.display = "none";

    document.getElementById("to1-2").style.display = "none";
    document.getElementById("to2-1").style.display = "none";
    document.getElementById("to3-1").style.display = "none";
    document.getElementById("to3-2").style.display = "none";
}
function choose3() {
    document.getElementById("title-chart").innerHTML = "GDP per capital";

    document.getElementById("choosen-1").style.display = "none";
    document.getElementById("choosen-2").style.display = "none";
    document.getElementById("choosen-3").style.display = "inline";
    document.getElementById("choosen-4").style.display = "none";

    document.getElementById("to3-2").style.display = "inline";
    document.getElementById("to1-2").style.display = "none";
    document.getElementById("to2-1").style.display = "none";
    document.getElementById("to3-1").style.display = "none";

    document.getElementById("line2_con").style.display = "block";
    document.getElementById("column2_con").style.display = "none";
}
function choose4() {
    document.getElementById("title-chart").innerHTML = "taxable";

    document.getElementById("choosen-1").style.display = "none";
    document.getElementById("choosen-2").style.display = "none";
    document.getElementById("choosen-3").style.display = "none";
    document.getElementById("choosen-4").style.display = "inline";

    document.getElementById("to1-2").style.display = "none";
    document.getElementById("to2-1").style.display = "none";
    document.getElementById("to3-1").style.display = "none";
    document.getElementById("to3-2").style.display = "none";
}

function to12() {
    document.getElementById("line_con").style.display = "none";
    document.getElementById("column_con").style.display = "block";
    document.getElementById("to1-2").style.display = "none";
    document.getElementById("to2-1").style.display = "inline";
}

function to11() {
    document.getElementById("line_con").style.display = "block";
    document.getElementById("column_con").style.display = "none";
    document.getElementById("to1-2").style.display = "inline";
    document.getElementById("to2-1").style.display = "none";
}

function to32() {
    document.getElementById("line2_con").style.display = "none";
    document.getElementById("column2_con").style.display = "block";
    document.getElementById("to3-2").style.display = "none";
    document.getElementById("to3-1").style.display = "inline";
}

function to31() {
    document.getElementById("line2_con").style.display = "block";
    document.getElementById("column2_con").style.display = "none";
    document.getElementById("to3-2").style.display = "inline";
    document.getElementById("to3-1").style.display = "none";
}