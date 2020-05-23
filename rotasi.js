      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Rotasi', 2.46]
        ]);

        var options = {
          width: 400, height: 400,
          redFrom: 0, redTo: 23/7/4,
          greenFrom: 23/7*3/4, greenTo: 23/7,
          yellowFrom:23/7/4, yellowTo: 23/7/2,
          minorTicks: 4,
          max:(31/7).toFixed(2)
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

      }