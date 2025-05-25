import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTransactionContext } from '../contexts/TransactionContext';

const HistoryScreen = () => {
    const { transactions } = useTransactionContext();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transaction History</Text>
            {transactions.length === 0 ? (
                <Text>No transactions yet.</Text>
            ) : (
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item.date} - {item.tag} - ${item.amount} ({item.type})</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default HistoryScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
});
