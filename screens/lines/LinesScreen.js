import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getLines } from './LinesService';
import SearchBar from '../../components/SearchBar';

const LinesScreen = () => {
  const [lines, setLines] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredLines, setFilteredLines] = useState([]);

  useEffect(() => {
    const fetchLines = async () => {
      try {
        const data = await getLines();
        setLines(data);
        setFilteredLines(data);
      } catch (error) {
        console.error(error);
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
      <SearchBar 
        placeholder="Search lines"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredLines}
        keyExtractor={(item) => item.cl.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.lt} - {item.tl}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default LinesScreen;
