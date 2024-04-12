import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import fontsConfig from "../constants/fonts";

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

    // // Montserrat Fonts

    MontserratRegular: fontsConfig.Montserrat.regular,
    MontserratBold: fontsConfig.Montserrat.bold,
    MontserratSemiBold: fontsConfig.Montserrat.semiBold,
    MontserratMedium: fontsConfig.Montserrat.medium,
    MontserratLight: fontsConfig.Montserrat.light,
    MontserratExtraBold: fontsConfig.Montserrat.extraBold,
    MontserratThin: fontsConfig.Montserrat.thin,
    MontserratItalic: fontsConfig.Montserrat.italic,
    MontserratExtraLight: fontsConfig.Montserrat.extraLight,

    // IcoMoon Fonts
    IcoMoon: fontsConfig.icoMoon,
  });

  useEffect(() => {
    SplashScreen.hideAsync();
})

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      onLayout={onLayoutRootView}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
