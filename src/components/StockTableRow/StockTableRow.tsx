import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { StockData } from '../../api'

import styles from './styles'

interface StockTableRowProps {
  data: StockData
}

const StockTableRow = memo<StockTableRowProps>(({ data }) => (
  <View style={styles.container}>
    <View style={styles.cell}>
      <Text style={styles.cellData}>{data.name}</Text>
    </View>
    <View style={styles.cell}>
      <Text style={styles.cellData}>{data.last.toString().slice(0, 10)}</Text>
    </View>
    <View style={styles.cell}>
      <Text style={styles.cellData}>{data.percentChange.toString().slice(0, 10)}</Text>
    </View>
    <View style={styles.cell}>
      <Text style={styles.cellData}>{data.highestBid.toString().slice(0, 10)}</Text>
    </View>
  </View>
))

export default StockTableRow
