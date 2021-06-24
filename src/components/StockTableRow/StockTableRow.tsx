import React, { memo, useEffect, useRef, useState } from 'react'
import { View, Animated } from 'react-native'

import { StockData } from '../../api'

import styles from './styles'

interface StockTableRowProps {
  data: StockData
}

const FADE_DURATION = 10

const StockTableRow = memo<StockTableRowProps>(({ data }) => {
  const [name, setName] = useState(data.name)
  const [last, setLast] = useState(data.last)
  const [highestBid, setHighestBid] = useState(data.highestBid)
  const [percentChange, setPercentChange] = useState(data.percentChange)

  const nameOpacity = useRef(new Animated.Value(1)).current
  const lastOpacity = useRef(new Animated.Value(1)).current
  const highestBidOpacity = useRef(new Animated.Value(1)).current
  const changeOpacity = useRef(new Animated.Value(1)).current

  useEffect(() => {
    if (data.name !== name) {
      Animated.timing(nameOpacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: FADE_DURATION,
      }).start(() => {
        setName(data.name)
        Animated.timing(nameOpacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: FADE_DURATION,
        }).start()
      })
    }
    if (data.last !== last) {
      Animated.timing(lastOpacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: FADE_DURATION,
      }).start(() => {
        setLast(data.last)
        Animated.timing(lastOpacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: FADE_DURATION,
        }).start()
      })
    }
    if (data.highestBid !== highestBid) {
      Animated.timing(highestBidOpacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: FADE_DURATION,
      }).start(() => {
        setHighestBid(data.highestBid)
        Animated.timing(highestBidOpacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: FADE_DURATION,
        }).start()
      })
    }
    if (data.percentChange !== percentChange) {
      Animated.timing(changeOpacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: FADE_DURATION,
      }).start(() => {
        setPercentChange(data.percentChange)
        Animated.timing(changeOpacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: FADE_DURATION,
        }).start()
      })
    }
  }, [data, name, last, highestBid, percentChange])

  return (
    <View style={styles.container}>
      <Animated.View style={styles.cell}>
        <Animated.Text style={[styles.cellData, { opacity: nameOpacity }]}>{name}</Animated.Text>
      </Animated.View>
      <View style={styles.cell}>
        <Animated.Text style={[styles.cellData, { opacity: lastOpacity }]}>{last.toString()}</Animated.Text>
      </View>
      <View style={styles.cell}>
        <Animated.Text style={[styles.cellData, { opacity: highestBidOpacity }]}>{highestBid.toString()}</Animated.Text>
      </View>
      <View style={styles.cell}>
        <Animated.Text style={[styles.cellData, { opacity: changeOpacity }]}>{percentChange.toString()}</Animated.Text>
      </View>
    </View>
  )
})

export default StockTableRow
