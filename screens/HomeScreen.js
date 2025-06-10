import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import ProductCard from '../components/ProductCard'; 
import Nav from '../components/Nav';

import { Picker} from "@react-native-picker/picker"

const categoryNames = {
  "" : "Alle categorieën",
  "67c2e60f6cbcbf6bb87a0478" : "Dark",
  "67c2e608ee2195b2ebaad870" : "Blond",
  "67e40c5625af03d4cc574567" : "Amber",
}

export default function HomeScreen({navigation}) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");
  useEffect(() => {    fetch(
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
  //const filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products;
  const filteredProducts = products.filter((p) => 
    (selectedCategory === "" || p.category === selectedCategory) && 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    if (sortOption === 'name-asc') return a.title.localeCompare(b.title);
    if (sortOption === 'name-desc') return b.title.localeCompare(a.title);
  });

  return (
    <View style={styles.container}>
      <Nav />
      <Text style={styles.h1}>Gouden Carolus</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.searchInput}
        placeholder="Zoek een product..."
        placeholderTextColor="#ffffff"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.pickerContainer}>
      <View>
        <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
        style={styles.picker}
        >
          <Picker.Item label="Alle categoriën" value="" style={styles.pickerItem}/>
            {[...new Set(products.map((p) => p.category))].map((category) => (
              <Picker.Item key={category} label={category} value={category} style={styles.pickerItem}/>
            ))}
        </Picker>
      </View>
      <View>
        <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}>
          <Picker.Item label="Prijs (laag - hoog)" value="price-asc" style={styles.pickerItem}/>
          <Picker.Item label="Prijs (hoog - laag)" value="price-desc" style={styles.pickerItem}/>
          <Picker.Item label="Naam (A-Z)" value="name-asc" style={styles.pickerItem}/>
          <Picker.Item label="Naam (Z-A)" value="name-desc" style={styles.pickerItem}/>
        </Picker>
      </View>
      </View>
      <ScrollView>
        {sortedProducts.map((product) => (
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
    width: 150,
    height: 60,
    borderRadius: 5,
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#ffffff',
    width: '90%',
    height: 50,
    paddingLeft: 10,
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
  },
  pickerItem: {
    fontSize: 14,
  },
});
