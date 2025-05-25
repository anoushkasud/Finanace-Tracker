// import packages
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// create and declare the HomeScreen 
// the screens wrapped in navigation container inherently get the navigate placeholder
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Finance Tracker!</Text>
            <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
            <Button title="View History" onPress={() => navigation.navigate('History')} />
        </View>
    );
};

//EXPORT THE HomeScreen
export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});

