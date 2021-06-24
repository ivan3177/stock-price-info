import React, { memo, useEffect } from 'react'
import { View } from 'react-native'

import styles from './styles'

interface StocksTableProps {}

const StocksTable = memo<StocksTableProps>(({}) => {
  useEffect(() => {}, [])

  return <View style={styles.container} />
})

export default StocksTable
