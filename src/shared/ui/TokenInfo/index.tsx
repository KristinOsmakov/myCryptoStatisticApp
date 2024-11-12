import styles from './styles.module.scss'
import { TokenInfoProps } from '../../../entities/TokensArray/index'


export const TokenInfo = ({tokenIcon, tokenName, priceNow, pricePurchase, quantity}: TokenInfoProps) => {
    const priceNowNum = parseFloat(priceNow)
    const pricePurchaseNum = parseFloat(pricePurchase)
    const quantityNum = parseFloat(quantity)
    const profit = (pricePurchaseNum - priceNowNum)
    const sumUSD  = (quantityNum * priceNowNum)
    //const sumTotal  = (quantityNum * priceNowNum)
    return (
        <div className={styles.tokenInfo}>
            <div>
                <img src={tokenIcon} alt={tokenName} />
            </div>
            <div>{tokenName}</div>
            <div>{priceNowNum}</div>
            <div>{pricePurchaseNum}</div>
            <div>{profit}</div>
            <div>{quantityNum}</div>
            <div>{sumUSD}</div>
        </div>
    )
}