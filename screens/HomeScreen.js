import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard';

import ClassicImage from '../images/GoudenCarolusClassic.jpg';
import TripelImage from '../images/GoudenCarolusTripel.jpg';

export default function HomeScreen({navigation}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/67a8c8e72d83a860eca1660f/products",
      {
        headers: {
          Authorization:
          "Bearer b7167c044a7b55734a1d895f86a8bec29e6ecea70bba6d1b3bb74eb3b298aeed"
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProducts(
        data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          subtitle: item.product.fieldData.description,
          price: (item.skus[0]?.fieldData.price.value || 0)/100,
          image: {url: item.skus[0]?.fieldData["main-image"]?.url},
        }))
      ))
      .catch((err) => console.error("Error:",err));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Gouden Carolus</Text>
      <StatusBar style="auto" />
      <ScrollView>
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onPress={() => navigation.navigate('Details', product)}
          />
        ))}
      </ScrollView>
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
