import { useState } from "react"
import { useMap } from "react-leaflet"

const MapFilter = (  ) => {
    const map = useMap()

    const [display, setDisplay] = useState(false)
    const [filter, setFilter] = useState('')
    const toggleDisplay = () => {
        setDisplay(!display)
    }

    const handleFilter = (e) => {
        setFilter(e.target.value)
        map.eachLayer(function(layer){
            if (layer.feature ){
                if (layer.feature.properties.description.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1){
                    layer.setOpacity(1)
                }else {
                    layer.setOpacity(0)
                }
            }
        });
    } 

    return (
        <div>
            
            <button onClick={toggleDisplay}>Filter</button>
            <div style={{ display: (display) ? "block" : "none", backgroundColor: "#ffffff", position: "absolute", width: "25em", left: "-26em", top: "0", padding: "0.5em" }}>
                <label><span>Filter</span>:<input type="text"  placeholder="Filter..." onChange={handleFilter} value={filter} /></label>
            </div>
        </div>
    )
   
}

export default MapFilter