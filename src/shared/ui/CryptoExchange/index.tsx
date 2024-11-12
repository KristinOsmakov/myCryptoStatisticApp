import { TokenInfo } from "../TokenInfo"
import { TokensArray } from '../../../entities/TokensArray/index';
import styles from './styles.module.scss'



export const CryptoExchange = ( {exchangeName}: {exchangeName: string}) => {
    const tokens = TokensArray[exchangeName]

    if (!tokens) {
        return <div>Exchange not found</div>;
    }
    return (
        <div className={styles.cryptoExchange}>        
            <div>{exchangeName}</div>
            {tokens.map((token, index) => (
                <TokenInfo
                    key={index}
                    tokenIcon={token.tokenIcon}
                    tokenName={token.tokenName}
                    priceNow={token.priceNow}
                    pricePurchase={token.pricePurchase}
                    quantity={token.quantity}
                />
            ))}
        </div>
    )
}