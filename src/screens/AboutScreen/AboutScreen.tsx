import React, { FunctionComponent, useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'

import { TabNavigatorParamList } from '../../navigation'

import styles from './styles'

type AboutScreenNavigationProp = BottomTabNavigationProp<TabNavigatorParamList, 'About'>
type AboutScreenRouteProp = RouteProp<TabNavigatorParamList, 'About'>

interface AboutScreenProps {
  navigation: AboutScreenNavigationProp
  route: AboutScreenRouteProp
}

const AboutScreen: FunctionComponent<AboutScreenProps> = ({ navigation }) => {
  const goToStocks = useCallback(() => {
    navigation.jumpTo('Stocks', {})
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock Price Info</Text>
      <Text style={styles.info}>by: Ivan Sokolovskii</Text>
      <TouchableOpacity style={styles.button} onPress={goToStocks}>
        <Text style={styles.buttonText}>Jump to Stocks</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AboutScreen
