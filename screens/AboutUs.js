import React, {use, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AboutUs({navigation}) {
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#1f1f1f'}}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.h1}>Fier op het verleden, zin in de toekomst!</Text>
                <Text style={styles.text}>
                    Wie we zijn, waar we voor staan en waar we vandaan komen bepalen het karakter en de identiteit van onze topproducten. Al vijf generaties lang laten we mensen genieten van onze dranken en locaties, en dat smaakt naar meer. Ons recept voor de toekomst: blijven inzetten op onze lokale verankering, in combinatie met een gezonde ambitie om te innoveren.                
                </Text>
                <Text style={styles.h1}>Onze succesingrediënten</Text>
                <Text style={styles.text}>
                    Het succes van Het Anker is het resultaat van lang, hard en consistent werken, altijd met een duidelijke visie voor ogen. Sinds de overname van de brouwerij in de 19de eeuw is niet alleen de productie gestegen. We ontwikkelden heel wat extra activiteiten: rondleidingen langs het productieproces, een restaurant, een hotel, een microbrouwerij en diverse leuke activiteiten in en rond onze historische brouwerij. Wie naar Het Anker komt, geniet van een totaalbeleving.                
                </Text>
            </View>
        </ScrollView>
    );
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
        fontWeight: 'bold',
        textAlign: 'left',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'justify',
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 20,
    },
});