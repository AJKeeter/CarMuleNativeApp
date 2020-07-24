import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import CarList from '../List/CarList';
import List from "../List/CarList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchList = async () => {
        const response = CarList.get(CarList, {

        });
        setResults(response.data.list)
    };


    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchList}
            />
            <Text>We have found {results.length} results</Text>

        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
