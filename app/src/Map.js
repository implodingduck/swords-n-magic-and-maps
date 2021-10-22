import { MapContainer, TileLayer } from "react-leaflet";
import useWindowDimensions from "./UseWindowDimensions";

const Map = () => {
    const defaultPosition = [-60 ,-30]; 
    const { height, width } = useWindowDimensions();
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
                minZoom={2}
                maxNativeZoom={3}
                noWrap={true}
                tms={true}
                />
            </MapContainer>
        </div>
    );
};

export default Map

