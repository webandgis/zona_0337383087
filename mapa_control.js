let map = L.map('map').setView([-34.809, -55.931],18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleSat.addTo(map);


// Menu desplegable seleccion
document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);

});
// Set style function that sets fill color property



// POPUP
function popup(feature,layer){
    if(feature.properties && feature.properties.CODCOMP){
        layer.bindPopup("<strong>CODCOMP: </strong>" + feature.properties.CODCOMP + "<br/>" + "<strong>Localidad: </strong>" + feature.properties.NOMBLOC);
    }
}

/* L.geoJson(zonasCanelones).addTo(map); */


var info = L.control();





// Crear la funcion para mostrar la simbologia de acuerdo al campo CODCOMP

function style(feature){
    return {
    
        weight: 2,
        opacity: 100,
        color: 'red',
        dashArray: '0',
        fillOpacity: 0,
        
    };
}


// AGregar interaccion del puntero con la capa para resaltar el objeto

        // resaltar
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#900',
        dashArray: '',
        fillOpacity: 0
    });

    info.update(layer.feature.properties);
}





        // una función que se llama en cada característica antes de agregarla a una capa GeoJSON . 
function onEachFeature(feature, layer){
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature,
       
        
    });
}



// Agregar capa en formato GeoJson
 zonasCanelnes = L.geoJson(zonasCanelones,{
    style: style,
    onEachFeature: onEachFeature,
    onEachFeature: popup
}).addTo(map);




/* chab = L.geoJson(chab,{
 
    onEachFeature: onEachFeature,
    onEachFeature: popup
}).addTo(map); */



/* marcadores de geoservicos */
L.geoJson(servicios).addTo(map);







