Plotly.d3.csv('Under_5_Mortality_2017_withcountries.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

       var data = [{
            type: 'choropleth',
            locations: unpack(rows, 'ISO Code'),
            z: unpack(rows, 2017.5),
            text: unpack(rows, 'Country Name'),
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
                title: 'Child Mortality Rate:<br>Deaths per 1000 Live Births',
                titlefont: {
                    family: 'Karla-Regular',
                    size: 20,
                    // color: '#547980'
                  },
            }
      }];

      var layout = {
          title: '<b>2017 Under 5 Child Mortality Rate</b><br>Source: <a href="https://data.unicef.org/topic/child-survival/under-five-mortality/"> UNICEF</a>',
          titlefont: {
            family: 'Karla-Regular',
            size: 30,
            color: '#547980'
          },
          geo:{
              showframe: false,
              showcoastlines: false,
              projection:{
                  type: 'mercator'
              }
          },
    
      };
      Plotly.plot('map', data, layout);
});