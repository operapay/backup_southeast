Highcharts.chart('container_si', {
    chart: {
        type: 'treemap',
        backgroundColor: 'transparent',
    },
    colorAxis: {
        minColor: '#FFFFFF',
        maxColor: '#A3C4BC'
    },
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
            name: 'Taxes on goods and services',
            value: 26.96,
            colorValue: 4
        }, {
            name: 'Taxes on income, profits and capital gains',
            value: 45.59,
            colorValue: 5
        }, {
            name: 'Other taxes',
            value: 21.88,
            colorValue: 3
        },{
            name: 'Other',
            value: 5.57,
            colorValue: 2
        }]
    }],
    title: {
        text: 'Government Revenue 2017',
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
    legend : false
});

Highcharts.chart('container2_si', {
    chart: {
        type: 'area',
        backgroundColor:  'transparent'
    },
    xAxis: {
        type: 'category',
        labels: {
            style: {
                color: 'white'
            }
        },
    },
    series: [{
      type: 'area',
      name: 'GDP',
      data: [
        ['2000', 95.83  ],
        ['2001', 89.29  ],
        ['2002', 91.94  ],
        ['2003', 97.00  ],
        ['2004', 114.19  ],
        ['2005', 127.42 ],
        ['2006', 147.80 ],
        ['2007', 179.98 ],
        ['2008', 192.23 ],
        ['2009', 192.41 ],
        ['2010', 236.42 ],
        ['2011', 275.97 ],
        ['2012', 290.67 ],
        ['2013', 304.45],
        ['2014', 311.54 ],
        ['2015', 304.10 ],
        ['2016', 309.76 ],
        ['2017', 323.90 ]
      ],
      color:'#F2DDA4'
    }],
    title: {
        text: 'GDP',
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
    legend : false,
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>:<br>{point.y} US$ billion'
    },
});

  Highcharts.chart('pie_si', {
    chart: {
        type: 'variablepie',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'GDP Details 2017',
        style: {
            color: 'white'
        }
    },
    subtitle: {
        text: 'Source: <a href="https://tradingeconomics.com/singapore/gdp">tradingeconomics</a>',
        style: {
            color: 'white'
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>:<br>{point.y} SGD million'
    },
    plotOptions: {
        variablepie: {
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>:<br>{point.percentage:.1f} %',
            style: {
                color: 'white'
            }
          }
        }
      },
    series: [{
        innerSize: '50%',
        name: 'countries',
        data: [{
            name: 'Construction',
            y: 4234.40
        }, {
            name: 'Manufacturing',
            y: 21376.50
        }, {
            name: 'Mining',
            y: 75110.80
        }, {
            name: 'Services',
            y: 20169.30
        }, {
            name: 'Transport',
            y: 8365.00
        }, {
            name: 'Utilities',
            y: 1359.10
        }],
        dataLabels: {
            enabled: true
        },
    }]
});
Highcharts.chart('bar_si', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'GDP per catipa',
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
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif',
                color: 'white'
            }
        }
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
    legend: {
        enabled: false
    },
    series: [{
        name: 'GDP per capita',
        data: [
            ['2000', 23792.6 ],
            ['2001', 21577.1  ],
            ['2002', 22016.8 ],
            ['2003', 23573.6 ],
            ['2004', 27405.3 ],
            ['2005', 29869.9 ],
            ['2006', 33579.9 ],
            ['2007', 39223.6 ],
            ['2008', 39721.0 ],
            ['2009', 38577.6 ],
            ['2010', 46569.7 ],
            ['2011', 53237.6 ],
            ['2012', 54715.7 ],
            ['2013', 56389.2 ],
            ['2014', 56957.1 ],
            ['2015', 54940.9 ],
            ['2016', 55243.1 ],
            ['2017', 57714.3 ]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: 'black',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '10px'
            }
        },
        color:'#BFD7B5'
    }]
});