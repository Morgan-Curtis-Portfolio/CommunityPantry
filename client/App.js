import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeFeed from './HomeFeed';
import LoginOrRegister from './screens/Login'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginOrRegister">
        <Stack.Screen
          name="LoginOrRegister"
          component={LoginOrRegister}
          options={{ title: "Community Garden App" }}
        />
        <Stack.Screen 
          name="HomeFeed" 
          component={HomeFeed}
          options={{ title: "Home Feed"}}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}


