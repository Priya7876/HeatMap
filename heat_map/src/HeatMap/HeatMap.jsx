import 'leaflet/dist/leaflet.css';
import "./HeatMap.css";
import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import "leaflet.heat";




const HeatMap = (props) => {
  
  const mapContainerRef = useRef(null);

  useEffect(() => 
  {
   
   var baseLayer =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    });
 let   allHeats = [[51.5285262,-0.2664048,0.2],[39.7642224,-105.0199205,0.3],[39.914572,-104.9487409,1]]
// for(let item in props.heatCoordinates){
//   allHeats.push(item);
// }
    
    
      
  let heat=  L.heatLayer(allHeats, {
      radius: 20,
      max: 1.0,
      blur: 15,
      maxZoom : 0.7,              
      gradient: {
          0.1:'blue',
          1.0: 'red'
      },
      minOpacity: 1
  })
  
  let map;
  map= L.map(mapContainerRef.current).setView([51.505, -0.09], 10);
  baseLayer.addTo(map);
  heat.addTo(map);
  // var group = L.featureGroup(allHeats)
  // map.fitBounds(group.getBounds());
  
    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className='mapsicleMapIcon1' />;
  
  
 
};

export default HeatMap;