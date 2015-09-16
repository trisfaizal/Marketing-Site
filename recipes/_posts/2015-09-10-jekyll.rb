---
layout: post
title: Jekyll test
header: Jekyll test
category: Jekyll
author: mike
---



<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false&amp;v=3&amp;libraries=visualization"></script>

<script type="text/javascript">
  if (window.location.protocol == "file:") {
    alert('This script only works when loaded from a web server,' +
        ' not from a file on your computer.');
  }
  function ftOnLoadClientApi() {
    gapi.client.setApiKey('AIzaSyAQANqXEvTwOUjTHJ_CvsE2cPIMie_O3OU');
  }
</script>
<script type="text/javascript" src="https://apis.google.com/js/client.js?onload=ftOnLoadClientApi">
</script>

<script type="text/javascript">
  var map;

  function loadApi() {
    gapi.client.load('fusiontables', 'v1', initialize);
  }

  function initialize() {
    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
      var viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
    var mapDiv = document.getElementById('googft-mapCanvas');
    mapDiv.style.width = isMobile ? '100%' : '500px';
    mapDiv.style.height = isMobile ? '100%' : '300px';
    map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(39.8096413133672, 286.74445727812497),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var query = 'select col1, col2 from 10_BFIZ5h1wISYWWF-todIZ6Fey9Hf0nLgr9Y_m_D limit 1000';
    var request = gapi.client.fusiontables.query.sqlGet({ sql: query });
    request.execute(function(response) {
      onDataFetched(response);
    });
  }

  function onDataFetched(response) {
    if (response.error) {
      alert('Unable to fetch data. ' + response.error.message +
          ' (' + response.error.code + ')');
    } else {
      drawHeatmap(extractLocations(response.rows));
    }
  }

  function extractLocations(rows) {
    var locations = [];
    for (var i = 0; i < rows.length; ++i) {
      var row = rows[i];
      if (row[0]) {
        var lat = row[0];
        var lng = row[1];
        if (lat && lng && !isNaN(lat) && !isNaN(lng)) {
          var latLng = new google.maps.LatLng(lat, lng);
          locations.push(latLng);
        }
      }
    }
    return locations;
  }

  function drawHeatmap(locations) {
    var heatmap = new google.maps.visualization.HeatmapLayer({
       dissipating: true,
       gradient: [
         'rgba(102,255,0,0)',
         'rgba(147,255,0,1)',
         'rgba(193,255,0,1)',
         'rgba(238,255,0,1)',
         'rgba(244,227,0,1)',
         'rgba(244,227,0,1)',
         'rgba(249,198,0,1)',
         'rgba(255,170,0,1)',
         'rgba(255,113,0,1)',
         'rgba(255,57,0,1)',
         'rgba(255,0,0,1)'
       ],
       opacity: 0.81,
       radius: 19,
       data: locations
    });
    heatmap.setMap(map);
  }

  google.maps.event.addDomListener(window, 'load', loadApi);
</script>

<div id="googft-mapCanvas"></div>
