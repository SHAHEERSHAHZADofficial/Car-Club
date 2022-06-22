import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {TextInput} from 'react-native-paper';
  import Checkbox from 'expo-checkbox';
  import axios from 'axios';
  
  const ForgetPasswordPart2 = ({navigation}) => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(true);
  
    const handleForgetPasswordPart2 = () => {
      if (Email != '' && Password != '') {
        axios
          .post('http://10.0.2.2:9090/User/ForgetPasswordPart2', {
            Email: Email,
            Password: Password,
          })
          .then(result => {
          console.log(result)
          Alert.alert("Update","Your Password is updated")
          navigation.navigate("Sign In")
        })
          .catch(err => {
            console.error(err.message);
          });
      } else {
        Alert.alert('Presence Alert', '* Fill All The Field !');
      }
    };
  
    return (
      <SafeAreaView style={{backgroundColor: '#F0F0F0'}}>
        <StatusBar backgroundColor={'#0099FF'} />
        <ScrollView>
          <View style={{backgroundColor: '#F0F0F0'}}>
            <View>
              <View
                style={{
                  backgroundColor: '#A9A9A9',
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  left: 120,
                  top: 30,
                }}></View>
            </View>
            <View style={{marginTop: 50}}>
              <View style={styles.View}>
                {/* input field */}
                <TextInput
                  onChangeText={text => setEmail(text)}
                  placeholder="Email"
                  // label={"UserName"}
                  value={Email}
                  // mode="flat"
                  mode="outlined"
                  activeOutlineColor={'white'}
                  outlineColor={'white'}
                  activeUnderlineColor={'white'}
                  underlineColor={'black'}
                  placeholderTextColor={'black'}
                  keyboardType="name-phone-pad"
                  selectionColor="lightblue"
                  style={{
                    fontSize: 20,
                    fontStyle: 'italic',
                    backgroundColor: 'white',
                  }}
                />
                {/* (❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁) */}
              </View>
  
              <View style={styles.View}>
                {/* input field */}
                <TextInput
                  onChangeText={text => setPassword(text)}
                  placeholder="New Password"
                  // label={"UserName"}
                  value={Password}
                  // mode="flat"
                  mode="outlined"
                  activeOutlineColor={'white'}
                  outlineColor={'white'}
                  activeUnderlineColor={'white'}
                  underlineColor={'black'}
                  placeholderTextColor={'black'}
                  keyboardType="name-phone-pad"
                  selectionColor="lightblue"
                  secureTextEntry={isChecked}
                  style={{
                    fontSize: 20,
                    fontStyle: 'italic',
                    backgroundColor: 'white',
                  }}
                />
                {/* (❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)(❁´◡`❁) */}
              </View>
  
  

  
  
  <View style={styles.section}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={'#0099FF'}
                />
                <Text style={{color: 'black', fontSize: 20}}>Hide Password</Text>
              </View>
  
              <TouchableOpacity
                onPress={handleForgetPasswordPart2}
                style={{
                  backgroundColor: '#0099FF',
                  height: 50,
                  marginTop: 60,
                  elevation: 10,
                  marginRight: 10,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 12,
                  }}>
                 Update Password
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{margin: 10}} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ForgetPasswordPart2;
  
  const styles = StyleSheet.create({
    View: {
      margin: 5,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 14,
      top: 0,
    },
    section2: {
      margin: 10
    },
    checkbox: {
      margin: 8,
    },
  });
  


  