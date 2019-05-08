var layout = {
    title: 'Number of Children Under 5 Mortalities 1990-2017',
    titlefont: {
        family: 'Karla-Regular',
        size: 44,
        color: '#547980'
      },
    xaxis: {
      showgrid: false,
      zeroline: false,
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
    }
  };

Plotly.d3.csv("World_Deaths.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: 'Sub-Saharan Africa',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'Sub-Saharan Africa'),
    line: {color: '#594F4F'},
    fillcolor:'#594F4F',
    stackgroup:'one'
  }

  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: 'Middle East and North Africa',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'Middle East and North Africa'),
    line: {color: '#547980'},
    fillcolor: '#547980',
    stackgroup:'one'
  }
  var trace3 = {
    type: "scatter",
    mode: "lines",
    name: 'South Asia',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'South Asia'),
    line: {color: '#45ADA8'},
    fillcolor:'#45ADA8',
    stackgroup:'one'
  }
  var trace4 = {
    type: "scatter",
    mode: "lines",
    name: 'East Asia and Pacific',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'East Asia and Pacific'),
    line: {color: '#9DE0AD'},
    fillcolor:'#9DE0AD',
    stackgroup:'one'
  }
  var trace5 = {
    type: "scatter",
    mode: "lines",
    name: 'Latin America and Caribbean',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'Latin America and Caribbean'),
    line: {color:'#E5FCC2'},
    fillcolor:'#E5FCC2',
    stackgroup:'one'
  }
  var trace6 = {
    type: "scatter",
    mode: "lines",
    name: 'North America',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'North America'),
    line: {color: '#ED5642'},
    fillcolor:'#ED5642',
    stackgroup:'one'
  }
  var trace7 = {
    type: "scatter",
    mode: "lines",
    name: 'Europe and Central Asia',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'Europe and Central Asia'),
    line: {color: '#E8D17F'},
    fillcolor: '#E8D17F',
    stackgroup:'one'
  }

    
var data=[trace1,trace2,trace3,trace4,trace5,trace6,trace7];
Plotly.newPlot('stacked', data, layout);
});

function shadeAfrica() {Plotly.d3.csv("World_Deaths.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Sub-Saharan Africa',
        x: unpack(rows, 'Year'),
      y: unpack(rows, 'Sub-Saharan Africa'),
        line: {color: '#344055'},
        fillcolor:'#344055',
        stackgroup:'one'
      }
      var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Middle East and North Africa',
        x: unpack(rows, 'Year'),
      y: unpack(rows, 'Middle East and North Africa'),
        line: {color: '#DFC2F2'},
        fillcolor: '#DFC2F2',
        stackgroup:'one'
      }
      var trace3 = {
        type: "scatter",
        mode: "lines",
        name: 'South Asia',
        x: unpack(rows, 'Year'),
      y: unpack(rows, 'South Asia'),
        line: {color: '#DFC2F2'},
        fillcolor:'#DFC2F2',
        stackgroup:'one'
      }
      var trace4 = {
        type: "scatter",
        mode: "lines",
        name: 'East Asia and Pacific',
        x: unpack(rows, 'Year'),
      y: unpack(rows, 'East Asia and Pacific'),
        line: {color: '#DFC2F2'},
        fillcolor:'#DFC2F2',
        stackgroup:'one'
      }
      var trace5 = {
        type: "scatter",
        mode: "lines",
        name: 'Latin America and Caribbean',
        x: unpack(rows, 'Year'),
      y: unpack(rows, 'Latin America and Caribbean'),
        line: {color:'#DFC2F2'},
        fillcolor:'#DFC2F2',
        stackgroup:'one'
      }
      var trace6 = {
        type: "scatter",
        mode: "lines",
        name: 'North America',
        x: unpack(rows, 'Year'),
      y: unpack(rows, 'North America'),
        line: {color: '#DFC2F2'},
        fillcolor:'#DFC2F2',
        stackgroup:'one'
      }
      var trace7 = {
        type: "scatter",
        mode: "lines",
        name: 'Europe and Central Asia',
        x: unpack(rows, 'Year'),
      y: unpack(rows, 'Europe and Central Asia'),
        line: {color: '#DFC2F2'},
        fillcolor: '#DFC2F2',
        stackgroup:'one'
      }
      
      var data=[trace1,trace2,trace3,trace4,trace5,trace6,trace7];
    Plotly.newPlot('stacked', data,layout);
})};


function originalArea() {Plotly.d3.csv("World_Deaths.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: 'Sub-Saharan Africa',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'Sub-Saharan Africa'),
    line: {color: '#594F4F'},
    fillcolor:'#594F4F',
    stackgroup:'one'
  }

  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: 'Middle East and North Africa',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'Middle East and North Africa'),
    line: {color: '#547980'},
    fillcolor: '#547980',
    stackgroup:'one'
  }
  var trace3 = {
    type: "scatter",
    mode: "lines",
    name: 'South Asia',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'South Asia'),
    line: {color: '#45ADA8'},
    fillcolor:'#45ADA8',
    stackgroup:'one'
  }
  var trace4 = {
    type: "scatter",
    mode: "lines",
    name: 'East Asia and Pacific',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'East Asia and Pacific'),
    line: {color: '#9DE0AD'},
    fillcolor:'#9DE0AD',
    stackgroup:'one'
  }
  var trace5 = {
    type: "scatter",
    mode: "lines",
    name: 'Latin America and Caribbean',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'Latin America and Caribbean'),
    line: {color:'#E5FCC2'},
    fillcolor:'#E5FCC2',
    stackgroup:'one'
  }
  var trace6 = {
    type: "scatter",
    mode: "lines",
    name: 'North America',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'North America'),
    line: {color: '#ED5642'},
    fillcolor:'#ED5642',
    stackgroup:'one'
  }
  var trace7 = {
    type: "scatter",
    mode: "lines",
    name: 'Europe and Central Asia',
    x: unpack(rows, 'Year'),
  y: unpack(rows, 'Europe and Central Asia'),
    line: {color: '#E8D17F'},
    fillcolor: '#E8D17F',
    stackgroup:'one'
  }

    
var data=[trace1,trace2,trace3,trace4,trace5,trace6,trace7];
Plotly.newPlot('stacked', data, layout);
});}