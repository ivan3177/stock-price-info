import { Dimensions, StyleSheet } from 'react-native'

const { width: winWidth } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  error: {
    fontSize: 12,
    color: 'red',
    padding: 12,
    width: '100%',
  },

  header: {
    width: winWidth,
    flexDirection: 'row',
  },

  cell: {
    width: winWidth / 4,
    borderWidth: 1,
    padding: 8,
    backgroundColor: 'lightgray',
  },

  cellData: {
    fontSize: 12,
    fontWeight: 'bold',
  },
})
