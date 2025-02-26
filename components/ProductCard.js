import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({title, image, price, onPress}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <Text style={styles.description}>{title}</Text>
            <Text style={styles.price}>€{price}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={{color: '#ac9c51', fontSize: 18, marginTop: 20}}>Bekijk product</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        padding: 10,
        backgroundColor: '#212425',
        borderRadius: 10,
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    description: {
        color: '#fffef9',
        fontSize: 18,
    },
    price: {
        color: '#ac9c51',
        fontSize: 16,
    },
});

export default ProductCard;