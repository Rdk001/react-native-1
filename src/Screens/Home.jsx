import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import PostScreen from "./PostScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();
const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="PostScreen"
      screenOptions={({}) => ({
        tabBarLabel: ({ focused }) => {
          if (focused) {
            return "";
          }
          return null;
        },
      })}
    >
      <Tabs.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#212121",
            textAlign: "center",
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },

          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Ionicons
                style={{ color: "#BDBDBD" }}
                name="log-out-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({}) => (
            <Ionicons name="md-grid-outline" size={24} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#212121",
            textAlign: "center",
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          tabBarIcon: () => (
            <View style={styles.plusBtn}>
              <AntDesign name="plus" size={24} color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Feather name="user" size={24} color="gray" />,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  plusBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS === "ios" ? "50%" : 125,
  },
});
export default Home;
