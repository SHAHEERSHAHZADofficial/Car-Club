import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import axios from 'axios';
import {Axios} from 'react-native-axios';
import Checkbox from 'expo-checkbox';
// import reactNativeAxios from 'react-native-axios'

const SignUp = ({navigation}) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(true);

  const handleSignUp = () => {
    if (
      FirstName != '' &&
      LastName != '' &&
      ContactNumber != '' &&
      Address != '' &&
      Email != '' &&
      UserName != '' &&
      Password != ''
    ) {
      axios
        .post('http://10.0.2.2:9090/User/signup', {
          FirstName: FirstName,
          LastName: LastName,
          ContactNumber: ContactNumber,
          Address: Address,
          Email: Email,
          UserName: UserName,
          Password: Password,
        })
        .then(() => {
          console.log('Thanks For Registration');
          ToastAndroid.show('Thanks For Registration', ToastAndroid.LONG);
          navigation.navigate('AuthenticationPart2');
        })
        .catch(err => {
          // console.error(err.message)
          if (err.message === 'Request failed with status code 500') {
            Alert.alert('You Are Already Registered');
            navigation.replace('AuthenticationPart2');
          } else {
            console.log(err.message);
          }
        });
    } else {
      Alert.alert('Presence Alert', '* Fill All The Field !');
    }
  };

  return (
    <SafeAreaView>
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
                onChangeText={text => setFirstName(text)}
                placeholder="First Name"
                // label={"UserName"}
                value={FirstName}
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
                onChangeText={text => setLastName(text)}
                placeholder="Last Name"
                // label={"UserName"}
                value={LastName}
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
                onChangeText={text => setContactNumber(text)}
                placeholder="Contact Number"
                // label={"UserName"}
                value={ContactNumber}
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
                onChangeText={text => setAddress(text)}
                placeholder="Address"
                // label={"UserName"}
                value={Address}
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
                onChangeText={text => setEmail(text)}
                placeholder="Email Address"
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
                placeholderTextColor={'grey'}
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
              onPress={handleSignUp}
              style={{
                backgroundColor: '#0099FF',
                height: 50,
                marginTop: 60,
                elevation: 10,
                marginRight: 10,
                marginLeft: 10,
              }}>
              {/* top: 40, */}
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Sign Up{' '}
              </Text>
            </TouchableOpacity>

            <View style={{marginTop: 8, marginBottom: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontStyle: 'normal',
                  fontWeight: '900',
                  textAlign: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Sign In');
                }}>
                Already Have An Account ? SignIn
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  View: {
    margin: 5,
  },
  checkbox: {
    margin: 8,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 14,
    top: 20,
  },
});
