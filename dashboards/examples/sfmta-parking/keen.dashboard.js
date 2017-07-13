var client = new Keen({
  projectId: "5368fa5436bf5a5623000000",
  readKey: "3f324dcb5636316d6865ab0ebbbbc725224c7f8f3e8899c7733439965d6d4a2c7f13bf7765458790bd50ec76b4361687f51cf626314585dc246bb51aeb455c0a1dd6ce77a993d9c953c5fc554d1d3530ca5d17bdc6d1333ef3d8146a990c79435bb2c7d936f259a22647a75407921056"
});

var geoProject = new Keen({
  projectId: "53eab6e12481962467000000",
  readKey: "d1b97982ce67ad4b411af30e53dd75be6cf610213c35f3bd3dd2ef62eaeac14632164890413e2cc2df2e489da88e87430af43628b0c9e0b2870d0a70580d5f5fe8d9ba2a6d56f9448a3b6f62a5e6cdd1be435c227253fbe3fab27beb0d14f91b710d9a6e657ecf47775281abc17ec455"
});

Keen.ready(function(){

  // ----------------------------------------
  // Mapbox Demo
  // ----------------------------------------
  var DEFAULTS = {
    coordinates: {
      lat: 37.77350,
      lng: -122.41104
    },
    zoom: 15
  };

  var map,
      markerStart = DEFAULTS.coordinates,
      activeMapData;


    L.mapbox.accessToken = "pk.eyJ1Ijoia2Vlbi1pbyIsImEiOiIza0xnNXBZIn0.PgzKlxBmYkOq6jBGErpqOg";
    map = L.mapbox.map("map", "keen-io.kae20cg0", {
      attributionControl: true,
      center: [markerStart.lat, markerStart.lng],
      zoom: DEFAULTS.zoom
    });
    var center = map.getCenter();
    var zoom = map.getZoom();

    z = zoom-1;
    if (zoom = 0){
      radius = false;
    }
    else {
      radius = 10000/Math.pow(2,z);
    }

    var geoFilter = [];
    geoFilter.push({
      property_name: "user.age",
      operator: "lt",
      property_value: "50"
    });
    geoFilter.push({
      property_name : "keen.location.coordinates",
      operator : "within",
      property_value: {
        coordinates: [center.lng, center.lat],
        max_distance_miles: radius
      }
    });

    var geoFilter2 = [];
    geoFilter2.push({
      property_name: "user.age",
      operator: "gt",
      property_value: "50"
    });
    geoFilter2.push({
      property_name : "keen.location.coordinates",
      operator : "within",
      property_value: {
        coordinates: [center.lng, center.lat],
        max_distance_miles: radius
      }
    });

    activeMapData = L.layerGroup().addTo(map);

    map.attributionControl.addAttribution('<a href="https://keen.io/">Custom Analytics by Keen IO</a>');

    var scoped_events = new Keen.Query("select_unique", {
      eventCollection: "status_update",
      targetProperty: "keen.location.coordinates",
      filters: geoFilter
    });
    geoProject.run(scoped_events, function(err, res){
      console.log("events", res);

      Keen.utils.each(res.result, function(coord, index){
        var em = L.marker(new L.LatLng(coord[1], coord[0]), {
          icon: L.mapbox.marker.icon({
              "marker-color": Keen.Dataviz.defaults.colors[0]
            })
        }).addTo(activeMapData);
      });
    });

    var scoped_events_2 = new Keen.Query("select_unique", {
      eventCollection: "status_update",
      targetProperty: "keen.location.coordinates",
      filters: geoFilter2
    });
    geoProject.run(scoped_events_2, function(err, res){
      console.log("events", res);

      Keen.utils.each(res.result, function(coord, index){
        var em = L.marker(new L.LatLng(coord[1], coord[0]), {
          icon: L.mapbox.marker.icon({
              "marker-color": Keen.Dataviz.defaults.colors[1]
            })
        }).addTo(activeMapData);
      });
    });

    map.on('zoomend', function(e) {
      resize();
    });
    map.on('dragend', function(e) {;
      resize();
    });



  var resize = function(){
    activeMapData.clearLayers();

    center = map.getCenter(),
    zoom = map.getZoom();

    z = zoom-1;
    if (zoom = 0){
      radius = false;
    }
    else {
      radius = 10000/Math.pow(2,z);
    }
    geoFilter.pop();
    geoFilter.push({
      property_name : "keen.location.coordinates",
      operator : "within",
      property_value: {
        coordinates: [center.lng, center.lat],
        max_distance_miles: radius
      }
    });

    geoFilter2.pop();
    geoFilter2.push({
      property_name : "keen.location.coordinates",
      operator : "within",
      property_value: {
        coordinates: [center.lng, center.lat],
        max_distance_miles: radius
      }
    });


    var scoped_events_3 = new Keen.Query("select_unique", {
      eventCollection: "status_update",
      targetProperty: "keen.location.coordinates",
      filters: geoFilter
    });
    geoProject.run(scoped_events_3, function(err, res){
      console.log("events", res);

      Keen.utils.each(res.result, function(coord, index){
        var em = L.marker(new L.LatLng(coord[1], coord[0]), {
          icon: L.mapbox.marker.icon({
              "marker-color": Keen.Dataviz.defaults.colors[0]
            })
        }).addTo(activeMapData);
      });
    });

    var scoped_events_4 = new Keen.Query("select_unique", {
      eventCollection: "status_update",
      targetProperty: "keen.location.coordinates",
      filters: geoFilter2
    });
    geoProject.run(scoped_events_4, function(err, res){
      console.log("events", res);

      Keen.utils.each(res.result, function(coord, index){
        var em = L.marker(new L.LatLng(coord[1], coord[0]), {
          icon: L.mapbox.marker.icon({
              "marker-color": Keen.Dataviz.defaults.colors[1]
            })
        }).addTo(activeMapData);
      });
    });
  };



  // ----------------------------------------
  // Violations line chart
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageviews",
    interval: "hourly",
    groupBy: "user.device_info.browser.family",
    timeframe: {
      start: "2014-05-04T00:00:00.000Z",
      end: "2014-05-05T00:00:00.000Z"
    }
  });
  client.draw(pageviews_timeline, document.getElementById("chart-01"), {
    chartType: "linechart",
    title: null,
    height: 175,
    width: "auto",
    colors: null,
    chartOptions: {
      legend: { position: "none" },
      tooltip: { trigger: 'none' },
      chartArea: {
        left: "5%",
        top: "5%",
        height: "85%",
        width: "95%"
      }
    }
  });


  // ----------------------------------------
  // Violations
  // ----------------------------------------
  var impressions_timeline = new Keen.Query("count", {
    eventCollection: "impressions",
    groupBy: "ad.advertiser",
    interval: "hourly",
    timeframe: {
      start: "2014-05-04T00:00:00.000Z",
      end: "2014-05-05T00:00:00.000Z"
    }
  });
  client.draw(impressions_timeline, document.getElementById("chart-03"), {
    chartType: "columnchart",
    title: false,
    height: 175,
    width: "auto",
    chartOptions: {
      legend: { position: "none" },
      tooltip: { trigger: 'none' },
      chartArea: {
        left: "5%",
        top: "5%",
        height: "85%",
        width: "93%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });

  // ----------------------------------------
  // Violations by Officer
  // ----------------------------------------
  var impressions_timeline_by_country = new Keen.Query("count", {
    eventCollection: "pageviews",
    interval: "hourly",
    timeframe: {
      start: "2014-04-30T12:00:00.000Z",
      end: "2014-05-05T00:00:00.000Z"
    }
  });
  client.draw(impressions_timeline_by_country, document.getElementById("chart-05"), {
    chartType: "columnchart",
    title: false,
    height: 175,
    width: "auto",
    chartOptions: {
      legend: { position: "none" },
      tooltip: { trigger: 'none' },
      chartArea: {
        left: "5%",
        top: "5%",
        height: "85%",
        width: "93%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


});
