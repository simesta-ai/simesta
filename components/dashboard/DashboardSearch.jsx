import { Text, View, TextInput, Pressable, Image, ScrollView } from "react-native";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SearchScreenContext } from "../../context/SearchScreenContext";
import CustomIcon from "../CustomIcon";
import styles from "../../styles/components/dashboardSearch.style";

import { COLORS, SIZES, images, DARKMODECOLORS } from "../../constants";

const DashboardSearch = ({ placeholder }) => {
  const { theme } = useContext(ThemeContext);
  const { displaySearch, setDisplaySearch } = useContext(SearchScreenContext);
  const [searchIsActive, setSearchIsActive] = useState(true);
  return (
    <Pressable onPress={() => {
      setDisplaySearch(true);
    }} style={[styles.container, styles[theme].container]}>
      <Pressable

        style={styles.searchButton}>
        <Image
          source={images.colouredLogo2D}
          resizeMode="contain"
          style={styles.searchLogo}
        />
        {/* <CustomIcon
          name="search"
          size={SIZES.large}
          color={COLORS.lightGrey}
        /> */}

      </Pressable>
      <Text style={styles.placeholderText}>Search or Ask Simesta AI</Text>
    </Pressable>
  );
};

export default DashboardSearch;
