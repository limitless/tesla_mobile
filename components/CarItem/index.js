import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './style';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    return(
        <View style={styles.carContainer}>

            <ImageBackground 
                source={require('../../assets/images/ModelS.jpeg')} 
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <StyledButton 
                type='primary' 
                content={'Custom Order'} 
                onPress={() => {
                    console.warn('Custom Order was Pressed');
                }} 
            />

            <StyledButton 
                type='secondary' 
                content={'Existing Inventory'} 
                onPress={() => {
                    console.warn('Existing Inventory was Pressed');
                }} 
            />
            
        </View>
    );
};

export default CarItem;