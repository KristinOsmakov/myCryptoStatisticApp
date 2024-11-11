import { createSlice } from '@reduxjs/toolkit';


interface Crypto {
    id: string
    name: string
    icon: string
    purchasePrice: number;
    currentPrice: number;
    quantity: number;
    totalValue: number;
}

interface CryptoState {
    cryptos: Crypto[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: CryptoState = {
    cryptos: [],
    status: 'idle',
    error: null,
  };

const cryptoSlice = createSlice