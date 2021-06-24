import React, { memo, useEffect } from 'react'
import { View } from 'react-native'

import styles from './styles'

interface StockTableRowProps {}

const StockTableRow = memo<StockTableRowProps>(({}) => {
  useEffect(() => {}, [])

  return <View style={styles.container} />
})

export default StockTableRow
