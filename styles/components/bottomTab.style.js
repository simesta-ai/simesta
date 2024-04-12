import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
  container: {
    height: 70,
    position: 'absolute',
    backgroundColor: COLORS.light,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    ...SHADOWS.medium,
    shadowColor: COLORS.dark,
  },
  addCourseButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: COLORS.dark,
    borderWidth: 1,
    backgroundColor: COLORS.light,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  tabBarIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  tabTag: (color) => ({
    fontFamily: FONT.mediumPoppins,
    fontSize: SIZES.xSmall,
    color: color,
  })
})

export default styles;