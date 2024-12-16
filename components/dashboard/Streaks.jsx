import { Text, View, Image } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import styles from "../../styles/components/streakOnDashboard"


import { images } from '../../constants'

const Streaks = ({ streak }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <View style={[styles.container, styles[theme].container]}>
            <View style={styles.streakTextCon}>
                <Image source={images.streakIcon}
                style={styles.streakIcon}
                resizeMethod='contain'
                width={5} height={5} />
                <Text style={[styles.text, styles[theme].text]}>Your learning streak</Text>
            </View>
            <Text style={[styles.text, styles[theme].text]}>{streak} Days</Text>
        </View>
    )
}

export default Streaks