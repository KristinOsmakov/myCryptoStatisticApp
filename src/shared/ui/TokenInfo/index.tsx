import styles from './styles.module.scss'
import { TokenInfoProps } from '../../../entities/ExchangeArray/index'


export const TokenInfo = ({ tokenName, priceNow, pricePurchase, quantity}: TokenInfoProps) => {
    const priceNowNum = parseFloat(priceNow)
    const pricePurchaseNum = parseFloat(pricePurchase)
    const quantityVerify = parseFloat(quantity) > 1 ? parseFloat(quantity).toFixed(2) : parseFloat(quantity).toFixed(4)
    const quantityNum = parseFloat(quantityVerify)
    const profit = (priceNowNum - pricePurchaseNum)
    const sumUSD  = (quantityNum * priceNowNum)
    //const sumTotal  = (quantityNum * priceNowNum)
    return (
        <div className={styles.tokenInfo}>
            <div>{tokenName}</div>
            <div>{priceNowNum}</div>
            <div>{pricePurchaseNum}</div>
            <div>{profit}</div>
            <div>{quantityNum}</div>
            <div>{sumUSD}</div>
        </div>
    )
}