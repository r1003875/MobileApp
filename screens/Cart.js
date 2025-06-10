import React, {use, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Nav from '../components/Nav';

export default function Cart({navigation}) {
    return (
        <View style={styles.container}>
            <Nav />
            <ScrollView style={{flex: 1, backgroundColor: '#1f1f1f'}}>
                <View style={styles.cartContainer}>
                    <Text style={styles.cartTitle}>Winkelwagentje</Text>
                    <Text style={styles.cartText}>Je winkelwagentje is momenteel leeg.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        gap: 5,
    },
    cartContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    cartTitle: {
        color: '#ac9c51',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartText: {
        color: '#ffffff',
        fontSize: 18,
        marginBottom: 20,
    },
    emptyCartImage: {
        width: 150,
        height: 150,
    },
});