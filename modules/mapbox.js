import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { isMobile } from './scroller.js';


mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const createMap = (data) => {	// Create a map instance
	const map = new mapboxgl.Map({  // Add stuff to map
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/dark-v11', // style URL
		center: [0.472944, 44.42004], // starting position [lng, lat]
		zoom: 5,
		minZoom: isMobile ? 0 : 3 // starting zoom
	});
	map.scrollZoom.disable();
/*
	map.on('style.load', () => {
    map.setConfigProperty('basemap', 'lightPreset', 'night');
	});
*/	
	const markersById = {};
	let markerClicked = false;

	data.map(item => {
		if (!item.stadiums) return;

		markersById[item.id] = item.stadiums.map(stadium => {
			const marker = new mapboxgl.Marker({
				className: "marker",
				color: "#050c1c",
				scale: 1.5
			})
			.setLngLat(stadium.coordinates)
			.addTo(map)

			const infoPopup = new mapboxgl.Popup({
				className: "infoPopup",
				closeButton: false,
				closeOnClick: false,
				offset: [0, -55]
			})
			.setHTML(`
				<div class="popup-content">
					<h3>${stadium.name}</h3>
				</div>
			`)

			marker.getElement().addEventListener("mouseenter", () => {
				infoPopup
				.setLngLat(stadium.coordinates)
				.addTo(map)
			})

			marker.getElement().addEventListener("mouseleave", () => {
				infoPopup
				.remove()
			})
			
			marker.getElement().addEventListener("click", () => {
				if (markerClicked === false) {
					map.flyTo({
						center: stadium.coordinates,
						pitch: 60,
						zoom: 17
					})
					markerClicked = true; 
				} else {
					map.flyTo({
						center: stadium.coordinates,
						zoom: 5
					}) 
					markerClicked = false;
				}
			})

			return marker;
		});
	});
	return { map, markersById };
};

export { createMap };
