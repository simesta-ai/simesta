import { Text, View, Image } from 'react-native'
import styles from "../../styles/components/streakOnDashboard"


import { images } from '../../constants'

const Streaks = ({ streak }) => {
    return (
        <View style={styles.container}>
            <View style={styles.streakTextCon}>
                <Image source={images.streakIcon}
                style={styles.streakIcon}
                resizeMethod='contain'
                width={5} height={5} />
                <Text style={styles.text}>Your learning streak</Text>
            </View>
            <Text style={styles.text}>{streak} Days</Text>
        </View>
    )
}

export default Streaks