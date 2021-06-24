import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'

import { AboutScreen, StocksScreen } from '../screens'
import { aboutIcon, stocksIcon } from '../assets'

import { TabNavigatorParamList } from './types'

const Tab = createBottomTabNavigator<TabNavigatorParamList>()

export default () => (
  <Tab.Navigator>
    <Tab.Screen name='About' component={AboutScreen} options={{ tabBarIcon: () => <Image source={aboutIcon} /> }} />
    <Tab.Screen name='Stocks' component={StocksScreen} options={{ tabBarIcon: () => <Image source={stocksIcon} /> }} />
  </Tab.Navigator>
)
