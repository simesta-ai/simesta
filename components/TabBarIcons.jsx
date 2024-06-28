import { Text, View } from 'react-native'
import CustomIcon from "../components/CustomIcon";



import styles from "../styles/components/bottomTab.style";

const TabBarIcons = ({ color, name, tag, size, focused}) => {
  return (
    <View style={styles.tabBarIconContainer}>
      <View style={styles.tabIconContainer(focused)}>
      <CustomIcon
              name={name}
              size={size}
              color={color}
          />
      </View>
      <Text style={styles.tabTag(color)}>{tag}</Text>
    </View>
  )
}

export default TabBarIcons

