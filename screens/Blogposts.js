import React, {use, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import BlogCard from '../components/BlogCard';


export default function Blogposts({navigation}) {
    const [blogposts, setBlogposts] = useState([]);
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
            }
        )))})

        .catch((err) => console.error("Error:",err));
    }, []);

return (
    <ScrollView style={{flex: 1, backgroundColor: '#1f1f1f'}}>
        <View style={styles.container}>
            <StatusBar style="auto" />
            {blogposts.map((blogpost) => (
                <BlogCard
                    key={blogpost.id}
                    {...blogpost}
                    onPress={() => navigation.navigate('BlogDetail', blogpost)}                        
                />
            ))}
        </View>
    </ScrollView>
)
}

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
    },
    description: {
        color: '#ffffff',
        fontSize: 18,
    }, 
});