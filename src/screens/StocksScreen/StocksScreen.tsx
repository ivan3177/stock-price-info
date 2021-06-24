import React, { FunctionComponent, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'

import { TabNavigatorParamList } from '../../navigation'
import { StocksTable } from '../../components'

import styles from './styles'

type StocksScreenNavigationProp = BottomTabNavigationProp<TabNavigatorParamList, 'Stocks'>
type StocksScreenRouteProp = RouteProp<TabNavigatorParamList, 'Stocks'>

interface StocksScreenProps {
  navigation: StocksScreenNavigationProp
  route: StocksScreenRouteProp
}

const StocksScreen: FunctionComponent<StocksScreenProps> = ({}) => {
  useEffect(() => {}, [])

  return (
    <SafeAreaView style={styles.container}>
      <StocksTable />
    </SafeAreaView>
  )
}

export default StocksScreen
