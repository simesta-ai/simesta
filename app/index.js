import { Redirect } from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react"

const Home = () => {

  
   
  let user = null;
  useEffect(()=> {
    const fetchUser = async () => {
      await AsyncStorage.clear();
      const data = await AsyncStorage.getItem('name')
      if(data){
        return null
      } else {
        return null;
      }
    }

    user = fetchUser()
    }, [])


  if(user == null) {
    return <Redirect href={'/auth/login'} />
  }
  


  return (
    <Redirect href={'/home'} />
  )
}

export default Home