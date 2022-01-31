import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './src/components/AppContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ListTasks from './src/screens/ListTasks';
import CompletedTasks from './src/screens/CompletedTasks';
import NewTask from './src/screens/NewTask';
import EditTask from './src/screens/EditTask';
import TaskUpdate from './src/screens/TaskUpdate';
import FinishTask from './src/screens/FinishTask';

export default function App() {

  const [loaded] = useFonts({

    Comfortaa: require('./assets/fonts/Comfortaa-VariableFont_wght.ttf'),
    Roboto: require('./assets/fonts/Roboto-Black.ttf'),
  });


  if (!loaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2FDBBC',
      background: '#FFF',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <AppProvider>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: '#2FDBBC',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
        <Stack.Screen
            name="Login"
            component={Login}
          />

          <Stack.Screen
            name="Register"
            component={Register}
          />

        <Stack.Screen
            name="ListTasks"
            component={ListTasks}
          />

          
          <Stack.Screen
            name="NewTask"
            component={NewTask}
          />
          
          <Stack.Screen
            name="TaskUpdate"
            component={TaskUpdate}
          />

          <Stack.Screen
            name="CompletedTasks"
            component={CompletedTasks}
          />


          <Stack.Screen
            name="FinishTask"
            component={FinishTask}
          />


          </Stack.Navigator>
          </AppProvider>
  </NavigationContainer>
  );
}
