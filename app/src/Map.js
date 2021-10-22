import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import useWindowDimensions from "./UseWindowDimensions";

import MapFuctions from "./MapFunctions";

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

const Map = () => {
    const defaultPosition = [-60 ,-30]; 
    const { height, width } = useWindowDimensions();

    const handlePointToLayer = (feature, latlng) => {
        console.log('handlePointToLayer')
        console.log(feature)
        return L.marker(latlng);
    }

    const handleEachFeature = (feature, layer) =>{
        console.log(feature)
        layer.bindPopup(`<div class="featurepopup">${JSON.stringify(feature.properties)}</div>`)
    }
    return (
        <div className="map__container" style={ { border: "1px solid #ff00ff" } }>
            <MapContainer
                center={defaultPosition}
                zoom={3}
                style={ { height: height + "px" } }
                
            >
                <TileLayer
                attribution='Map From Kindred Games: Swords n Magic and Stuff'
                url="https://implodingduck.github.io/swords-n-magic-and-maps/tiles/{z}/{x}/{y}.png"
                minZoom={0}
                maxNativeZoom={3}
                noWrap={true}
                tms={true}
                />

                <MapFuctions></MapFuctions>
                <GeoJSON data={geojsondata} onEachFeature={handleEachFeature} pointToLayer={handlePointToLayer}>
                    
                </GeoJSON>
                
            </MapContainer>
        </div>
    );
};

export default Map

