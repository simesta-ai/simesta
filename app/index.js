import { ActivityIndicator, View } from "react-native";
import { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import OnboardScreen from "../screens/OnboardScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import LectureScreen from "../screens/LectureScreen";

const Home = () => {
  const [isVerified, setIsVerified] = useState(null);
  const user = useSelector((state) => state.user?.id);
  const accessToken = useSelector((state) => state.user?.accessToken);

  const verifyUser = async () => {
    try {
      const res = await fetch(
        `http://192.168.77.93:3000/users/${user}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Cookie": `Auth-token=${accessToken}`,
          },
        }
      );
      if (res.status === 401) {
        await AsyncStorage.clear();
        return false;
      }
      if( res.status == 500){
        return false
      }
      return true;
    } catch (error) {
      console.error("Error fetching courses:", error);
      return false;
    }
  };

  useEffect(() => {
    const verify = async () => {
      if (!user) {
        setIsVerified(false);
        return;
      }
      const verified = await verifyUser();
      setIsVerified(verified);
    };

    verify();
  }, [user]);

  if (isVerified === null) {
    return (
      <View
        style={{
          padding: 100,
        }}
      >
        <ActivityIndicator size={40} color={"black"} />
      </View>
    );
  }

  if (!user || !isVerified) {
    return <OnboardScreen />;
  }

  return <Redirect href="/home" />;
};

export default Home;
