import {  Text, View, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { TabBarContext } from '../context/TabBarContext';


import styles from '../styles/containers/backButton.style'
import { COLORS, SIZES } from '../constants';

const BackButtonContainer = ({ path }) => {

  const { display, setDisplay} = useContext(TabBarContext);

    const handleBack = () => {
        setDisplay(true)
        router.back()
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleBack}>
        <MaterialIcons style={styles.icon} name="arrow-back-ios" size={SIZES.large} color={COLORS.dark} />
        </TouchableOpacity>
      <View style={styles.blank} />
    </View>
  )
}

export default BackButtonContainer

