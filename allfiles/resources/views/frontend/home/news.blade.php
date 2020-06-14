@extends('frontend.layout.master')

@section('content')



<div class="container">
    <a href="#">
        <img class="img-responsive" src="/uploads/Summer-Card-Kitex-Hodex-Home.gif" alt="بنر اقساطی جدید" />
    </a>
</div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://leaflet.github.io/Leaflet.markercluster/example/screen.css" />
<link rel="stylesheet" href="https://leaflet.github.io/Leaflet.markercluster/dist/MarkerCluster.css" />
<link rel="stylesheet" href="https://leaflet.github.io/Leaflet.markercluster/dist/MarkerCluster.Default.css" />
<script src="https://leaflet.github.io/Leaflet.markercluster/dist/leaflet.markercluster-src.js"></script>
<script type="text/javascript">
    var boxes;
		var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://moblabad.com">Moblabad.com</a>  &copy 2019-2020'
			}),
			latlng = L.latLng(32.32428, 53.96484);

		var map = L.map('map', {center: latlng, zoom: 6, layers: [tiles]});

        var LeafIcon = L.Icon.extend({
            options: {
                shadowUrl: 'leaf-shadow.png',
                iconSize:     [38, 95],
                shadowSize:   [50, 64],
                iconAnchor:   [22, 94],
                shadowAnchor: [4, 62],
                popupAnchor:  [-3, -76]
            }
	    });
		var markers = L.markerClusterGroup();
</script>


<div class="container-fluid white-background negative-margin">
    <div class="container">
        <div class="modular_module home-page-content thumb" style="margin: 0;">


            <div class="clearfix">
            <h1>{{$posts->title}}</h1>
                <img class="img-thumbnail img2"  src="{{$posts->photo->path}}" alt="{{$posts->title}}" width="300" height="200">
                {!!$posts->descriptin!!}
            </div>

        </div>
    </div>
</div>
<style>



    .clearfix {
        overflow: auto;
    }

    .img2 {
        float: right;
        margin: 0 0 0px 10px;
    }
</style>

@endsection
