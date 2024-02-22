import { StatusBar } from "expo-status-bar";
import { useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthContextProvider, { AuthContext } from "./store/auth-context";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import EditScreen from "./screens/EditScreen";
import IconButton from "./components/ui/IconButton";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon='exit'
              color={tintColor}
              size={36}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen
        name='Edit'
        component={EditScreen}
        options={({ navigation }) => ({
          headerLeft: ({ tintColor }) => (
            <IconButton
              icon='chevron-back-outline'
              color={tintColor}
              size={36}
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const [appReady, setAppReady] = useState(false);
  const [initialState, setInitialState] = useState();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function restoreState() {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      } finally {
        setAppReady(true);
      }
    }

    restoreState();
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
    >
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [appReady, setAppReady] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setAppReady(true);
    }

    fetchToken();
  }, []);

  if (appReady) {
    SplashScreen.hideAsync();
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
