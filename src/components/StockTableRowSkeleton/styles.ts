import { Dimensions, StyleSheet } from 'react-native'

const { width: winWidth } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: winWidth,
    flexDirection: 'row',
  },

  cell: {
    width: winWidth / 4,
    borderWidth: 1,
    padding: 8,
  },
})
