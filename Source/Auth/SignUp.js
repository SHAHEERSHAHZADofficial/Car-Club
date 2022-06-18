import { Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const SignUp = ({navigation}) => {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [ContactNumber, setContactNumber] = useState("")
    const [Address, setAddress] = useState("")
    const [Email, setEmail] = useState("")
    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")

const handleSignUp=()=>{
  if (FirstName != "" && LastName != "" && ContactNumber  != "" && Address != "" && Email != "" && UserName != "" && Password  != "" ) {
    
  } else {
    Alert.alert("Presence Alert","* Fill All The Field !")
  }
}


  return (
    <SafeAreaView>
        <StatusBar backgroundColor={"#0099FF"}/>
        <ScrollView>
    <View style={{backgroundColor:"#F0F0F0"}}> 


<View>
<View style={{backgroundColor: "#A9A9A9",width:120,height:120,borderRadius:60,left:120,top:30}}></View>
</View>
<View style={{marginTop:50}}>

<View style={styles.View}>
{/* input field */}
            <TextInput
              onChangeText={text => setFirstName(text)}
              placeholder="First Name"
              // label={"UserName"}
              value={FirstName}
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
              onChangeText={text => setLastName(text)}
              placeholder="Last Name"
              // label={"UserName"}
              value={LastName}
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
              onChangeText={text => setContactNumber(text)}
              placeholder="Contact Number"
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
              style={{ fontSize: 20, fontStyle: "italic",backgroundColor:"white"  }}
               
            />
{/* (❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁) */}
</View>
<View style={styles.View}>
{/* input field */}
<TextInput
              onChangeText={text => setAddress(text)}
              placeholder="Address"
              // label={"UserName"}
              value={Address}
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
              onChangeText={text => setEmail(text)}
              placeholder="Email Address"
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
              placeholderTextColor={"grey"}
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              secureTextEntry
              style={{ fontSize: 20, fontStyle: "italic",backgroundColor:"white"  }}
               
            />
{/* (❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁) */}
</View>



<TouchableOpacity onPress={handleSignUp}
            style={{ backgroundColor: '#0099FF', height: 50,marginTop:60,elevation:10,marginRight:10,marginLeft:10}}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#fff', textAlign: "center", marginTop: 10 }}>Sign Up </Text>
          </TouchableOpacity>

<View style={{marginLeft:50,marginTop:8,marginBottom:10}}>
<Text style={{fontSize:17,color:"black",fontStyle:"italic",fontWeight:"200"}} onPress={()=>{navigation.navigate("Sign In")}} >Already Have An Account ? SignIn </Text>
</View>


</View>

</View> 
</ScrollView>
</SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    View:{
        margin:5
    }
})