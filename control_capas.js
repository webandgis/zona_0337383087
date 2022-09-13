// ETIQUETAS IDE
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;

var wms2 = new L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {
layers: 'Webmap2:tramos_canelones',
format: 'image/png',
transparent: true,
zIndex: 1000,
bringToFront: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution",
pane: 'labels'

}).addTo(map);



// Geoservicio WMS

var wms11 = L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {

layers: 'Webmap2:0337383087',
format: 'image/png',
transparent: true,
bringToFront: false,
bringToBack: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"

}).addTo(map);

var wms0 = new L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {
layers: 'Webmap2:r_hidro',
format: 'image/png',
transparent: true,
bringToFront: false,
bringToBack: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"
}).addTo(map);

 
var wms1 =new  L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {
layers: 'Webmap2:RUTA',
format: 'image/png',
transparent: true,
bringToFront: false,
bringToBack: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"

}).addTo(map);

 

 

var wms3 = new L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {
layers: 'Webmap2:ast',
format: 'image/png',
bringToFront: false,
bringToBack: true,
transparent: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"

}).addTo(map);
 

var wms4 = new L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {
layers: 'Webmap2:chab',
format: 'image/png',
bringToFront: false,
bringToBack: true,
transparent: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"

}).addTo(map);

 

var wms5 = new L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {
layers: 'Webmap2:pza',
format: 'image/png',
bringToFront: false,
bringToBack: true,
transparent: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"

}).addTo(map);

var wms6 =new L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {
layers: 'Webmap2:hidro',
format: 'image/png',
bringToFront: false,
transparent: true,
bringToBack: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"
}).addTo(map);



var wms8 = L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {

layers: 'Webmap2:vsl',
format: 'image/png',
bringToFront: false,
bringToBack: true,
transparent: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"

}).addTo(map);

var wms9 = L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {

layers: 'Webmap2:r_viasf',
format: 'image/png',
bringToFront: false,
bringToBack: true,
transparent: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"

}).addTo(map);

var wms7 = L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {

layers: 'Webmap2:manza',
format: 'image/png',
bringToFront: false,
bringToBack: true,
transparent: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"

}).addTo(map);

/* var wms12 = L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2/wms", {

layers: 'Webmap2:zonasCanelones',
format: 'image/png',
transparent: true,
version: '1.1.0',
maxZoom: 20,
attribution: "myattribution"

}).addTo(map); */



/* ordenar */

/* var wms10 = L.tileLayer.wms("http://172.22.14.91:8080/geoserver/Webmap2geotiff/wms", {

    layers: 'Webmap2geotiff:Asentamiento_Pando_mosaic_georeferenciado',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    maxZoom: 20,
    attribution: "myattribution"
    
    }).addTo(map); */


var fondo= new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd'}).addTo(map);


    

var base = {
    'White Background':  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
subdomains: 'abcd',
maxZoom: 20,
}),
    

    'Google ': new L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
    })
  };

 



  var WMS = {

            /* 'Zunas urbanas': wms12, */
             'Zona 0337383087':wms11,  
             'Hidrografía rural': wms0,
             'Hidrografía': wms6,
             'Rutas': wms1,
             'Calles IDE': wms2,
             'Asentamientos': wms3,
             'Complejos Habitacionales': wms4,
             'Plazas': wms5,             
             'Manzanas':wms7,
             'Visuales': wms8,
             'Vias Ferreas': wms9,
             /* 'vuelo_Pando_Julio2022': wms10, */
            

             };
  
      



//Add layer control

L.control.layers(base,WMS).addTo(map);

