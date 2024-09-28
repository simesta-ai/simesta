import { Redirect } from "expo-router"
import OnboardScreen from "../screens/OnboardScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LectureScreen from "../screens/LectureScreen";

const Home = () => {
  // // clear the local storage of phone
  // useEffect(() => {
  //   AsyncStorage.clear()
  // }, [])
  const user = useSelector(state => state.user.id)
  
  if(!user) {
    return <OnboardScreen />
  }

  return (
    <LectureScreen />
  )
  
  // return (
  //   <Redirect href={'/home'} />
  // )
}

export default Home