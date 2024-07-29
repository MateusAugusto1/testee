// components/MapViewComponent.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getVehicles } from '../services/OlhoVivoAPI';

const MapViewComponent = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await getVehicles();
            setVehicles(response.data.l);
        };

        fetchVehicles();
    }, []);
    {stops.map((stop, index) => (
        <Marker
            key={index}
            coordinate={{
                latitude: stop.py,
                longitude: stop.px
            }}
            title={stop.np}
        />
    ))}
    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                {vehicles.map((vehicle, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: vehicle.py,
                            longitude: vehicle.px
                        }}
                        title={`Vehicle ${vehicle.p}`}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapViewComponent;
