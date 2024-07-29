import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { getLines } from '../services/OlhoVivoAPI';

const LinesScreen = () => {
    const [lines, setLines] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredLines, setFilteredLines] = useState([]);

    useEffect(() => {
        const fetchLines = async () => {
            const response = await getLines();
            console.log('Fetched lines:', response?.data);
            if (response?.data) {
                setLines(response.data);
                setFilteredLines(response.data);
            }
        };

        fetchLines();
    }, []);

    useEffect(() => {
        setFilteredLines(
            lines.filter(line => 
                line.lt.toLowerCase().includes(search.toLowerCase()) ||
                line.tl.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, lines]);

    return (
        <View>
            <TextInput 
                placeholder="Search lines"
                value={search}
                onChangeText={setSearch}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            />
            <FlatList
                data={filteredLines}
                keyExtractor={(item) => item.cl.toString()}
                renderItem={({ item }) => {
                    console.log('Rendering item:', item);
                    return (
                        <View>
                            <Text>{item.lt} - {item.tl}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default LinesScreen;
