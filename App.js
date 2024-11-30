import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './component/FirstScreen';
import {StyleSheet,View} from 'react-native'
import ThirdScreen from './component/ThirdScreen';
import SecondScreen from './component/SecondScreen';
import FourthScreen from './component/FourthScreen';
import FifthScreen from './component/FifthScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name='ThirdScreen' component={ThirdScreen}/>
        <Stack.Screen name='FourthScreen' component={FourthScreen}/>
        <Stack.Screen name='FifthSAcreen' component={FifthScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

