import { Alert, SafeAreaView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const VerifyAcount = ({ navigation }) => {
  const [ContactNumber, setContactNumber] = useState("")

  const phoneNumbersVerification = () => {
    if (phoneNumbersVerification != "") {

      axios
        .post('http://10.0.2.2:9090/User/VerifyYourAccount', {
          ContactNumber: ContactNumber
        })
        .then((response) => {
          console.log(response.data)
          Alert.alert("Your Account Is Verified")
          navigation.replace("Sign In")
        })
        .catch((error) => {
          console.error(error)
        })

      AsyncStorage.setItem("@NewBookingNumber", ContactNumber)

    } else {
      Alert.alert('Presence Alert', '* Enter Phone Number!');

    }


  }

  return (
    <SafeAreaView style={{ backgroundColor: "#F0F0F0" }}>
      <View>
        <Text style={{ color: "black", fontSize: 20, marginLeft: 30, marginTop: 60, marginBottom: 60 }}>Please Enter Your Phone Number</Text>

        <View style={styles.View}>
          {/* input field */}
          <TextInput
            onChangeText={text => setContactNumber(text)}
            placeholder="PhoneNumber"
            // label={"UserName"}
            value={ContactNumber}
            // mode="flat"
            mode="outlined"
            activeOutlineColor={"white"}
            outlineColor={"white"}
            activeUnderlineColor={"white"}
            underlineColor={"black"}
            placeholderTextColor={"black"}
            keyboardType="name-phone-pad"
            selectionColor="lightblue"
            style={{ fontSize: 20, fontStyle: "italic", backgroundColor: "white" }}

          />
          {/* (❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁) */}
        </View>

        <TouchableOpacity onPress={phoneNumbersVerification}
          style={{ backgroundColor: '#0099FF', height: 50, marginTop: 40, elevation: 10, marginRight: 10, marginLeft: 10 }}>
          {/* top: 40, */}
          <Text style={{ fontSize: 20, color: '#fff', textAlign: "center", marginTop: 12 }}>Confirm Registration </Text>
        </TouchableOpacity>

        <View style={{ margin: 300 }} />
      </View>
    </SafeAreaView>
  )
}

export default VerifyAcount

const styles = StyleSheet.create({
  View: {
    margin: 8
  },
})

