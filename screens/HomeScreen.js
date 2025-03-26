import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard';

import { Picker} from "@react-native-picker/picker"
/*
import ClassicImage from '../images/GoudenCarolusClassic.jpg';
import TripelImage from '../images/GoudenCarolusTripel.jpg';
*/
const categoryNames = {
  "" : "Alle categorieën",
  "67c2e60f6cbcbf6bb87a0478" : "Dark",
  "67c2e608ee2195b2ebaad870" : "Blond",
  "67e40c5625af03d4cc574567" : "Ambrio",
}

export default function HomeScreen({navigation}) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
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
      .then((data) => {setProducts(
        data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          subtitle: item.product.fieldData.description,
          price: (item.skus[0]?.fieldData.price.value || 0)/100,
          image: {uri: item.skus[0]?.fieldData["main-image"]?.url},
          category: categoryNames[item.product.fieldData.category[0] || "Onbekend"],
          // category: item.product.fieldData.category.map((id) => categoryNames[id] || "Onbekend"),
        }))
      )})
      .catch((err) => console.error("Error:",err));
  }, []);

  // const filteredProducts = selectedCategory ? products.filter((p) => p.category.includes(selectedCategory)) : products;
  const filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products;

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Gouden Carolus</Text>
      <StatusBar style="auto" />
      <View>
        <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
        style={styles.picker}
        >
          <Picker.Item label="Alle categoriën" value="" />
            {[...new Set(products.map((p) => p.category))].map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
        </Picker>
      </View>
      <ScrollView>
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id}
            {...product}
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
  picker: {
    color: '#ffffff',
    backgroundColor: '#333',
    width: 200,
    height: 50,
  },
});
