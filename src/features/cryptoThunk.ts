import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCryptoPrices = createAsyncThunk(
    'cryptos/fetchCryptoPrices',
    async (symbols: string[]) => {
        const response = await axios.get(`https://api.binance.com/api/v3/ticker/price`);
        return response.data.filter((ticker: any) => symbols.includes(ticker.symbol));
      }
)