import { MapContainer, TileLayer } from "react-leaflet";
import useWindowDimensions from "./UseWindowDimensions";

const Map = () => {
    const defaultPosition = [48.864716, 2.349]; 
    const { height, width } = useWindowDimensions();
    return (
        <div className="map__container" style={ { border: "1px solid #ff00ff" } }>
            <MapContainer
                center={defaultPosition}
                zoom={3}
                style={ { height: height + "px" } }
            >
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default Map

