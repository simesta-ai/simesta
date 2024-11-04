import {
    Text,
    ScrollView,
    View,
    Image,
    Pressable,
    StatusBar,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { COLORS, SIZES, images } from "../constants";
  
  
  const LearningMethodChatScreen = () => {
   
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.light, position: "relative" }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.backgroundGrey}
        />
  
        
      </SafeAreaView>
    );
  };
  
  export default LearningMethodChatScreen;
  