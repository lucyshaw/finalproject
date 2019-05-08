Plotly.d3.csv("Under_5_Mortality.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; })
  }
  
  var frames = []
  var z = unpack(rows, 'Mortality')
  var locations = unpack(rows, 'ISO Code')

  var n = 28;
  var j = 195;
  var k = 0;
  var num = 1989
  for (var i = 0; i < n; i++) {
    k++
    j = 195
    j = j*k
    num++
    frames[i] = {data: [{z: [], locations: []}], name: num}
    frames[i].data[0].z = z.slice(0, j);
    frames[i].data[0].locations = locations.slice(0, j);
  }

  var data = [{
    type: 'choropleth',
    locationmode: 'ISO-3',
    locations: frames[0].data[0].locations,
    z: frames[0].data[0].z,
    text: frames[0].data[0].locations,
    colorscale: 'YIOrRd',   
    autocolorscale: false,
    reversescale: true,
    marker: {
        line: {
            color: 'rgb(180,180,180)',
            width: 0.5
        }
    },
    tick0: 0,
    zmin: 0,
    dtick: 1000,
    colorbar: {
        autotic: false,
        title: 'Child Mortality Rate: Deaths per 1000'
    }
}];

var layout = {
    title: 'USA State Population<br>2010 - 2016',
    geo:{
        scope: 'world',
        countrycolor: 'rgb(255, 255, 255)',
       showland: true,
       landcolor: 'rgb(217, 217, 217)',
       showlakes: true,
       lakecolor: 'rgb(255, 255, 255)',
       subunitcolor: 'rgb(255, 255, 255)',
       lonaxis: {},
       lataxis: {}
    },
    updatemenus: [{
      x: 0.1,
      y: 0,
      yanchor: "top",
      xanchor: "right",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 87, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500,
            redraw: false
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0,
              redraw: false
            }
          }
        ],
        label: "Pause"
      }]
    }],
    sliders: [{
      active: 0,
      steps: [{
        label: "1990",
        method: "animate",
        args: [["1990"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "1991",
        method: "animate",
        args: [["1991"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "1992",
        method: "animate",
        args: [["1992"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "1993",
        method: "animate",
        args: [["1993"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "1994",
        method: "animate",
        args: [["1994"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "1995",
        method: "animate",
        args: [["1995"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "1996",
        method: "animate",
        args: [["1996"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "1997",
        method: "animate",
        args: [["1997"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "1998",
        method: "animate",
        args: [["1998"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "1999",
        method: "animate",
        args: [["1999"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2000",
        method: "animate",
        args: [["2000"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2001",
        method: "animate",
        args: [["2001"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2002",
        method: "animate",
        args: [["2002"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2003",
        method: "animate",
        args: [["2003"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2004",
        method: "animate",
        args: [["2004"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2005",
        method: "animate",
        args: [["2005"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2006",
        method: "animate",
        args: [["2006"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2007",
        method: "animate",
        args: [["2007"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2008",
        method: "animate",
        args: [["2008"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2009",
        method: "animate",
        args: [["2009"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2010",
        method: "animate",
        args: [["2010"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2011",
        method: "animate",
        args: [["2011"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2012",
        method: "animate",
        args: [["2012"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2013",
        method: "animate",
        args: [["2013"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2014",
        method: "animate",
        args: [["2014"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2015",
        method: "animate",
        args: [["2015"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2016",
        method: "animate",
        args: [["2016"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },
      {
        label: "2017",
        method: "animate",
        args: [["2017"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }],
      x: 0.1,
      len: 0.9,
      xanchor: "left",
      y: 0,
      yanchor: "top",
      pad: {t: 50, b: 10},
      currentvalue: {
        visible: true,
        prefix: "Year:",
        xanchor: "right",
        font: {
          size: 20,
          color: "#666"
        }
      },
      transition: {
        duration: 300,
        easing: "cubic-in-out"
      }
    }]
};

Plotly.plot(myDiv, data, layout).then(function() {
    Plotly.addFrames('myDiv', frames); 
  });
}) 