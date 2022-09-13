var chab = $.ayax({

   URL: "http://localhost:8080/geoserver/Webmap2/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Webmap2%3Achab&maxFeatures=450&outputFormat=application%2Fjson",
    datatype: "json",
    success: console.log("hola"),
    error: function (xhr){
        alert(xhr.statusText)
    }



});