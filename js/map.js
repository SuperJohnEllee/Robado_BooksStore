// Regular map but its not working, I think it on my API Key
function ellee_map() {  
    var ellee_location = new google.maps.LatLng(11.7041593,122.3639859);

    var ellee_map_options = {
        center: ellee_location,
        zoom: 15,
    };

    var ellee_map = new google.maps.Map(document.getElementById("ellee_map"), ellee_map_options);

    var elle_marker = new google.maps.Marker({
        position: ellee_location,
        map: ellee_map,
        title: "Ellee Book Store",
        animation: google.maps.Animation.DROP,
    });
    elle_marker.setMap(ellee_map);
}
// Initialize maps
google.maps.event.addDomListener(window, 'load', ellee_map);