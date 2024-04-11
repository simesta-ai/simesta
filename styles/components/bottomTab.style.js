import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
  container: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.light,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  addCourseButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})

export default styles;