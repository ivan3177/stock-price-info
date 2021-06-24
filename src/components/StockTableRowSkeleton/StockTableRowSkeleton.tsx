import React, { memo, useEffect } from 'react'
import { View } from 'react-native'

import { Skeleton } from '../Skeleton'

import styles from './styles'

interface StockTableRowSkeletonProps {}

const StockTableRowSkeleton = memo<StockTableRowSkeletonProps>(({}) => (
  <View style={styles.container}>
    <View style={styles.cell}>
      <Skeleton height={12} />
    </View>
    <View style={styles.cell}>
      <Skeleton height={12} />
    </View>
    <View style={styles.cell}>
      <Skeleton height={12} />
    </View>
    <View style={styles.cell}>
      <Skeleton height={12} />
    </View>
  </View>
))

export default StockTableRowSkeleton
