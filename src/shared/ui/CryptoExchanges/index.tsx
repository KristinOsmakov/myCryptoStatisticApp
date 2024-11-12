import { CryptoExchange } from "../CryptoExchange"
import styles from './styles.module.scss'
export const CryptoExchanges = () => {
    return (
        <div className={styles.cryptoExchanges}>
            <CryptoExchange exchangeName={"Binance"}/>
            <CryptoExchange exchangeName={"Bybit"}/>
            <CryptoExchange exchangeName={"Kucoin"}/>
        </div>
    )
}
