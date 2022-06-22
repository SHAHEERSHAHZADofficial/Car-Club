import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../Welcome'
import SignUp from '../Auth/SignUp'
import SignIn from '../Auth/SignIn'
import ForgetPassword from '../Auth/ForgetPassword'
import VerifyAcount from '../Auth/VerifyAcount'
import ForgetPasswordPart2 from '../Auth/ForgetPasswordPart2'

const Stack = createNativeStackNavigator()

export const Authentication = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: true,
        drawerActiveBackgroundColor: 'white',
        headerTintColor: '#077ee6',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 25},
      })}
    >
      <Stack.Screen name='Welcome User' component={Welcome} />
      <Stack.Screen name='Sign Up' component={SignUp} />
      <Stack.Screen name='Sign In' component={SignIn} />
      <Stack.Screen name='Forget Password' component={ForgetPassword} />
      <Stack.Screen name='Reset Password' component={ForgetPasswordPart2} />
      <Stack.Screen name='Verify_Your_Account' component={VerifyAcount} />

    </Stack.Navigator>
  )
}

export const AuthenticationPart2 = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: true,
        headerTintColor: '#077ee6',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 25},
      })}
    >
    </Stack.Navigator>
  )
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name='Authentication' component={Authentication} />
        <Stack.Screen name='AuthenticationPart2' component={AuthenticationPart2} />

        {/* <Stack.Screen name='Verify_Your_Account' component={VerifyAcount} />
      <Stack.Screen name='Forget Password' component={ForgetPassword} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
