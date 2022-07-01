import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../Welcome'
import SignUp from '../Auth/SignUp'
import SignIn from '../Auth/SignIn'
import ForgetPassword from '../Auth/ForgetPassword'
import VerifyAcount from '../Auth/VerifyAcount'
import ForgetPasswordPart2 from '../Auth/ForgetPasswordPart2'
import SubCategories from '../Screens/ScreensCategories/SubCategories'
import Categories from '../Screens/ScreensCategories/Categories'
import Packages from '../Screens/ScreensCategories/Packages'
import Booking from '../Screens/ScreensCategories/Booking/Booking'
import AsyncStorageindex from '../Async Storage/AsyncStorageindex'
import { useSelector, useDispatch } from 'react-redux'
import { Init } from '../Redux/Actions/ActionLogin'
import { ActivityIndicator, View } from 'react-native'
import PayWithCard from '../Screens/Screen/PayWithCard'
import FeedBack from '../Screens/Screen/FeedBack'


const Stack = createNativeStackNavigator()

export const Authentication = () => {
  return (
    // <NavigationContainer>

    <Stack.Navigator
      screenOptions={() => ({
        headerShown: true,
        drawerActiveBackgroundColor: 'white',
        headerTintColor: '#077ee6',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 25 },
      })}
    >
      <Stack.Screen name='Welcome User' component={Welcome} />
      <Stack.Screen name='Sign Up' component={SignUp} />
      <Stack.Screen name='Sign In' component={SignIn} />
      <Stack.Screen name='Forget Password' component={ForgetPassword} />
      <Stack.Screen name='Reset Password' component={ForgetPasswordPart2} />
      <Stack.Screen name='Verify_Your_Account' component={VerifyAcount} />

    </Stack.Navigator>
    // </NavigationContainer>
  )
}



export const Routes = () => {
  return (
    <Stack.Navigator screenOptions={() => ({
      headerShown: true, headerTintColor: '#077ee6',
      headerTitleAlign: 'center',
      headerTitleStyle: { fontSize: 25 }
    })}>



      <Stack.Screen name='Categories' component={Categories} />

      <Stack.Screen name='SubCategories' component={SubCategories} />

      <Stack.Screen name='Booking' component={Booking} />

      <Stack.Screen name='Packages' component={Packages} />

      <Stack.Screen name='PayWithCard' component={PayWithCard} />

      <Stack.Screen name='FeedBack' component={FeedBack} />

    </Stack.Navigator>
  )
}

export const MainRoute = () => {
  const dispatch = useDispatch()


  const init = () => {
    dispatch(Init());
  }
  useEffect(() => {

    init()

  }, [])



  const token = useSelector(state => state.auth.token)
  console.log(token, "===================>>>> token")
  return (
    <NavigationContainer>

      {
        token == null ? <Authentication /> : <Routes />
      }
    </NavigationContainer>
  )
}




