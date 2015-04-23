$(document).ready(function(){
	function initialize(){
		var mapProp = {
			// where to focus the center of the map
			center: new google.maps.LatLng(51.508742,-0.120850),
			// how much to zoom in 0= full earth view
			zoom: 7,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
		};
		var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	}
	google.maps.event.addDomListener(window, 'load', initialize);
});