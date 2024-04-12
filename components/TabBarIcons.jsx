import { Text, View } from 'react-native'
import CustomIcon from "../components/CustomIcon";



import styles from "../styles/components/bottomTab.style";

const TabBarIcons = ({ color, name, tag, size}) => {
  return (
    <View style={styles.tabBarIconContainer}>
        <CustomIcon
              name={name}
              size={size}
              color={color}
            />
      <Text style={styles.tabTag(color)}>{tag}</Text>
    </View>
  )
}

export default TabBarIcons

