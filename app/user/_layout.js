import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";

export default function UserLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="notifications" options={{ headerShown: false, presentation: "modal" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
