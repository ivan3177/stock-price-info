import React, { memo, useCallback, useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { StockTableRow } from '../StockTableRow'
import Api, { StockData } from '../../api'
import { StocksTableLoader } from '../StocksTableLoader'
import { StocksTableHeader } from '../StocksTableHeader'

import styles from './styles'

interface StocksTableProps {}

const tableTitles = ['Name', 'Last', 'Highest Bid', '% Change']

const StocksTable = memo<StocksTableProps>(({}) => {
  const [data, setData] = useState<StockData[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const renderItem = useCallback(({ item }: { item: StockData }) => <StockTableRow data={item} />, [])

  const keyExtractor = useCallback((item: StockData) => item.name, [])

  useEffect(() => {
    Api.getStockData()
      .then((stockData) => {
        setError(false)
        setData(stockData)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 200)
      })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={<StocksTableHeader error={error} titles={tableTitles} />}
        stickyHeaderIndices={[0]}
      />
      {loading && <StocksTableLoader />}
    </View>
  )
})

export default StocksTable
