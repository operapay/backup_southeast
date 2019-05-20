Highcharts.chart('container_in', {
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
            value: 35.6,
            colorValue: 4
        }, {
            name: 'Taxes on income, profits and capital gains',
            value: 42.6,
            colorValue: 5
        }, {
            name: 'Taxes on international trade',
            value: 2.2,
            colorValue: 2
        }, {
            name: 'Other taxes',
            value: 1.6,
            colorValue: 1
        },{
            name: 'Other',
            value: 18.0,
            colorValue: 3
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

Highcharts.chart('container2_in', {
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
        ['2000', 165.02  ],
        ['2001', 160.45  ],
        ['2002', 195.66  ],
        ['2003', 234.77  ],
        ['2004', 256.84  ],
        ['2005', 285.87 ],
        ['2006', 364.57 ],
        ['2007', 432.22 ],
        ['2008', 510.23 ],
        ['2009', 539.58 ],
        ['2010', 755.09 ],
        ['2011', 892.97 ],
        ['2012', 917.87 ],
        ['2013', 912.52 ],
        ['2014', 890.81 ],
        ['2015', 860.85 ],
        ['2016', 932.26 ],
        ['2017', 1015.54 ]
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

  Highcharts.chart('pie_in', {
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
        text: 'Source: <a href="https://tradingeconomics.com/indonesia/gdp">tradingeconomics</a>',
        style: {
            color: 'white'
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>:<br>{point.y} IDR million'
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
            y: 46173.20
        }, {
            name: 'Construction',
            y: 277871.90
        }, {
            name: 'Manufacturing',
            y: 553239.30
        }, {
            name: 'Mining',
            y: 200377.20
        }, {
            name: 'Services',
            y: 48493.30
        }, {
            name: 'Utilities',
            y: 37882.20
        }],
        dataLabels: {
            enabled: true
        },
    }]
});
Highcharts.chart('bar_in', {
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
            ['2000', 780.1 ],
            ['2001', 748.0  ],
            ['2002', 899.6 ],
            ['2003', 1064.5 ],
            ['2004', 1148.6 ],
            ['2005', 1260.9 ],
            ['2006', 1586.2 ],
            ['2007', 1855.1 ],
            ['2008', 2160.5 ],
            ['2009', 2254.4 ],
            ['2010', 3113.5 ],
            ['2011', 3634.3 ],
            ['2012', 3688.0 ],
            ['2013', 3620.7 ],
            ['2014', 3491.6 ],
            ['2015', 3334.5 ],
            ['2016', 3570.3 ],
            ['2017', 3846.9 ]
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