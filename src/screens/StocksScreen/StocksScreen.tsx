import React, { FunctionComponent, useCallback, useEffect, useMemo, useRef } from 'react'
import { SafeAreaView } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'

import { TabNavigatorParamList } from '../../navigation'
import { StocksTable } from '../../components'
import { StocksStore } from '../../store'

import styles from './styles'

type StocksScreenNavigationProp = BottomTabNavigationProp<TabNavigatorParamList, 'Stocks'>
type StocksScreenRouteProp = RouteProp<TabNavigatorParamList, 'Stocks'>

interface StocksScreenProps {
  navigation: StocksScreenNavigationProp
  route: StocksScreenRouteProp
}

const StocksScreen: FunctionComponent<StocksScreenProps> = ({ navigation }) => {
  const fetchTimer = useRef<any>()

  const stocksStore = useMemo(() => new StocksStore(), [])

  const fetchStocks = useCallback(() => {
    stocksStore.loadStockData().catch()
  }, [])

  useEffect(() => {
    fetchStocks()
  }, [])

  useEffect(
    () =>
      navigation.addListener('focus', () => {
        fetchTimer.current = setInterval(() => {
          fetchStocks()
        }, 5000)
      }),
    []
  )

  useEffect(
    () =>
      navigation.addListener('blur', () => {
        if (fetchTimer.current) {
          clearInterval(fetchTimer.current)
        }
      }),
    []
  )

  return (
    <SafeAreaView style={styles.container}>
      <StocksTable stocksStore={stocksStore} />
    </SafeAreaView>
  )
}

export default StocksScreen
