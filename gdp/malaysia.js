Highcharts.chart('container_my', {
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
            value: 28.9,
            colorValue: 6
        }, {
            name: 'Taxes on income, profits and capital gains',
            value: 46.9,
            colorValue: 7
        }, {
            name: 'Taxes on international trade',
            value: 1.8,
            colorValue: 2
        }, {
            name: 'Taxes less subsidies on products',
            value: 7.8,
            colorValue: 4
        }, {
            name: 'Taxes on exports',
            value: 0.5,
            colorValue: 1
        },{
            name: 'Other taxes',
            value: 2,
            colorValue: 3
        },{
            name: 'Other',
            value: 12.1,
            colorValue: 5
        }]
    }],
    title: {
        text: 'Government Revenue 2016',
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

Highcharts.chart('container2_my', {
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
        ['2000', 93.79   ],
        ['2001', 92.78    ],
        ['2002', 100.85    ],
        ['2003', 110.20   ],
        ['2004', 124.75   ],
        ['2005', 143.53    ],
        ['2006', 162.89    ],
        ['2007', 193.55     ],
        ['2008', 230.81    ],
        ['2009', 202.26   ],
        ['2010', 255.02   ],
        ['2011', 297.95   ],
        ['2012', 314.44    ],
        ['2013', 323.28  ],
        ['2014', 338.06   ],
        ['2015', 296.63  ],
        ['2016', 296.75   ],
        ['2017', 314.71  ]
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

  Highcharts.chart('pie_my', {
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
        text: 'Source: <a href="https://tradingeconomics.com/malaysia/gdp">trading economics</a>',
        style: {
            color: 'white'
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>:<br>{point.y} MYR million'
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
            y: 25482.00
        }, {
            name: 'Construction',
            y: 13695.00
        }, {
            name: 'Manufacturing',
            y: 73565.00
        }, {
            name: 'Mining',
            y: 25461.00
        }, {
            name: 'Services',
            y: 80577.00
        }],
        dataLabels: {
            enabled: true
        },
    }]
});
Highcharts.chart('bar_my', {
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
            ['2000', 4045.17       ],
            ['2001', 3915.12        ],
            ['2002', 4167.36       ],
            ['2003', 4463.68       ],
            ['2004', 5028.75     ],
            ['2005', 5593.82        ],
            ['2006', 6222.98      ],
            ['2007', 7269.17       ],
            ['2008', 8513.63    ],
            ['2009', 7326.74       ],
            ['2010', 9071.36       ],
            ['2011', 10405.12       ],
            ['2012', 10779.51       ],
            ['2013', 10882.29       ],
            ['2014', 11183.73      ],
            ['2015', 9655.14       ],
            ['2016', 9515.194       ],
            ['2017', 9951.54      ]
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