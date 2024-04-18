import { Text, View, Pressable } from 'react-native'
import CustomIcon from './CustomIcon'

import styles from '../styles/components/bottomTab.style'
import { COLORS, SIZES } from '../constants'
import { useRouter } from 'expo-router'

const AddCourseButton = () => {

  const router = useRouter()



  // const handleAddCourse = () => {
  //   setDisplay(false)
  // }


  return (
    <View style={styles.addCourseButton}>
        <CustomIcon name="add" size={SIZES.xLarge} color={COLORS.dark}/>
    </View>
  )
}

export default AddCourseButton
