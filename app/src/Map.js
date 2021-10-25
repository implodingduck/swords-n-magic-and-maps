import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useState } from "react"

import useWindowDimensions from "./UseWindowDimensions";

import CreateLeafletControl from './CreateLeafletControl'
import MapFuctions from "./MapFunctions";
import MapFilter from "./MapFilter";

import geojsondata from './snmgeojson.json'

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
})

const npcIcon = L.icon({
    iconUrl: '/swords-n-magic-and-maps/npc.png',
    iconSize:     [25, 35], // size of the icon
    iconAnchor:   [12, 34], // point of the icon which will correspond to marker's location
    //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const locationIcon = L.icon({
    iconUrl: '/swords-n-magic-and-maps/location.png',
    iconSize:     [25, 35], // size of the icon
    iconAnchor:   [12, 34], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});


const Map = () => {
    const defaultPosition = [-60 ,-30]; 
    const { height, width } = useWindowDimensions();

    const { filterValue, setFilter } = useState('')

    const handlePointToLayer = (feature, latlng) => {
        //console.log('handlePointToLayer')
        //console.log(feature)
        if ( (filterValue === undefined)  || filterValue.length === 0 || feature.properties.description.indexOf(filterValue) > -1 ){
            switch(feature.properties.type){
                case "npc":
                    return L.marker(latlng, {icon: npcIcon});
                default:
                    return L.marker(latlng, {icon: locationIcon});
            }
            
        }
        
    }

    const handleEachFeature = (feature, layer) =>{
        //console.log(feature)
        layer.bindPopup(`<div class="featurepopup">${JSON.stringify(feature.properties)}</div>`)
        layer.bindTooltip(feature.properties.description, { permanent: false, direction: 'top', offset: [0, -32] }).openTooltip();
    }      


    document.addEventListener('filter', function (e) { console.log(e); setFilter(e.details) }, false);

    return (
        <div className="map__container">
            <MapContainer
                center={defaultPosition}
                zoom={3}
                style={ { height: height + "px", backgroundColor: "#e7bb8c" } }
            >
                <TileLayer
                attribution='Map From Kindred Games: Swords n Magic and Stuff'
                url="https://implodingduck.github.io/swords-n-magic-and-maps/tiles/{z}/{x}/{y}.png"
                minZoom={0}
                maxNativeZoom={3}
                noWrap={true}
                tms={true}
                />

                
                <CreateLeafletControl position="topright">
                    <MapFilter></MapFilter>
                </CreateLeafletControl>
                <CreateLeafletControl position="topright">
                    <MapFuctions></MapFuctions>
                </CreateLeafletControl>
                
                <GeoJSON data={geojsondata} onEachFeature={handleEachFeature} pointToLayer={handlePointToLayer}>
                    
                </GeoJSON>
                
            </MapContainer>
        </div>
    );
};

export default Map

