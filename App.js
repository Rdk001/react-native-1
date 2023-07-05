import { StyleSheet, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import PhotoBg from "./src/assets/images/photoBg.jpg";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./src/assets/fonts/Roboto/Roboto-Black.otf"),
    "Roboto-Black": require("./src/assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto-Bold.otf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto/Roboto-Light.otf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto/Roboto-Light.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.otf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.otf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={PhotoBg} style={styles.image}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  image: {
    flex: 1,
  },
});
