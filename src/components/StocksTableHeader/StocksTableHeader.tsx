import React, { memo, useEffect } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

interface StocksTableHeaderProps {
  error: boolean
  errorText?: string
  titles?: string[]
}

const StocksTableHeader = memo<StocksTableHeaderProps>(({ error, errorText = 'Error loading data', titles }) => {
  useEffect(() => {}, [])

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{errorText}</Text>}
      <View style={styles.header}>
        {titles?.map((title, index) => (
          <View key={`Header-${index}`} style={styles.cell}>
            <Text style={styles.cellData}>{title}</Text>
          </View>
        ))}
      </View>
    </View>
  )
})

export default StocksTableHeader
