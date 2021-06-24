import { makeAutoObservable, runInAction } from 'mobx'

import Api, { StockData } from '../api'

export default class StocksStore {
  constructor() {
    makeAutoObservable(this)
  }

  stocks: StockData[] = []
  error: boolean = false
  initialLoading: boolean = true

  loadStockData = async () => {
    try {
      const stockData = await Api.getStockData()
      runInAction(() => {
        this.error = false
        this.stocks = stockData
      })
    } catch {
      runInAction(() => {
        this.error = true
      })
    } finally {
      setTimeout(() => {
        runInAction(() => {
          this.initialLoading = false
        })
      }, 200)
    }
  }

  clearStockData = () => {
    this.error = false
    this.initialLoading = true
    this.stocks = []
  }
}
