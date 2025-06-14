import React, {use, useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Nav from '../components/Nav';
import ProductCard from '../components/ProductCard';
import CartCard from '../components/CartCard';
import { useCart } from '../components/CartContext';

export default function Cart({navigation}) {
    const { cartItems, removeFromCart } = useCart();
    
    
    return (
        <View style={styles.container}>
            <Nav />
            <View style={{flex: 1, backgroundColor: '#1f1f1f'}}>
                <View style={styles.cartContainer}>
                    <Text style={styles.cartTitle}>Winkelwagentje</Text>
                    {cartItems.length === 0 ? (
                        <Text style={styles.cartText}>Je winkelwagentje is momenteel leeg.</Text>
                    ) : (
                    <ScrollView>
                        {cartItems.map((product) => (
                            <CartCard
                                key={product.id}
                                {...product}
                                onPress={() => removeFromCart(product.id)}
                            />
                        ))}
                        <Text style={styles.cartText}>
                            Totaal: €{cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2)}
                        </Text>
                    </ScrollView>                    
                    )}
                </View>
            </View>
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