Highcharts.chart('container', {
    chart: {
        type: 'treemap',
        backgroundColor: 'transparent',
    },
    colorAxis: {
        minColor: '#FFFFFF',
        maxColor: '#A3C4BC'
    },
    series: [{
        layoutAlgorithm: 'squarified',
        data: [{
            name: 'Taxes on goods and services',
            value: 27,
            colorValue: 4
        }, {
            name: 'Taxes on income, profits and capital gains',
            value: 41.4,
            colorValue: 5
        }, {
            name: 'Taxes on international trade',
            value: 18.5,
            colorValue: 3
        }, {
            name: 'Other taxes',
            value: 4.1,
            colorValue: 1
        },{
            name: 'Other',
            value: 9,
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

Highcharts.chart('container2', {
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
      name: 'GDP',
      data: [
        ['2000', 81.03   ],
        ['2001', 76.26    ],
        ['2002', 81.36    ],
        ['2003', 83.91   ],
        ['2004', 91.37   ],
        ['2005', 103.07    ],
        ['2006', 122.21    ],
        ['2007', 149.36     ],
        ['2008', 174.20    ],
        ['2009', 168.34   ],
        ['2010', 199.60   ],
        ['2011', 224.14   ],
        ['2012', 250.09    ],
        ['2013', 271.84  ],
        ['2014', 284.59   ],
        ['2015', 292.77  ],
        ['2016', 304.89   ],
        ['2017', 313.60  ]
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

  Highcharts.chart('pie', {
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
        text: 'Source: <a href="https://tradingeconomics.com/philippines/gdp">tradingeconomics</a>',
        style: {
            color: 'white'
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>:<br>{point.y} php million'
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
            name: 'Agriculture',
            y: 182999.00
        }, {
            name: 'Construction',
            y: 272511.86
        }, {
            name: 'Manufacturing',
            y: 598370.00
        }, {
            name: 'Mining',
            y: 19574.00
        }, {
            name: 'Public Administration',
            y: 104258.00
        }, {
            name: 'Services',
            y: 1397922.00
        }, {
            name: 'Transport',
            y: 177329.00
        },{
            name: 'Utilities',
            y: 	71189.00
        }],
        dataLabels: {
            enabled: true
        }
    }]
});
Highcharts.chart('bar', {
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
                color : 'white'
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
            ['2000', 1038.91       ],
            ['2001', 957.28        ],
            ['2002', 1000.07       ],
            ['2003', 1010.55       ],
            ['2004', 1079.04     ],
            ['2005', 1194.70        ],
            ['2006', 1391.77      ],
            ['2007', 1672.69       ],
            ['2008', 1919.47    ],
            ['2009', 1825.34       ],
            ['2010', 2129.50       ],
            ['2011', 2352.52       ],
            ['2012', 2581.82       ],
            ['2013', 2760.29       ],
            ['2014', 2842.94      ],
            ['2015', 2878.34        ],
            ['2016', 2950.91       ],
            ['2017', 2988.95      ]
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