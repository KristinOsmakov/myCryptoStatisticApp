export type TokenInfoProps = {
    tokenIcon: string,
    tokenName: string,
    priceNow: string,
    pricePurchase: string,
    quantity: string  
}


export const TokensArray: { [key: string]: TokenInfoProps[] } = {
  Binance: [
      {
          tokenIcon: "https://example.com/icons/btc.png",
          tokenName: "Bitcoin",
          priceNow: "45000",
          pricePurchase: "35000",
          quantity: "0.5",
      },
      {
          tokenIcon: "https://example.com/icons/eth.png",
          tokenName: "Ethereum",
          priceNow: "3000",
          pricePurchase: "2000",
          quantity: "2.0",
      },
      {
          tokenIcon: "https://example.com/icons/bnb.png",
          tokenName: "Binance Coin",
          priceNow: "400",
          pricePurchase: "300",
          quantity: "5.0",
      },
      {
          tokenIcon: "https://example.com/icons/usdt.png",
          tokenName: "Tether",
          priceNow: "1.0",
          pricePurchase: "1.0",
          quantity: "1000.0",
      },
      {
          tokenIcon: "https://example.com/icons/doge.png",
          tokenName: "Dogecoin",
          priceNow: "0.25",
          pricePurchase: "0.15",
          quantity: "10000.0",
      },
  ],
  Bybit: [
      {
        tokenIcon: "https://example.com/icons/btc.png",
        tokenName: "Bitcoin",
        priceNow: "45000",
        pricePurchase: "35000",
        quantity: "0.5",
      },
      {
        tokenIcon: "https://example.com/icons/eth.png",
        tokenName: "Ethereum",
        priceNow: "3000",
        pricePurchase: "2000",
        quantity: "2.0",
      },
  ],
  Kucoin: [
    {
      tokenIcon: "https://example.com/icons/btc.png",
      tokenName: "Bitcoin",
      priceNow: "45000",
      pricePurchase: "35000",
      quantity: "0.5",
    },
    {
      tokenIcon: "https://example.com/icons/eth.png",
      tokenName: "Ethereum",
      priceNow: "3000",
      pricePurchase: "2000",
      quantity: "2.0",
    },
  ],
  HTX: [
    {
      tokenIcon: "https://example.com/icons/btc.png",
      tokenName: "Bitcoin",
      priceNow: "45000",
      pricePurchase: "35000",
      quantity: "0.5",
    },
    {
      tokenIcon: "https://example.com/icons/eth.png",
      tokenName: "Ethereum",
      priceNow: "3000",
      pricePurchase: "2000",
      quantity: "2.0",
    },
  ],
  OKX: [
    {
      tokenIcon: "https://example.com/icons/btc.png",
      tokenName: "Bitcoin",
      priceNow: "45000",
      pricePurchase: "35000",
      quantity: "0.5",
    },
    {
      tokenIcon: "https://example.com/icons/eth.png",
      tokenName: "Ethereum",
      priceNow: "3000",
      pricePurchase: "2000",
      quantity: "2.0",
    },
  ],
  Bitget: [
    {
      tokenIcon: "https://example.com/icons/btc.png",
      tokenName: "Bitcoin",
      priceNow: "45000",
      pricePurchase: "35000",
      quantity: "0.5",
    },
    {
      tokenIcon: "https://example.com/icons/eth.png",
      tokenName: "Ethereum",
      priceNow: "3000",
      pricePurchase: "2000",
      quantity: "2.0",
    },
  ],
  
}
