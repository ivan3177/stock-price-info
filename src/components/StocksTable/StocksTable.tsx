import React, { useCallback } from 'react'
import { FlatList, View } from 'react-native'
import { observer } from 'mobx-react-lite'

import { StockTableRow } from '../StockTableRow'
import { StockData } from '../../api'
import { StocksTableLoader } from '../StocksTableLoader'
import { StocksTableHeader } from '../StocksTableHeader'
import { StocksStore } from '../../store'

import styles from './styles'

interface StocksTableProps {
  stocksStore: StocksStore
}

const tableTitles = ['Name', 'Last', 'Highest Bid', '% Change']

const StocksTable = observer<StocksTableProps>(({ stocksStore }) => {
  const renderItem = useCallback(({ item }: { item: StockData }) => <StockTableRow data={item} />, [])

  const keyExtractor = useCallback((item: StockData) => item.name, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={stocksStore.stocks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={<StocksTableHeader error={stocksStore.error} titles={tableTitles} />}
        stickyHeaderIndices={[0]}
      />
      {stocksStore.initialLoading && <StocksTableLoader />}
    </View>
  )
})

export default StocksTable
