import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "../Welcome"
import SignUp from "../Auth/SignUp"
import SignIn from "../Auth/SignIn"
import ForgetPassword from '../Auth/ForgetPassword';
import VerifyAcount from "../Auth/VerifyAcount"


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator()

export const Authentication = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator screenOptions={() => ({
        drawerActiveBackgroundColor: "white",
        headerTintColor: "blue",
        headerTitleAlign: "center", headerTitleStyle: { fontSize: 25 }
      })}>
        <Drawer.Screen name=' ' component={Welcome} />
        <Drawer.Screen name="Sign Up" component={SignUp} />
        <Drawer.Screen name="Sign In" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({ headerShown: true ,headerTintColor: "blue", headerTitleAlign: "center", headerTitleStyle: { fontSize: 25 }})} >
        <Stack.Screen name='Verify Your Account' component={VerifyAcount} />
        <Stack.Screen name='Forget Password' component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export const Routes = () => {
  <NavigationContainer>
  </NavigationContainer>
}