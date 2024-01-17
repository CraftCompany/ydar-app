import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp } from './screens';
import { NativeBaseProvider } from 'native-base';
import { useFonts } from 'expo-font';
import { StatusBar, Text } from 'react-native';
import React from 'react';
import Loader from './screens/loader';
import { AuthProvider, useAuth } from './app/context/AuthContext';
import { MainApp } from './screens/MainApp';

const Stack = createNativeStackNavigator();

const Index = () => {

  let [fontsLoaded, setFontsLoaded] = React.useState(false)

  const { authState, onLogout } = useAuth()

  const [loading] = useFonts({
    "Cabin-Regular": require('./assets/fonts/Cabin-Regular.ttf'),
    "Cabin-Bold": require('./assets/fonts/Cabin-Bold.ttf'),
    "Cabin-SemiBold": require('./assets/fonts/Cabin-SemiBold.ttf'),
    "Cabin-Medium": require('./assets/fonts/Cabin-Medium.ttf'),
    "Montserrat-Regular": require('./assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-Bold": require('./assets/fonts/Montserrat-Bold.ttf'),
    "Montserrat-SemiBold": require('./assets/fonts/Montserrat-SemiBold.ttf'),
    "Montserrat-Medium": require('./assets/fonts/Montserrat-Medium.ttf'),
    "Montserrat-Thin": require('./assets/fonts/Montserrat-Thin.ttf'),
    "Montserrat-ExtraLight": require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    "Montserrat-Light": require('./assets/fonts/Montserrat-Light.ttf'),
  })

  React.useEffect(() => {

    const loadFonts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1500);
      });
    };
    loadFonts().then(() => {
      setFontsLoaded(true)
    })


  }, [loading])

  if (!fontsLoaded) {
    return <Loader loading={loading} />
  }

  return (
    <NavigationContainer>
      <StatusBar hidden={false} />
      <Stack.Navigator
        initialRouteName='SignUp'
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name='SignIn'
            component={SignIn}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
          />
        </Stack.Group>
        <Stack.Screen name="Home" component={MainApp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <Index />
      </NativeBaseProvider>
    </AuthProvider>
  );
}

