import { Stack, useRouter, Redirect } from "expo-router"
import { useEffect } from "react"
import { Text, View, SafeAreaView } from "react-native"

const Home = () => {

  const router = useRouter()
   
  const user = {
    id: 1,
    name: "John Doe",
    email: "",
    loggedIn: false
  }


  if(!user.loggedIn) {
    return <Redirect href={'/auth/login'} />
  }
  


  return (
    <Redirect href={'/home'} />
  )
}

export default Home