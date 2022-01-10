

const cumulativeSum = (sum => value => sum += value)(0);

const xAxis2 = Array.from({length: arrayOfPrices.length}, (_, index) => index + 1);

const trace2 = {
  type: 'pizza',
  x: xAxis2,
  y: arrayOfPrices.map(cumulativeSum),
  marker: {
      color: '#C8A2C8',
      line: {
          width: 2.5
      }
  }
};

var data2 = [ trace2 ];

var layout2 = { 
  title: 'Valor do Investimento por Cômodo',
  font: {size: 18}
};

var config2 = {responsive: true}

let divLinePlotCumulative = document.getElementById("linePlotCumulative")

Plotly.newPlot(divLinePlotCumulative, data2, layout2, config2 );
