import React, { useEffect, useState } from 'react';

interface Socket {
    tokenName?: string; // Название токена, например, 'BTC'
}

const SocketApiOKEX: React.FC<Socket> = ({ tokenName }) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [ticker, setTicker] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!tokenName) {
            return;
        }

        const wsUrl = 'wss://exchainws.okex.org:8443';
        console.log('Подключение к WebSocket:', wsUrl);

        const newSocket = new WebSocket(wsUrl);

        newSocket.onopen = () => {
            console.log('Соединение установлено');

            // Подписка на канал ticker
            const subscribeMessage = {
                id: 1,
                method: 'eth_subscribe',
                params: ['newHeads'],
            };
            console.log('Отправка запроса на подписку:', JSON.stringify(subscribeMessage));
            newSocket.send(JSON.stringify(subscribeMessage));
        };

        newSocket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('Получено сообщение:', message);

            // Обработка сообщений от сервера
            if (message.method === 'eth_subscription' && message.params && message.params.result) {
                setTicker(message.params.result);
            } else if (message.error) {
                setError(`Ошибка: ${message.error.message}`);
            }
        };

        newSocket.onclose = (event) => {
            console.log('Соединение закрыто:', event);
            setError(`Соединение закрыто: ${event.code} - ${event.reason}`);
        };

        newSocket.onerror = (error) => {
            console.error('Ошибка WebSocket:', error);
            setError('Ошибка WebSocket: ' + error.message);
        };

        setSocket(newSocket);

        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, [tokenName]);

    return (
        <div>
            <h2>Данные о ценах для {tokenName?.toUpperCase()}-USDT</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {ticker ? (
                <div>
                    <p>Номер блока: {ticker.number}</p>
                    <p>Хэш блока: {ticker.hash}</p>
                    <p>Время: {new Date(parseInt(ticker.timestamp, 16) * 1000).toLocaleString()}</p>
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

export default SocketApiOKEX;