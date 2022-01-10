d3.csv(
  "https://gist.githubusercontent.com/israel-assis/c1289d9e11e2c00396488aa553ce6b72/raw/df6c4acd4fd8a95d6f22500da9d72838ba912535/project-environments-items.csv",
  function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }	
	
	const brazilianRealLocale = Intl.NumberFormat('pt-BR',{});
	
	const arrayOfPricesBRL = arrayOfPrices.map(brazilianRealLocale.format)
	
    var data = [
      {
        type: "sunburst",
        maxdepth: 3,
        ids: unpack(rows, "ids"),
        labels: unpack(rows, "labels"),
        parents: unpack(rows, "parents"),
        values: arrayOfPrices,
      },
    ];

    var layout = {
      margin: { l: 0, r: 0, b: 20, t: 0 },
      sunburstcolorway: [
        "#636efa",
        "#EF553B",
        "#00cc96",
        "#ab63fa",
        "#19d3f3",
        "#e763fa",
        "#FECB52",
        "#FFA15A",
        "#FF6692",
        "#B6E880",
      ],
      extendsunburstcolorway: true,
    };

    Plotly.newPlot("sunburstPlot", data, layout, { showSendToCloud: true });
  }
);
