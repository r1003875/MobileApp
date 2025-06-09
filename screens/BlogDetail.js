import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import RenderHTML from 'react-native-render-html';

export default function BlogDetails({route}) {
  const {title, description, body, image} = route.params;

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#1f1f1f'}}>
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Image source={image} style={styles.image} />
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <RenderHTML
            contentWidth={350}
            source={{ html: body }}
            baseStyle={styles.body}
        />
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
  description: {
      color: '#fffef9',
      fontSize: 16,
      textAlign: 'left',
      margin: 30,
      fontWeight: 'bold',
  },
    body: {
        color: '#fffef9',
        fontSize: 16,
        textAlign: 'left',
        marginHorizontal: 30,
    },
});
