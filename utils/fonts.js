import {  useFonts } from 'expo-font';


function useEnforceLoadedFonts(fonts) {
  return useFonts(fonts);
}

export function useLoadFonts() {
  const [fontsLoaded] = useEnforceLoadedFonts({
    Roboto_Light:require('../assets/expo-fonts/Roboto-Light.ttf'),
    Roboto_Italic:require('../assets/expo-fonts/Roboto-Italic.ttf'),
    Roboto_Regular:require('../assets/expo-fonts/Roboto-Regular.ttf'),
    Roboto_Bold:require('../assets/expo-fonts/Roboto-Bold.ttf'),
    Roboto_Medium:require('../assets/expo-fonts/Roboto-Medium.ttf'),
  });

  return fontsLoaded;
}