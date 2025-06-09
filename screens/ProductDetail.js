import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Details({route}) {
  const {title, price, subtitle, image} = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#1f1f1f'}}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.displayBeer}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.h1}>{title}</Text>
          <Text style={styles.price}>€{price}</Text>
        </View>
      </View>
        <Text style={styles.description}>{subtitle}</Text>
        <Text style={styles.title}>Aantal:</Text>
        <View style={styles.amountContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.amountButton}>
            <Text style={{color: '#ac9c51', fontSize: 24}}>-</Text>
          </TouchableOpacity>
          <Text style={{color: '#ffffff'}}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.amountButton}>
            <Text style={{color: '#ac9c51', fontSize: 24}}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#ffffff'}}>Totaal: €{quantity * price}</Text>

    </View>
    </ScrollView>
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
  description: {
      color: '#fffef9',
      fontSize: 16,
      textAlign: 'left',
      margin: 30,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  displayBeer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 20,
  },
  amountButton: {
    backgroundColor: '#333',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
