import { Text, View, FlatList } from "react-native";
import React from "react";

import Topic from "../../components/dashboard/Topic";

import styles from "../../styles/containers/courseOverview.style";
import { SIZES } from "../../constants";

const Overview = ({ description, topics }) => {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionText}>{description.split("**")[2].trim()}</Text>
      </View>

      <View>
        <Text style={styles.subHeader}>Topics</Text>

        <FlatList
        data={topics}
        scrollEnabled={false}
        renderItem={({ item }) => (
            <Topic
            topic={item}
            />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ rowGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Overview;
