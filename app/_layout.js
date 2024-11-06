import { Stack } from "expo-router";
import { useCallback, useEffect, useRef } from "react";
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import fontsConfig from "../constants/fonts";
import { TabBarProvider } from "../context/TabBarContext";
import { ChatMessageProvider } from "../context/chatMessageContext";
import { LectureChatProvider } from "../context/lectureChatContext";
import { NotificationProvider } from "../context/NotificationContext";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const notificationListener = useRef();
  const responseListener = useRef();
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

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,   
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification tapped:', response);
    });

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
      });
    }

    return () => {
      if (notificationListener.current) Notifications.removeNotificationSubscription(notificationListener.current);
      if (responseListener.current) Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
              <NotificationProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
                onLayout={onLayoutRootView}
              >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
              </NotificationProvider>
            </ChatMessageProvider>
          </LectureChatProvider>
        </TabBarProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default Layout;
