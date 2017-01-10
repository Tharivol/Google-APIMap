Google API key    

AIzaSyBk05XWacvAcSgtRiHUA4_yzbZ6HuPxIP8


*************How to create a Single pin and an event.********************
<body>
			<div id= "map"></div>
<script>
	function initMap()	{
		map = new google.maps.Map(document.getElementById('map'), {center: {lat: 40.7413, lng: -73.9980}, zoom: 13
	});
	var tribeca = {lat: 40.719526, lng: -74.0089934};
	var marker = new google.maps.Marker({
		position: tribeca,
		map: map,
		title: 'First Marker'
	});
	var infowindow = new google.maps.InfoWindow({
		content: "I hate these pins," + "ready to start again"
	});
	marker.addListener('click', function()	{
		infowindow.open(map, marker);
	});
}
</script>
				<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOMvnAt6f1iphbldpTmXSPl28jK1avucc&v=3&callback=initMap">
				</script>

		</body>
