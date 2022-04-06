import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { divIcon } from "leaflet";

import { IpContext } from "../store/ip-context";
import MarkerIcon from "./MarkerIcon";
import { renderToStaticMarkup } from "react-dom/server";

const iconMarkup = renderToStaticMarkup(<MarkerIcon />);
const customMarketIcon = divIcon({
  html: iconMarkup,
});

const Map = () => {
  const ctx = useContext(IpContext);
  const { data } = ctx;
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <div className="h-custom_height">
      {data && (
        <MapContainer
          center={[data.location.lat, data.location.lng]}
          zoom={16}
          scrollWheelZoom={true}
          zoomControl={false}
          minZoom={10}
          maxZoom={18}
          className="w-screen h-full z-10 overflow-hidden"
        >
          <ChangeView
            center={[data.location.lat, data.location.lng]}
            zoom={16}
          />

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[data.location.lat, data.location.lng]}
            icon={customMarketIcon}
          >
            <Popup>Your Location is here</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
