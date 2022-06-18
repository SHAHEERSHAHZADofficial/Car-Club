import { StyleSheet, Text, View,TouchableOpacity,ScrollView,SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView style={{margin:-18}}>
        <View style={[styles.container, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column"
        }]}>
          <View style={{ flex: 2, backgroundColor: "#C0C0C0" }} >

<View style={{padding:160}}>

</View>

          </View>
          <View style={{ flex: 3, backgroundColor: "#ffffff" }} >
            {/* circle */}
            <View style={{backgroundColor: "#A9A9A9",width:120,height:120,borderRadius:60,left:120,top:-60}}></View>
            {/* Welcome */}
            <Text style={{color:"black",fontSize:30,marginLeft:55,marginTop:-40}}>Welcome , Guest!</Text>
{/* Button */}
            <TouchableOpacity
            style={{ backgroundColor: '#077ee6', height: 50,marginTop:100,elevation:10,marginRight:10,marginLeft:10}} onPress={()=>{
              navigation.navigate("Sign Up")
            }}>
            <Text style={{ fontSize: 20, color: '#fff', textAlign: "center", marginTop: 12 }}>Sign Up </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#fff', height: 50,marginTop:30,elevation:10,marginRight:10,marginLeft:10}}  onPress={()=>{
              navigation.navigate("Sign In")
            }}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center", marginTop: 12 }}>Log In </Text>
          </TouchableOpacity>

          </View>
        </View>
        </ScrollView>
        </SafeAreaView>
      );
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
 FirstView:{
    // flex:1,
    // backgroundColor:"#d0d2d9"
    flex: 3, backgroundColor: "green" 


},
 SecondView:{
    // flex:1,
    // backgroundColor:"#ffffff"
    flex: 2, backgroundColor: "darkorange" 
 }                                    
})

