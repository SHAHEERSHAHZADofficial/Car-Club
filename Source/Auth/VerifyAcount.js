import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const VerifyAcount = () => {
    const [PhoneNumber, setPhoneNumber] = useState("")
  return (
    <SafeAreaView style={{backgroundColor:"#F0F0F0"}}>
    <View>
      <Text style={{color:"black",fontSize:20,marginLeft:30,marginTop:60,marginBottom:60}}>Please Enter Your Phone Number</Text>

      <View style={styles.View}>
{/* input field */}
<TextInput
              onChangeText={text => setPhoneNumber(text)}
              placeholder="PhoneNumber"
              // label={"UserName"}
              value={PhoneNumber}
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

<TouchableOpacity
            style={{ backgroundColor: '#0099FF', height: 50,marginTop:40,elevation:10,marginRight:10,marginLeft:10}}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#fff', textAlign: "center", marginTop: 12 }}>Confirm Registration </Text>
</TouchableOpacity>

<View style={{margin:300}} />
    </View>
    </SafeAreaView>
  )
}

export default VerifyAcount

const styles = StyleSheet.create({
    View:{
        margin:8
    }, 
})

