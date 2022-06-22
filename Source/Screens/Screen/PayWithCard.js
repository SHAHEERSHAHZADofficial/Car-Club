import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RadioButton, TextInput } from 'react-native-paper'

const PayWithCard = () => {

    const [FullName, setFullName] = useState()
    const [value, setValue] = useState('first');
    const [ExpDate, setExpDate] = useState("")
    const [CVV, setCVV] = useState("")
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "#F0F0F0" }}>


                <View style={{ padding: 30 }} />



                <View style={{ backgroundColor: "white", flexDirection: "row", paddingTop: 12 }}>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>

                        <RadioButton.Item value="first" style={{ marginTop: -11 }} />
                    </RadioButton.Group>
                    <Text style={{ display: "flex", flex: 1, fontSize: 18 }}>Visa Card</Text>
                    <Text style={{ display: "flex", flex: 1, fontSize: 18 }}>1234-5678-XXXX</Text>
                </View>











                <View style={{ backgroundColor: "white", flexDirection: "row", paddingTop: 12 }}>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                        <RadioButton.Item value="second" style={{ marginTop: -11 }} />
                    </RadioButton.Group>

                    <Text style={{ display: "flex", flex: 1, fontSize: 18 }}>Master Card</Text>
                    <Text style={{ display: "flex", flex: 1, fontSize: 18 }}>1234-5678-XXXX</Text>
                </View>

                <View>
                    <Text style={{ color: "black", textAlign: "center", fontSize: 25 }}>Card Information</Text>
                </View>











                <View style={{ backgroundColor: "white", padding: 10 }}>
                    <View>
                        <TextInput
                            onChangeText={text => setFullName(text)}
                            placeholder="FullName"
                            // label={"UserName"}
                            value={FullName}
                            // mode="flat"
                            mode="outlined"
                            activeOutlineColor={"#F0F0F0"}
                            outlineColor={"#F0F0F0"}
                            activeUnderlineColor={"#F0F0F0"}
                            underlineColor={"black"}
                            placeholderTextColor={"black"}
                            keyboardType="name-phone-pad"
                            selectionColor="lightblue"
                            secureTextEntry
                            style={{ fontSize: 20, fontStyle: "italic", backgroundColor: "#F0F0F0" }} />
                    </View>

                    <View>
                        <Text style={{ textAlign: "auto", color: "black", fontSize: 20 }}>14 digit Card Number</Text>
                    </View>




                    <View style={{ flexDirection: "row" }}>
                        <View style={{ margin: 10 }}>
                            <TextInput
                                // onChangeText={text => setExpDate(text)}
                                placeholder="1234"
                                // label={"UserName"}
                                // value={ExpDate}
                                // mode="flat"
                                mode="outlined"
                                activeOutlineColor={"#F0F0F0"}
                                outlineColor={"#F0F0F0"}
                                activeUnderlineColor={"#F0F0F0"}
                                underlineColor={"black"}
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                selectionColor="lightblue"
                                maxLength={4}
                                style={{ fontSize: 18, fontStyle: "italic", backgroundColor: "#F0F0F0", }} />
                        </View>





                        <View style={{ margin: 10 }}>
                            <TextInput
                                // onChangeText={text => setExpDate(text)}
                                placeholder="5678"
                                // label={"UserName"}
                                // value={ExpDate}
                                // mode="flat"
                                mode="outlined"
                                activeOutlineColor={"#F0F0F0"}
                                outlineColor={"#F0F0F0"}
                                activeUnderlineColor={"#F0F0F0"}
                                underlineColor={"black"}
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                selectionColor="lightblue"
                                maxLength={4}
                                style={{ fontSize: 18, fontStyle: "italic", backgroundColor: "#F0F0F0" }} />
                        </View>



                        <View style={{ margin: 10 }}>
                            <TextInput
                                // onChangeText={text => setExpDate(text)}
                                placeholder="9012"
                                // label={"UserName"}
                                // value={ExpDate}
                                // mode="flat"
                                mode="outlined"
                                activeOutlineColor={"#F0F0F0"}
                                outlineColor={"#F0F0F0"}
                                activeUnderlineColor={"#F0F0F0"}
                                underlineColor={"black"}
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                selectionColor="lightblue"
                                maxLength={4}
                                style={{ fontSize: 18, fontStyle: "italic", backgroundColor: "#F0F0F0" }} />
                        </View>



                        <View style={{ margin: 10 }}>
                            <TextInput
                                // onChangeText={text => setExpDate(text)}
                                placeholder="...."
                                // label={"UserName"}
                                // value={ExpDate}
                                // mode="flat"
                                mode="outlined"
                                activeOutlineColor={"#F0F0F0"}
                                outlineColor={"#F0F0F0"}
                                activeUnderlineColor={"#F0F0F0"}
                                underlineColor={"black"}
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                selectionColor="lightblue"
                                maxLength={4}
                                style={{ fontSize: 18, fontStyle: "italic", backgroundColor: "#F0F0F0" }} />
                        </View>
                    </View>






                    <View style={{ flexDirection: "row" }}>
                        <View style={{ margin: 10 }}>
                            <TextInput
                                onChangeText={text => setExpDate(text)}
                                placeholder="Exp Date : 23/12/2022"
                                // label={"UserName"}
                                value={ExpDate}
                                // mode="flat"
                                mode="outlined"
                                activeOutlineColor={"#F0F0F0"}
                                outlineColor={"#F0F0F0"}
                                activeUnderlineColor={"#F0F0F0"}
                                underlineColor={"black"}
                                placeholderTextColor={"black"}
                                keyboardType="numbers-and-punctuation"
                                selectionColor="lightblue"
                                style={{ fontSize: 18, fontStyle: "italic", backgroundColor: "#F0F0F0", width: 210 }} />
                        </View>
                        <View style={{ margin: 10 }}>
                            <TextInput
                                onChangeText={text => setCVV(text)}
                                placeholder="CVV"
                                // label={"UserName"}
                                value={CVV}
                                // mode="flat"
                                mode="outlined"
                                activeOutlineColor={"#F0F0F0"}
                                outlineColor={"#F0F0F0"}
                                activeUnderlineColor={"#F0F0F0"}
                                underlineColor={"black"}
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                selectionColor="lightblue"
                                maxLength={4}
                                style={{ fontSize: 20, fontStyle: "italic", backgroundColor: "#F0F0F0", width: 80 }} />
                        </View>
                    </View>
                </View>





                <TouchableOpacity
                    style={{ backgroundColor: '#0099FF', height: 50, marginTop: 40, elevation: 10, marginRight: 10, marginLeft: 10 }}>
                    {/* top: 40, */}
                    <Text style={{ fontSize: 20, color: '#fff', textAlign: "center", marginTop: 12 }}> Finish Payment </Text>
                </TouchableOpacity>





                <View style={{ padding: 90 }} />


            </View>
        </SafeAreaView>
    )
}

export default PayWithCard

const styles = StyleSheet.create({})