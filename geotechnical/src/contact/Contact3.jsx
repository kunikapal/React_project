import '../Contact.css';

// src/MapComponent.jsx
import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = ({ locations }) => {
    const mapRef = useRef();
    const [isMapActive, setIsMapActive] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (mapRef.current && !mapRef.current.contains(event.target)) {
            setIsMapActive(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const MapEventHandler = () => {
        const map = useMap();
        useEffect(() => {
        if (isMapActive) {
            map.scrollWheelZoom.enable();
            map.dragging.enable();
        } else {
            map.scrollWheelZoom.disable();
            map.dragging.disable();
        }
        }, [isMapActive, map]);

        return null;
    };

  return (
    <>
        <section>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div ref={mapRef} onClick={() => setIsMapActive(true)} style={{ height: "400px", width: "100%" }}>
                        <MapContainer center={[28.579667, 77.438635]} zoom={13} style={{ height: "100%", width: "100%" }}>
                            <MapEventHandler />
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {locations.map((location, index) => (
                            <Marker key={index} position={[location.lat, location.lng]}>
                                <Popup>{location.name}</Popup>
                            </Marker>
                            ))}
                        </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default MapComponent;
