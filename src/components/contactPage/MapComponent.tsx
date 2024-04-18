import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// border-bottom-left-radius: 10px;


import { useTranslation } from "react-i18next";

const Map = () => {
  const { t } = useTranslation();

  return (
    <MapContainer
      center={[-14.7981, -39.0347]}
      zoom={13}
      scrollWheelZoom={true}
      className="map_container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-14.80530496598827, -39.025110295308956]}>
        <Popup>
          {t("meetme")}
        </Popup>
      </Marker>

    </MapContainer>
  );
};

export default Map;
