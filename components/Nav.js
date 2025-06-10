import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Nav = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.navButton}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Blogposts')}>
                <Text style={styles.navButton}>Blog</Text>
            </TouchableOpacity>                
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
                <Text style={styles.navButton}>Over ons</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <View style={styles.navButton}>
                    <Image source={require('../images/cart.png')} style={styles.navIcon} />
                </View>
            </TouchableOpacity>            
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        width: '90%',
        gap: 10,

    },
    navButton: {
        backgroundColor: '#ac9c51',
        padding: 10,
        alignSelf: 'flex-end',
        fontWeight: 'bold',
    },
    navIcon: {
        backgroundColor: '#ac9c51',
        alignSelf: 'flex-end',
        width: 19,
        height: 19,
        resizeMode: 'contain',
        tintColor: '#1f1f1f',
    },
});

export default Nav;