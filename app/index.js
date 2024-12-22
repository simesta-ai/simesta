import { ActivityIndicator, View } from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { Redirect } from "expo-router";
import OnboardScreen from "../screens/OnboardScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Home = () => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(null);
  const user = useSelector((state) => state.user);

  const verifyUser = async () => {
    try {
      const res = await fetch(
        `https://simesta-server.onrender.com/api/users/${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      if (res.status !== 200) {
        await AsyncStorage.clear();
        return false;
      }
      if (res.status === 401) {
        await AsyncStorage.clear();
        router.push("/auth/login");
        return false;
      }
      if (res.status == 500) {
        await AsyncStorage.clear();
        router.push("/auth/login");
        return false;
      }
      return true;
    } catch (error) {
      await AsyncStorage.clear();
      router.push("/auth/login");
      return false;
    }
  };

  useEffect(() => {
    const verify = async () => {
      if (!user.id) {
        setIsVerified(false);
        return;
      }
      const verified = await verifyUser();
      setIsVerified(verified);
    };

    verify();
  }, []);

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


  if (!user.id && !isVerified) {
    return <OnboardScreen />;
  }
  return <Redirect href="/home" />;
};

export default Home;
