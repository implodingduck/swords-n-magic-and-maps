import { MapContainer, TileLayer } from "react-leaflet";
import useWindowDimensions from "./UseWindowDimensions";

const Map = () => {
    const defaultPosition = [0 ,0]; 
    const { height, width } = useWindowDimensions();
    return (
        <div className="map__container" style={ { border: "1px solid #ff00ff" } }>
            <MapContainer
                center={defaultPosition}
                zoom={1}
                style={ { height: height + "px" } }
                minZoom={0}
                maxNativeZoom={3}
            >
                <TileLayer
                attribution='Map From Kindred Games: Swords n Magic and Stuff'
                url="https://implodingduck.github.io/swords-n-magic-and-maps/tiles/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default Map

