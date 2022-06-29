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
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Login } from '../Redux/Actions/ActionLogin';
const SignIn = ({ navigation }) => {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(true);
  const dispatch = useDispatch()
  const handleSignIn = () => {
    if (UserName != '' && Password != '') {
      axios
        .post('http://10.0.2.2:9090/User/login', {
          UserName: UserName,
          Password: Password,
        })
        .then(result => {
          const token = result.data.Token
          const contactNumber = result.data.ContactNumber
          console.log(result.data.Token);
          console.log(result.data.ContactNumber);
          dispatch(Login(token, contactNumber))



        })
        .catch(err => {
          console.error(err.message);
          if (err.message == 'Request failed with status code 401') {
            Alert.alert('Error', 'Username Or Password not Match');
          } else if (err.message == 'Request failed with status code 404') {
            Alert.alert('User not Found');
          }
          {
          }
        });
    } else {
      Alert.alert('Presence Alert', '* Fill All The Field !');
    }

  };

  return (
    <SafeAreaView style={{ backgroundColor: '#F0F0F0' }}>
      <StatusBar backgroundColor={'#0099FF'} />
      <ScrollView>
        <View style={{ backgroundColor: '#F0F0F0' }}>
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
          <View style={{ marginTop: 50 }}>
            <View style={styles.View}>
              {/* input field */}
              <TextInput
                onChangeText={text => setUserName(text)}
                placeholder="User Name"
                // label={"UserName"}
                value={UserName}
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
                placeholder="Password"
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


            <View style={styles.section2}>
              <Text style={{ color: '#000', fontSize: 22, textAlign: 'center' }} onPress={() => { navigation.navigate("Forget Password") }} > Forgot Password</Text>
            </View>


            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={'#0099FF'}
              />
              <Text style={{ color: 'black', fontSize: 20 }}>Hide Password</Text>
            </View>

            <TouchableOpacity
              onPress={handleSignIn}
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
                Sign In{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 10 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

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
