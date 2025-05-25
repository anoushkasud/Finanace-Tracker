import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// importing the context to call the addTransaction function
import { useTransactionContext } from '../contexts/TransactionContext';
import { v4 as uuidv4 } from 'uuid';

const AddTransactionScreen = () => {

    const { addTransaction } = useTransactionContext();
    // setting up states for the variables
    const [amount, setAmount] = useState('');
    const [tag, setTag] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState<'debit' | 'credit'>('debit');
    //submit function
    const handleSubmit = () => {
        if (!amount || !tag || !date) {
            alert('Please fill all fields');
            return;
        }
        addTransaction({
            id: uuidv4(),
            amount: parseFloat(amount),
            tag,
            date,
            type,
        });

        alert('Transaction added!');
        setAmount('');
        setTag('');
        setDate('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a New Transaction</Text>
            <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" style={styles.input} />
            <TextInput placeholder="Tag (e.g., Food)" value={tag} onChangeText={setTag} style={styles.input} />
            <TextInput placeholder="Date (YYYY-MM-DD)" value={date} onChangeText={setDate} style={styles.input} />
            <Button title={`Toggle Type (${type})`} onPress={() => setType(type === 'debit' ? 'credit' : 'debit')} />
            <Button title="Add Transaction" onPress={handleSubmit} />
        </View>
    );
};

export default AddTransactionScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 10, padding: 8 },
});
