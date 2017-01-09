

var map;

var markers =[];

function initMap()	{
// this creates a new map
map = new google.maps.Map(document.getElementById('map'), {center: {lat: 40.7413, lng: -73.9980}, zoom: 13 });
}

// An example of a single pin drop.
// var tribeca = {lat: 40.719526, lng: -74.0089934};
// var marker = new google.maps.Marker({position: tribeca, map: map, title: 'First Marker!'
// });

var locations =[
	{title: 'park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
	{title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -739949465}}
	];
	
var largeInfowindow = new google.maps.InfoWindow(); 

// 

for (var i=0; i < locations.length; i++)	{
	// get the position from the location array.
	var position = locations[i].location; 
	var title = locations[i].title;
	// create a marker per location, and put into the markers array
	var marker = new google.maps.Marker({
		map: map,
		position: position,
		title: title,
		animation: google.mpaps.Animation.DROP,
		id: i
	});

	// Push the marker to our array of markers.
marker.addLinstener('click', function ()	{
	populateInfoWindow(this, largeInfowindow);
});
}























