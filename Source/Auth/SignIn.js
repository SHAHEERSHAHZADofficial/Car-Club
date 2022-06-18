import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Checkbox from 'expo-checkbox';

const SignUp = () => {
    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")
    const [isChecked, setChecked] = useState(true);


  return (
    <SafeAreaView style={{backgroundColor:"#F0F0F0"}}>
        <StatusBar backgroundColor={"#0099FF"}/>
    <View style={{backgroundColor:"#F0F0F0"}}> 


<View>
<View style={{backgroundColor: "#A9A9A9",width:120,height:120,borderRadius:60,left:120,top:30}}></View>
</View>
<View style={{marginTop:50}}>

<View style={styles.View}>
{/* input field */}
<TextInput
              onChangeText={text => setUserName(text)}
              placeholder="User Name"
              // label={"UserName"}
              value={UserName}
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



<View style={styles.View}>
{/* input field */}
<TextInput
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              // label={"UserName"}
              value={Password}
              // mode="flat"
              mode="outlined"
              activeOutlineColor={"white"}
              outlineColor={"white"}
              activeUnderlineColor={"white"}
              underlineColor={"black"}
              placeholderTextColor={"black"}
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              secureTextEntry
              style={{ fontSize: 20, fontStyle: "italic",backgroundColor:"white"  }}
               
            />
{/* (❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁) */}
</View>

<View style={styles.section}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={"#0099FF"} />

            <Text style={{color:"black", fontSize:20}}>Remember Me</Text>
          </View>

<TouchableOpacity
            style={{ backgroundColor: '#0099FF', height: 50,marginTop:60,elevation:10,marginRight:10,marginLeft:10}}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#fff', textAlign: "center", marginTop: 12 }}>Sign In </Text>
</TouchableOpacity>




</View>
<View style={{margin:300}} />

</View>

</SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    View:{
        margin:5
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 14,
      top: 20
  
    },
      checkbox: {
      margin: 8,
    },
})