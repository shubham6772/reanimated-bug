import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ExpenseForm } from '../Screens';

const Drawer = createDrawerNavigator();
const DrawerLayout = () => {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="Iappc" component={ExpenseForm} /> 
    </Drawer.Navigator>
  )
}

export default DrawerLayout
