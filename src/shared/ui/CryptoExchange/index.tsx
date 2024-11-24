import { TokenInfo } from "../TokenInfo";
import { ExchangeArray } from '../../../entities/ExchangeArray/index';
import { exchangeImage } from '../../../entities/ExchangeImage';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Scroll } from "../scroll";
import SocketApiBybit from "../../../features/SocketApi/socket-api-bybit";

export const CryptoExchange = ({ exchangeName }: { exchangeName: string }) => {
    const tokens = ExchangeArray[exchangeName];

    if (!tokens) {
        return <div>Exchange not found</div>;
    }

    const LogoComponent = exchangeImage[exchangeName];
    const exchangeStyle = styles[exchangeName];

    return (
        <div className={clsx(styles.cryptoExchange, exchangeStyle)}>
            <div className={styles.exchangeHeaderContainer}>
                {LogoComponent && <LogoComponent />}
                <div className={styles.exchangeHeader}>{exchangeName}</div>
                <div>SUM</div>
            </div>
            <Scroll height={"200px"} items={[]} width={"350px"}>
                {tokens.map((token, index) => (
                    <div key={index}>
                        <TokenInfo
                            tokenName={token.tokenName}
                            priceNow={token.priceNow}
                            pricePurchase={token.pricePurchase}
                            quantity={token.quantity}
                        />
                        {/* <SocketApiBinance tokenName={token.tokenName} /> */}
                        <SocketApiBybit tokenName={token.tokenName}/>
                        {/* <SocketApiOKEX tokenName={token.tokenName}/> */}
                    </div>
                ))}
            </Scroll>
        </div>
    );
};