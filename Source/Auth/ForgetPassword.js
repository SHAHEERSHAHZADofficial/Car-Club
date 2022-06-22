import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import axios from 'axios'

const ForgetPassword = ({navigation}) => {
    const [Email, setEmail] = useState("")
const ForgotPassword = () => {
if (Email !== "") {
  axios
  .post('http://10.0.2.2:9090/User/ForgetPasswordPart1', {
    Email: Email,
  })
  .then((result) => {
  console.log(result.data.User)
navigation.navigate("Reset Password")
})
  .catch((err) => {
    console.error(err);
  });

} else {
  Alert.alert("Alert","Please Enter Your Email")
}
}
  return (
    <SafeAreaView style={{backgroundColor:"#F0F0F0"}}>
    <View>
      <Text style={{color:"black",fontSize:30,fontWeight:"300",marginLeft:40,marginTop:60,marginBottom:60}}>Reset Your Password</Text>

      <View style={styles.View}>
{/* input field */}
<TextInput
              onChangeText={text => setEmail(text)}
              placeholder="Email"
              // label={"UserName"}
              value={Email}
              // mode="flat"
              mode="outlined"
              activeOutlineColor={"white"}
              outlineColor={"white"}
              activeUnderlineColor={"white"}
              underlineColor={"black"}
              placeholderTextColor={"black"}
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              style={{ fontSize: 20, fontStyle: "italic",backgroundColor:"white"  }}
               
            />
{/* (❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁) */}
</View>

<TouchableOpacity onPress={ForgotPassword}
            style={{ backgroundColor: '#0099FF', height: 50,marginTop:40,elevation:10,marginRight:10,marginLeft:10}}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#fff', textAlign: "center", marginTop: 12 }}>Reset Password </Text>
</TouchableOpacity>

<View style={{margin:300}} />
    </View>
    </SafeAreaView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    View:{
        margin:8
    }, 
})