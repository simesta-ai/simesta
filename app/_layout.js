import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import fontsConfig from "../constants/fonts";
import { TabBarProvider } from "../context/TabBarContext";
import { ChatMessageProvider } from "../context/chatMessageContext";
import { LectureChatProvider } from "../context/lectureChatContext";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import { Chat } from "openai/resources/index.mjs";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    // Poppins Fonts

    PoppinsRegular: fontsConfig.Poppins.regular,
    PoppinsBold: fontsConfig.Poppins.bold,
    PoppinsSemiBold: fontsConfig.Poppins.semiBold,
    PoppinsMedium: fontsConfig.Poppins.medium,
    PoppinsLight: fontsConfig.Poppins.light,
    PoppinsExtraBold: fontsConfig.Poppins.extraBold,
    PoppinsThin: fontsConfig.Poppins.thin,
    PoppinsItalic: fontsConfig.Poppins.italic,

    // IcoMoon Fonts
    IcoMoon: fontsConfig.icoMoon,
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TabBarProvider>
          <LectureChatProvider>
            <ChatMessageProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
                onLayout={onLayoutRootView}
              >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
            </ChatMessageProvider>
          </LectureChatProvider>
        </TabBarProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default Layout;
