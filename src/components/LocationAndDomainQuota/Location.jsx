import React from 'react'
import "./common.css"
import L from "leaflet"
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Location = () => {
    const position =  [9.9312, 76.2673]; 
    const redIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
  return (
    <div className='location-container'>

               <div >
                  <span>Location - Devices</span>
                </div>
              <div className='map-container'>
              <MapContainer center={position} zoom={3} style={{ height: '400px', width: '100%' }} zoomControl={false}>
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    
                    
                />
                <Marker position={position}  icon={redIcon}/>
            </MapContainer>
                 
              </div>

    </div>
  )
}

export default Location