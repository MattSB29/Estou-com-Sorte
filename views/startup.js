import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
/*import MainScreen from './views/main.js';*/
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient} from 'expo-linear-gradient';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <LinearGradient colors={['#0C591E', '#28A745', '#28A745']} style={styles.linearGradient}>
      <View style={styles.content}>

        <View style={styles.img}>
          <Image source={require('../assets/logo.png')} />
        </View>

      </View>
      <View style={styles.footer}>

        <Text style={styles.copyright}>
          © 2022, Matheus Bastos. Todos os direitos reservados.
        </Text>

      </View>
    </LinearGradient>
    /* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Navigator headerMode="none">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
        </Navigator>
      </Stack.Navigator>
    </NavigationContainer> */
    
    
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
