// import packages
import React, { createContext, useContext, useState, ReactNode } from 'react';

// define transaction context  type (schema)
export type Transaction = {
    id: string;
    amount: number;
    tag: string;
    date: string;
    type: 'debit' | 'credit';
};

// define the type
type TransactionContextType = {
    transactions: Transaction[];
    addTransaction: (txn: Transaction) => void;
    removeTransaction: (id: string) => void;
}

// create context
const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

// create provider
export const TransactionProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]); // initially the array is empty

    const addTransaction = (txn: Transaction) => { // append new transaction at the end
        setTransactions((prev) => [txn, ...prev]);
    };

    const removeTransaction = (id: string) => { // remove transaction with passed id 
        setTransactions((prev) => prev.filter((txn) => txn.id !== id));
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};

// hook the context 
export const useTransactionContext = () => {
    const context = useContext(TransactionContext);
    if (!context) throw new Error('useTransactionContext must be used within TransactionProvider');//safety
    return context;
};

// When you create a custom hook like useTransactionContext, you're relying on React.useContext() to return the context value.

// But if the component calling that hook is not wrapped inside the<TransactionProvider>, useContext() will return undefined.

// That’s a problem, because your app might crash or behave unpredictably — and debugging that can be frustrating.

// without it error will be - Cannot read property 'addTransaction' of undefined (not easy to debug where is the cause)