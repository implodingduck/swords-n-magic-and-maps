import { useState } from "react";
import { useMapEvents, CircleMarker, Popup } from "react-leaflet";
import { Icon } from "leaflet";


const MapFuctions = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng)
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      }
    })
  
    return position === null ? null : (
      <CircleMarker 
        center={position} 
        pathOptions={{ color: 'green' }}
        radius={10}
      >
        <Popup>[{ position.lng }, { position.lat }]</Popup>
      </CircleMarker>
    )
}

export default MapFuctions