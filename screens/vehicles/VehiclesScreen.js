import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getVehicles } from './VehiclesService';
import MapViewComponent from '../../components/MapViewComponent';

const VehiclesScreen = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();
        setVehicles(data.vs);  // A API retorna os veículos em data.vs
      } catch (error) {
        console.error(error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapViewComponent vehicles={vehicles} />
    </View>
  );
};

export default VehiclesScreen;
