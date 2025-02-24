import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard';

export default function Details({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Details</Text>
      <StatusBar style="auto" />
      <ProductCard />
      <ProductCard />
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
});
