import React, { memo, useEffect, useRef } from 'react'
import { Animated, Dimensions, Image, StyleProp, View, ViewStyle } from 'react-native'

import { skeletonSprite } from '../../assets'

import styles from './styles'

interface SkeletonProps {
  width?: number | string
  height?: number | string
  style?: StyleProp<ViewStyle>
}

const { width: screenWidth } = Dimensions.get('window')

const Skeleton = memo<SkeletonProps>(({ width = '50%', height = '100%', style }) => {
  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start()

    return () => {
      animatedValue.stopAnimation()
    }
  }, [])

  return (
    <View style={[styles.container, { width, height }, style]}>
      <Animated.View
        style={{
          transform: [
            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-142, screenWidth],
              }),
            },
          ],
        }}
      >
        <Image source={skeletonSprite} style={styles.sprite} />
      </Animated.View>
    </View>
  )
})

export default Skeleton
