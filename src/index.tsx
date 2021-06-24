import React, { FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { TabNavigator } from './navigation'

const App: FunctionComponent = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
)

export default App
