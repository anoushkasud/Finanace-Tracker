import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import navigation packages
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import transaction rovider from transaction context
import { TransactionProvider } from './contexts/TransactionContext';

//import your screens
import HomeScreen from './screens/HomeScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import HistoryScreen from './screens/HistoryScreen';


//declare your screen stack
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // wrap thee app in provider as it is global state
        <TransactionProvider>
        {/*wrap the app in navigation container*/}
            <NavigationContainer>
            {/*create a stack navigator*/}
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
                    <Stack.Screen name="History" component={HistoryScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </TransactionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
