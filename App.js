import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import BettingScreen from './views/betting';
import HistoryScreen from './views/history';
import HomeScreen from './views/home';
import LoginScreen from './views/login';
import NewAccountScreen from './views/new_account';
import ResultsScreen from './views/results';
import SettingsScreen from './views/settings';
import SplashScreen from './views/splash_screen';
import StartUpScreen from './views/startup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();
const Fading = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/2547", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally((data) => console.log(data))
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden backgroundColor="#0C591E"/>
      <Stack.Navigator
        initialRouteName= {"Login"}
        screenOptions={{
          headerShown: false
      }}>
        <Stack.Screen options={{cardStyleInterpolator: Fading, headerShown: false, navigationBarColor: "black", navigationBarHidden: true}} name="Betting" component={BettingScreen} />
        <Stack.Screen options={{cardStyleInterpolator: Fading, headerShown: false, navigationBarColor: "black", navigationBarHidden: true}} name="History" component={HistoryScreen} />
        <Stack.Screen options={{cardStyleInterpolator: Fading, headerShown: false, navigationBarColor: "black", navigationBarHidden: true}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{cardStyleInterpolator: Fading, headerShown: false, navigationBarColor: "black", navigationBarHidden: true}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{cardStyleInterpolator: Fading, headerShown: false, navigationBarColor: "black", navigationBarHidden: true}} name="NewAccount" component={NewAccountScreen} />
        <Stack.Screen options={{cardStyleInterpolator: Fading, headerShown: false, navigationBarColor: "black", navigationBarHidden: true}} name="Results" component={ResultsScreen} />
        <Stack.Screen options={{cardStyleInterpolator: Fading, headerShown: false, navigationBarColor: "black", navigationBarHidden: true}} name="Settings" component={SettingsScreen} />
        <Stack.Screen options={{cardStyleInterpolator: Fading, headerShown: false, navigationBarColor: "black", navigationBarHidden: true}} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{cardStyleInterpolator: Fading, headerShown: false, navigationBarColor: "black", navigationBarHidden: true}} name="StartUp" component={StartUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 25,
    borderRadius: 5
  },
  content: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 24,
    marginRight: -13,
    paddingLeft: 54,
    paddingRight: 54,
  },
  img: {
    flex: 0.3,
    alignSelf: 'center',
    width: 240,
    paddingRight: 35,
  },
  footer: {
    flex: 0.05,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    paddingBottom: 25,
  },
  copyright: {
    color: 'white',
  },
});
