/* /Geoserver Web Feature Service */
$.ajax('http://localhost:8080/geoserver/wfs',{
  type: 'GET',
  data: {
    service: 'WFS',
    version: '1.1.0',
    request: 'GetFeature',
    typename: 'Webmap2:zonasCanelones',
    CQL_FILTER: "CODCOMP=0337383087",
    srsname: 'EPSG:4326',
    outputFormat: 'text/javascript',
    },
  dataType: 'jsonp',
  jsonpCallback:'callback:handleJson',
  jsonp:'format_options'
 });

  //Geojson style file
  var myStyle = {
         weight: 2,
        opacity: 100,
        color: 'red',
        dashArray: '0',
        fillOpacity: 0
    
  }

// the ajax callback function
function handleJson(data) {
    selectedArea = L.geoJson(data, {
      style: myStyle,
      onEachFeature: function(feature, layer) {
        layer.bindPopup(`CODCOMP: ${feature.properties.CODCOMP}`)
      }
    }).addTo(map);
  map.fitBounds(selectedArea.getBounds());
}
