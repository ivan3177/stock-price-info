import React, { memo, useEffect } from 'react'
import { View } from 'react-native'

import styles from './styles'

interface StocksProps {}

const Stocks = memo<StocksProps>(({}) => {
  useEffect(() => {}, [])

  return <View style={styles.container} />
})

export default Stocks
