import React, { useEffect, useState } from 'react';

interface Socket {
    tokenName?: string;
}

const SocketApiBybit: React.FC<Socket> = ({ tokenName }) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [price, setPrice] = useState<string | null>(null);

    useEffect(() => {
        if (!tokenName) {
            return; 
        }

        const newSocket = new WebSocket(`wss://stream.bybit.com/v5/public/spot`);

        newSocket.onopen = () => {
            console.log('Соединение установлено');

            const subscribeMessage = {
                op: 'subscribe',
                args: [`publicTrade.${tokenName.toUpperCase()}USDT`], 
            };
            newSocket.send(JSON.stringify(subscribeMessage));
        };

        newSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.topic === `publicTrade.${tokenName.toUpperCase()}USDT`) {
                const tradeData = data.data[0]; 
                const price = parseFloat(tradeData.p); 
                setPrice(price > 1 ? price.toFixed(2) : price.toFixed(4));
            }
        };

        newSocket.onclose = (event) => {
            console.log('Соединение закрыто:', event);
        };

        newSocket.onerror = (error) => {
            console.error('Ошибка:', error);
        };

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, [tokenName]);

    return (
        <div>
            {price ? <p>{price} USDT</p> : <p>Загрузка...</p>}
        </div>
    );
};

export default SocketApiBybit;