import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Screens';
import DrawerLayout from '../Layouts/DrawerLayout';


const stack  = createStackNavigator();

const NavigationContainerFile = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName='Home'>
                  <stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen} />
                  <stack.Screen options={{headerShown: false}} name='Home' component={DrawerLayout} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationContainerFile
