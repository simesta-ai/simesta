import { Text, View } from 'react-native'
import CustomIcon from "../components/CustomIcon";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';



import styles from "../styles/components/bottomTab.style";

const TabBarIcons = ({ color, name, tag, size, focused}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.tabBarIconContainer}>
      <View style={styles.tabIconContainer(focused, theme)}>
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

