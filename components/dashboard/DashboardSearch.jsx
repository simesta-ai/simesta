import { Text, View, TextInput, Pressable, Image } from "react-native";

import CustomIcon from "../CustomIcon";
import styles from "../../styles/components/dashboardSearch.style";

import { COLORS, SIZES, images } from "../../constants";

const DashboardSearch = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.searchButton}>
        <Image
          source={images.colouredLogo}
          resizeMode="contain"
          style={styles.searchLogo}
        />
        {/* <CustomIcon
          name="search"
          size={SIZES.large}
          color={COLORS.lightGrey}
        /> */}
      </Pressable>
      <TextInput
        style={styles.searchField}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightGrey}
        selectionColor={COLORS.primary}
      />
    </View>
  );
};

export default DashboardSearch;
