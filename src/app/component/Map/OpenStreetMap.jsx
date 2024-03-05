import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./OpenStreetMap.css"

const OpenStreetMap = () => {
    const [center, setCenter] = useState({ lat: 47.0234, lng: 11.8124 });
    const ZOOM_LEVEL = 14;
    const mapRef = useRef();

    return (
        <>
            <div className='container'>
                <div className='container'>
                    <MapContainer className={"maps"} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                                />
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
