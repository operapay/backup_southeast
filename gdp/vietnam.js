Highcharts.chart('container_vi', {
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
            value: 38.2,
            colorValue: 5
        }, {
            name: 'Taxes on income, profits and capital gains',
            value: 33.8,
            colorValue: 4
        }, {
            name: 'Taxes on international trade',
            value: 9.5,
            colorValue: 2
        }, {
            name: 'Other taxes',
            value: 1.6,
            colorValue: 1
        },{
            name: 'Other',
            value: 16.9,
            colorValue: 3
        }]
    }],
    title: {
        text: 'Government Revenue 2013',
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

Highcharts.chart('container2_vi', {
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
        ['2000', 31.17  ],
        ['2001', 32.69  ],
        ['2002', 35.06  ],
        ['2003', 39.55  ],
        ['2004', 45.43  ],
        ['2005', 57.63 ],
        ['2006', 66.37 ],
        ['2007', 77.41 ],
        ['2008', 99.13 ],
        ['2009', 106.01 ],
        ['2010', 115.93 ],
        ['2011', 135.54 ],
        ['2012', 155.82 ],
        ['2013', 171.22 ],
        ['2014', 186.20 ],
        ['2015', 193.24 ],
        ['2016', 205.28 ],
        ['2017', 223.78 ]
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

  Highcharts.chart('pie_vi', {
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
        text: 'Source: <a href="https://tradingeconomics.com/vietnam/gdp">tradingeconomics</a>',
        style: {
            color: 'white'
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>:<br>{point.y} VND million'
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
            y: 72261.00
        }, {
            name: 'Construction',
            y: 34336.00
        }, {
            name: 'Manufacturing',
            y: 138396.00
        }, {
            name: 'Mining',
            y: 38180.00
        }, {
            name: 'Public Administration',
            y: 18753.00
        }, {
            name: 'Services',
            y: 276919.00
        }, {
            name: 'Transport',
            y: 21656.00
        }, {
            name: 'Utilities',
            y: 4385.00
        }],
        dataLabels: {
            enabled: true
        },
    }]
});
Highcharts.chart('bar_vi', {
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
            ['2000', 388.3 ],
            ['2001', 402.8  ],
            ['2002', 427.8 ],
            ['2003', 478.0 ],
            ['2004', 543.9 ],
            ['2005', 683.6 ],
            ['2006', 780.0 ],
            ['2007', 901.3 ],
            ['2008', 1143.3 ],
            ['2009', 1210.7 ],
            ['2010', 1310.4 ],
            ['2011', 1515.5 ],
            ['2012', 1722.7 ],
            ['2013', 1871.3 ],
            ['2014', 2012.0 ],
            ['2015', 2065.2 ],
            ['2016', 2170.6 ],
            ['2017', 2342.2 ]
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