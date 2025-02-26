import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Details({route}) {
  const {title, price} = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Details</Text>
      <StatusBar style="auto" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>€{price}</Text>
        <View>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={{color: '#ac9c51', fontSize: 18, marginTop: 20}}>-</Text>
          </TouchableOpacity>
          <Text style={{color: '#ffffff'}}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={{color: '#ac9c51', fontSize: 18, marginTop: 20}}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#ffffff'}}>Totaal: €{quantity * price}</Text>

    </View>
  );
}
/*
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{color: '#ac9c51', fontSize: 18, marginTop: 20}}>Terug</Text>
        </TouchableOpacity>
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    marginTop: 20,
    gap: 5,
  },
  h1: {
    color: '#ac9c51',
    fontSize: 24,
    fontWeight: 'bold',
  },
  image:{
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
      color: '#fffef9',
      fontSize: 18,
  },
  price: {
      color: '#ac9c51',
      fontSize: 16,
  },
});
