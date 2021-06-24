import axios from 'axios'

interface PoloniexStockData {
  id: number
  last: string
  lowestAsk: string
  highestBid: string
  percentChange: string
  baseVolume: string
  quoteVolume: string
  isFrozen: string
  postOnly: string
  high24hr: string
  low24hr: string
}

interface PoloniexStockResponseData {
  [name: string]: PoloniexStockData
}

export interface StockData {
  name: string
  last: number
  highestBid: number
  percentChange: number
}

const getStockData = () =>
  new Promise<StockData[]>(async (resolve, reject) => {
    try {
      const { data: poloniexStockData } = await axios.get<PoloniexStockResponseData>(
        'https://poloniex.com/public?command=returnTicker'
      )

      const stockData: StockData[] = []
      for (const stockName of Object.keys(poloniexStockData)) {
        const data = poloniexStockData[stockName]
        stockData.push({
          name: stockName,
          last: parseFloat(data.last),
          highestBid: parseFloat(data.highestBid),
          percentChange: parseFloat(data.percentChange),
        })
      }

      resolve(stockData)
    } catch (err) {
      console.error(err)
      reject()
    }
  })

const Api = {
  getStockData,
}

export default Api
