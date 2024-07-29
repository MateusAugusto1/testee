// screens/ArrivalPredictionScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getArrivalPredictions } from '../services/OlhoVivoAPI';

const ArrivalPredictionScreen = ({ stopId }) => {
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        const fetchPredictions = async () => {
            const response = await getArrivalPredictions(stopId);
            setPredictions(response.data.p);
        };

        fetchPredictions();
    }, [stopId]);

    return (
        <View>
            <FlatList
                data={predictions}
                keyExtractor={(item) => item.hr.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.hr} - {item.l.d}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ArrivalPredictionScreen;
