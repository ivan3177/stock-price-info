import React, { memo, useMemo } from 'react'
import { Dimensions, View } from 'react-native'

import { StockTableRowSkeleton } from '../StockTableRowSkeleton'
import { StocksTableHeader } from '../StocksTableHeader'

import styles from './styles'

interface StocksTableLoaderProps {}

const { height: screenHeight } = Dimensions.get('window')
const tableTitles = ['Name', 'Last', 'Highest Bid', '% Change']

const StocksTableLoader = memo<StocksTableLoaderProps>(({}) => {
  const skeletonRowsCount = useMemo(() => Math.ceil(screenHeight / 30), [])

  return (
    <View style={styles.container}>
      <StocksTableHeader error={false} titles={tableTitles} />
      {new Array(skeletonRowsCount).fill(null).map((_, index) => (
        <StockTableRowSkeleton key={`Skeleton-${index}`} />
      ))}
    </View>
  )
})

export default StocksTableLoader
