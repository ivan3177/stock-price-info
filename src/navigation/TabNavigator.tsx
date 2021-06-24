import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AboutScreen, StocksScreen } from '../screens'

import { TabNavigatorParamList } from './types'

const Tab = createBottomTabNavigator<TabNavigatorParamList>()

export default () => (
  <Tab.Navigator>
    <Tab.Screen name='About' component={AboutScreen} />
    <Tab.Screen name='Stocks' component={StocksScreen} />
  </Tab.Navigator>
)
