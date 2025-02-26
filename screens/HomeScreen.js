import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Gouden Carolus</Text>
      <StatusBar style="auto" />
      <ProductCard 
      image='https://www.babylondrinks.be/wp-content/uploads/2021/10/Gouden-Carolus-Classic-24x33cl.jpg'
      title='Gouden Carolus Classic - 33cl'
      price='1.90'
      onPress={() => navigation.navigate('Details', {title: 'Gouden Carolus Classic - 33cl', price: '1.90'})}
      />
      <ProductCard 
      image='https://www.babylondrinks.be/wp-content/uploads/2021/10/Gouden-Carolus-Classic-24x33cl.jpg'
      title='Gouden Carolus Tripel - 33cl'
      price='2.10'
      onPress={() => navigation.navigate('Details', {title: 'Gouden Carolus Tripel - 33cl', price: '2.10'})}
      />
    </View>
  );
}
/*
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Gouden Carolus</Text>
      <StatusBar style="auto" />
      <ProductCard />
      <ProductCard />
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text style={{color: '#ac9c51', fontSize: 18, marginTop: 20}}>Bekijk product</Text>
        </TouchableOpacity>
    </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
