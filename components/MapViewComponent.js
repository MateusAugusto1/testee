import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const MapViewComponent = ({ vehicles }) => {
  return (
    <MapView style={{ flex: 1 }}>
      {vehicles.map(vehicle => (
        <Marker
          key={vehicle.p}
          coordinate={{
            latitude: vehicle.py,
            longitude: vehicle.px,
          }}
          title={`Vehicle ${vehicle.p}`}
        />
      ))}
    </MapView>
  );
};

export default MapViewComponent;
