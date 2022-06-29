import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput } from 'react-native-paper'


const AsyncStorageindex = () => {
    const [contactNumber, setContactNumber] = useState('')
    const [values, setvalue] = useState('')

    useEffect(() => {
        async function GetData() {
            try {

                const value = await AsyncStorage.getItem('token')
                if (value !== null) {
                    // value previously stored\
                    setvalue(value)
                }


            } catch (e) {
                // error reading value
            }
        }

        return GetData()

    }, [])









    const Handle = async () => {
        try {
            if (contactNumber !== "") {
                await AsyncStorage.setItem("token", contactNumber).then((result) => {
                    console.log("DONE")
                }).catch((err) => {
                    console.log("Error")
                });

            } else {
                console.error("fill all the field")
            }
        } catch (error) {
            console.log(error)
        }
    }


    const Remove = async () => {
        try {
            await AsyncStorage.removeItem("token").then((result) => {
                console.log("DONE")
            }).catch((err) => {
                console.log("Error")
            });

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <View style={styles.View}>
                <TextInput
                    onChangeText={text => setContactNumber(text)}
                    placeholder="ContactNumber"
                    // label={"UserName"}
                    value={contactNumber}
                    // mode="flat"
                    mode="outlined"
                    activeOutlineColor={'white'}
                    outlineColor={'white'}
                    activeUnderlineColor={'white'}
                    underlineColor={'black'}
                    placeholderTextColor={'black'}
                    keyboardType="name-phone-pad"
                    selectionColor="lightblue"
                    disabled={false}
                    style={{
                        fontSize: 20,
                        fontStyle: 'italic',
                        backgroundColor: 'white',
                    }}
                />
            </View>


            <View style={styles.View}>
                <Text> {values} </Text>
            </View>


            <TouchableOpacity
                onPress={Handle}
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
                    Add
                </Text>
            </TouchableOpacity>





            <TouchableOpacity
                onPress={Remove}
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
                    Remove
                </Text>
            </TouchableOpacity>



        </View>
    )
}

export default AsyncStorageindex

const styles = StyleSheet.create({
    View: {
        margin: 5,
    },
})