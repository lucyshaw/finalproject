
Plotly.d3.csv("World_Deaths.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  
  var trace1 = {
    type: "scatter",
    mode: "lines+markers",
    name: 'World',
    x: unpack(rows, 'Year'),
    y: unpack(rows, 'World'),
    line: {width:4,
        color: '#17BECF'},
    marker: {color: '#344055',size:8},
    hoverinfo:'y'
  }
  
  var linedata = [trace1];
  
  var linelayout = {
      hovermode:'closest',
    title: 'Mortalities of Children Under 5 : 1990-2017',
    titlefont: {
        family: 'Karla-Regular',
        size: 44,
        color: '#547980'
      },
    autosize:true,
    xaxis: {
      showgrid: false,
      zeroline: false,
      hoverformat:'.2f',
      tickfont: {
        family: 'Karla-Regular',
        size: 20,
        color: 'black'
      },
    },
    yaxis: {
      title: 'Mortalities',
      titlefont: {
        family: 'Karla-Regular',
        size: 18,
        color: 'slategrey'
      },
      showline: false,
      range:[0,14000000],
      autorange:false,
      hoverformat:'.f'
    },
    font: {
        family: 'Arial',
        size: 15,
        color: '#594F4F'
      },
    annotations: [{
        xref: 'paper',
        x: 0.05,
        y: unpack(rows, 'World')[0],
        xanchor: 'right',
        yanchor: 'middle',
        text: unpack(rows, 'World')[0].substring(0,2)+'.'+unpack(rows, 'World')[0].substring(2,4) + " Million",
        showarrow: false,
        font: {
          family: 'Arial',
          size: 16,
          color: '#305F72'
        }
      },
      {
        xref: 'paper',
        x: 0.95,
        y: unpack(rows, 'World')[27],
        xanchor: 'left',
        yanchor: 'middle',
        text: unpack(rows, 'World')[27].substring(0,1)+'.'+unpack(rows, 'World')[27].substring(1,3) + " Million",
        font: {
          family: 'Arial',
          size: 16,
          color: '#305F72'
        },
        showarrow: false
      }]
  };
  
  Plotly.newPlot('worldmortality', linedata, linelayout,{responsive:true});
  })


