import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { StyleSheet } from 'react-native';

//import styles from './styles';

const CarItemPage = () => {
    return (
        <Text style={styles.text}>Custom Order was pressed</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        zIndex: 100,
        fontSize: 20,
        width: '100%',
    }
});

export default CarItemPage;
