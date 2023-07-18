import { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhotoBg from "../assets/images/photoBg.jpg";

const RegistrationScreen = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleFormValue = () => {
    const formData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(formData);
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleFocus = (value) => {
    switch (value) {
      case "name":
        setIsFocusedName(true);
        break;
      case "email":
        setIsFocusedEmail(true);
        break;
      case "password":
        setIsFocusedPassword(true);
        break;
      default:
        return;
    }
  };

  const handleBlur = (value) => {
    switch (value) {
      case "name":
        setIsFocusedName(false);
        break;
      case "email":
        setIsFocusedEmail(false);
        break;
      case "password":
        setIsFocusedPassword(false);
        break;
      default:
        return;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <ImageBackground source={PhotoBg} style={styles.image}>
          <View
            style={[
              styles.container,
              keyboardOpen && styles.containerKeyboardOpen,
            ]}
          >
            <View style={styles.addPhoto}>
              <TouchableOpacity style={styles.btnAddPhoto}>
                <Text style={styles.btnAddPhotoText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Реєстрація</Text>

            <View style={styles.inputWrapper}>
              <TextInput
                name="name"
                value={name}
                onChangeText={setName}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
                style={[styles.input, isFocusedName && styles.inputFocused]}
                placeholder="Логін"
              />

              <TextInput
                name="email"
                value={email}
                onChangeText={setEmail}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                style={[styles.input, isFocusedEmail && styles.inputFocused]}
                placeholder="Адреса електронної пошти"
              />

              <View style={styles.passwordWrapper}>
                <TextInput
                  name="password"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => handleFocus("password")}
                  onBlur={() => handleBlur("password")}
                  style={[
                    styles.input,
                    isFocusedPassword && styles.inputFocused,
                  ]}
                  placeholder="Пароль"
                />

                <TouchableOpacity style={styles.passwordBtn}>
                  <Text style={styles.passwordBtnText}>Показати</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.singUp}>
              <Text
                onPress={() => {
                  handleFormValue();
                  navigation.navigate("Home", {
                    screen: "PostScreen",
                  });
                }}
                style={styles.singUpText}
              >
                Зареєструватися
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.signIn}
            >
              <Text style={styles.signInText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
  },
  container: {
    position: "relative",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  containerKeyboardOpen: {
    marginTop: Platform.OS === "ios" ? 125 : 125,
    paddingTop: Platform.OS === "ios" ? 0 : 20,
  },
  image: {
    flex: 1,
  },
  addPhoto: {
    position: "absolute",
    top: -60,
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  btnAddPhoto: {
    position: "absolute",
    bottom: 10,
    right: -15,
    width: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderStyle: "solid",
    borderRadius: 300,
  },
  btnAddPhotoText: {
    color: "#FF6C00",
    fontSize: 20,
    paddingBottom: 3,
    textAlign: "center",
  },
  text: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
    marginTop: 93,
    marginBottom: 33,
  },
  inputWrapper: {
    width: "100%",
    gap: 16,
  },
  input: {
    position: "relative",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    width: "100%",
    height: 50,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 4,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  passwordWrapper: {
    position: "relative",
  },
  passwordBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  passwordBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  singUp: {
    width: "100%",
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  singUpText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  signInText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    marginBottom: 66,
  },
});

export default RegistrationScreen;
