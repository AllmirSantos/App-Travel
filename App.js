import { Platform } from "react-native";
import { useTheme } from "native-base";

import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./src/screens/home";
import { Details } from "./src/screens/details";
import { Profile } from "./src/screens/profile";
import { Favorite } from "./src/screens/favorite";

import {
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  const { sizes } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#F35D38",
        tabBarInactiveTintColor: "#99999b",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: Platform.OS === "android" ? "auto" : 90,
          paddingBottom: sizes[6],
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar animated={true} barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
