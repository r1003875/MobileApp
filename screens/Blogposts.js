import React, {use, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import BlogCard from '../components/BlogCard';
import Nav from '../components/Nav';
import { Picker} from "@react-native-picker/picker"



export default function Blogposts({navigation}) {
    const [blogposts, setBlogposts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("newest");

    
    useEffect(() => {
        fetch(
            "https://api.webflow.com/v2/collections/67baf8e923b017da45230ab6/items/",
            {
                headers: {
                    Authorization:
                    "Bearer b7167c044a7b55734a1d895f86a8bec29e6ecea70bba6d1b3bb74eb3b298aeed"
                },
            }
        )
        .then((res) => res.json())
        .then((data) => {setBlogposts(
            data.items.map((item) => ({
                id: item.id,
                title: item.fieldData.name,
                description: item.fieldData["blog-summary"],
                image: {uri: item.fieldData["blog-image"].url},
                body: item.fieldData["post-body"],
                date: item.lastUpdated, //juiste datum is item.lastPublished, maar aangezien alle blogs op exact hetzelfde moement 
                                        //zijn gepubliceerd, gebruik ik dit om visuele verandering te laten zien
            }
        )))})

        .catch((err) => console.error("Error:",err));


    }, []);
        const filteredProducts = blogposts.filter((b) => 
            b.title.toLowerCase().includes(searchQuery.toLowerCase()));

        const sortedBlogposts = [...filteredProducts].sort((a, b) => {
            if (sortOption === 'Newest') return new Date(b.date || 0) - new Date(a.date || 0);
            if (sortOption === 'Oldest') return new Date(a.date || 0) - new Date(b.date || 0);
            
        });

return (
    <View style={styles.container}>
        <Nav/>
        <TextInput
            style={styles.searchInput}
            placeholder="Zoek in blogposts..."
            placeholderTextColor="#ffffff"
            value={searchQuery}
            onChangeText={setSearchQuery}
        />
        <View style={styles.pickerContainer}>      
            <Picker
            selectedValue={sortOption}
            onValueChange={setSortOption}
            style={styles.picker}>
            <Picker.Item label="Nieuwste" value="Newest" style={styles.pickerItem}/>
            <Picker.Item label="Oudste" value="Oldest" style={styles.pickerItem}/>
            </Picker>
        </View>
    <ScrollView style={{flex: 1, backgroundColor: '#1f1f1f'}}>
        <View style={styles.container}>
            <StatusBar style="auto" />
            {sortedBlogposts.map((blogpost) => (
                <BlogCard
                    key={blogpost.id}
                    {...blogpost}
                    onPress={() => navigation.navigate('BlogDetail', blogpost)}                        
                />
            ))}
        </View>
    </ScrollView>
    </View>
)
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
    h1: {
        color: '#ac9c51',
        fontSize: 24,
    },
    description: {
        color: '#ffffff',
        fontSize: 18,
    }, 
    searchInput: {
    backgroundColor: '#333',
    color: '#ffffff',
    width: '90%',
    height: 50,
    paddingLeft: 10,
    marginBottom: 10,
  },
    picker: {
    color: '#ffffff',
    backgroundColor: '#333',
    width: 150,
    height: 60,
    borderRadius: 5,
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