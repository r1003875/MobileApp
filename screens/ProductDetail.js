import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ProductCard from '../components/ProductCard';

export default function Details({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Details</Text>
      <StatusBar style="auto" />
        <Image source={{uri: 'https://www.babylondrinks.be/wp-content/uploads/2021/10/Gouden-Carolus-Classic-24x33cl.jpg'}} style={styles.image} />
        <Text style={styles.description}>Gouden Carolus Classic - 33cl</Text>
        <Text style={styles.price}>€1.90</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{color: '#ac9c51', fontSize: 18, marginTop: 20}}>Terug</Text>
        </TouchableOpacity>
    </View>
  );
}
/*
const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Gouden Carolus</Text>
      <StatusBar style="auto" />
      <ProductCard />
      <ProductCard />
    </View>
  );
}
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
  description: {
      color: '#fffef9',
      fontSize: 18,
  },
  price: {
      color: '#ac9c51',
      fontSize: 16,
  },
});
