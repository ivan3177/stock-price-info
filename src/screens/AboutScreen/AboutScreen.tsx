import React, { memo, useEffect } from 'react'
import { View } from 'react-native'

import styles from './styles'

interface AboutProps {}

const About = memo<AboutProps>(({}) => {
  useEffect(() => {}, [])

  return <View style={styles.container} />
})

export default About
