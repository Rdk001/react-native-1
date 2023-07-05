import { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

const RegistrationScreen = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

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
    <View
      style={[styles.container, keyboardOpen && styles.containerKeyboardOpen]}
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
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          style={[styles.input, isFocusedName && styles.inputFocused]}
          placeholder="Логін"
        />
        <TextInput
          name="email"
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
          style={[styles.input, isFocusedEmail && styles.inputFocused]}
          placeholder="Адреса електронної пошти"
        />
        <View style={styles.passwordWrapper}>
          <TextInput
            name="password"
            onFocus={() => handleFocus("password")}
            onBlur={() => handleBlur("password")}
            style={[styles.input, isFocusedPassword && styles.inputFocused]}
            placeholder="Пароль"
          />
          <TouchableOpacity style={styles.passwordBtn}>
            <Text style={styles.passwordBtnText}>Показати</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.singUp}>
        <Text style={styles.singUpText}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signIn}>
        <Text style={styles.signInText}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  containerKeyboardOpen: {
    marginTop: Platform.OS === "ios" ? 125 : 185,
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
