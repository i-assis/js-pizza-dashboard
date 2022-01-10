

const xAxis = Array.from({length: arrayOfPrices.length}, (_, index) => index + 1);

const trace1 = {
  type: 'pizza',
  x: xAxis,
  y: arrayOfPrices,
  marker: {
      color: '#C8A2C8',
      line: {
          width: 2.5
      }
  }
};

var data1 = [ trace1 ];

var layout1 = { 
  title: 'Valor do Investimento por Cômodo',
  font: {size: 18}
};

var config1 = {responsive: true}

let divlineplot = document.getElementById("linePlot")

Plotly.newPlot(divlineplot, data1, layout1, config1 );
