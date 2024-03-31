import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./OpenStreetMap.css"

/*
This file defines the OpenStreetMap component, which displays a map using the React Leaflet library. It imports
 necessary dependencies such as React, useState, useRef, MapContainer, TileLayer, and Marker from react-leaflet and
  leaflet. Additionally, it imports CSS styles from './OpenStreetMap.css'.
*/

// OpenStreetMap component
const OpenStreetMap = () => {
    const [center, setCenter] = useState({ lat: 47.0234, lng: 11.8124 }); // State for map center
    const ZOOM_LEVEL = 14; // Zoom-Level of the Map initiated state
    const mapRef = useRef(); // Ref for accessing the map instance

    return (
        <>
            <div className='container'>
                <div className='container'>
                    {/* MapContainer component from react-leaflet */}
                    <MapContainer className={"maps"} center={center} zoom={ZOOM_LEVEL} ref={mapRef}> {/* Using the defined const for accessing the map */}
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                                />
                                {/* Marker component for displaying location */}
                                {/* Conditionally render marker if location is loaded and error-free */}
                                {location.loaded && !location.error && (
                                    <Marker
                                        position={[
                                            location.coordinates.lat,
                                            location.coordinates.lng,
                                        ]}
                                    ></Marker>
                                )}
                    </MapContainer>
                </div>
            </div>
        </>
    );
};

export default OpenStreetMap;
