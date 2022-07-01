import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RadioButton, TextInput } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
const PayWithCard = ({ navigation }) => {

    const [FullName, setFullName] = useState()
    const [CardName, setCardName] = useState('Visa Card');
    const [Exp_Date, setExp_Date] = useState("")
    const [CVV_Number, setCVV_Number] = useState("")
    const [part1, setpart1] = useState("")
    const [part2, setpart2] = useState("")
    const [part3, setpart3] = useState("")
    const [part4, setpart4] = useState("")

    const CardNumber = part1 + part2 + part3 + part4

    const Card_Detail = () => {
        if (FullName !== "" && Exp_Date !== "" && CVV_Number !== "" && part1 !== "" && part2 !== "" && part3 !== "" && part4 !== "" && CardNumber !== "") {
            axios.post("http://10.0.2.2:9090/Payment/addPayMent", {
                CardName: CardName,
                FullName: FullName,
                CardNumber: CardNumber,
                Exp_Date: Exp_Date,
                CVV_Number: CVV_Number,
            }).then((result) => {
                console.log(result.data);
                navigation.navigate("FeedBack")
            }).catch((err) => {
                console.error(err);
                if (err.essage === "Request failed with status code 500") {
                    Alert.alert("Card is Already Registered")
                }
            });
        } else {
            Alert.alert("Presence Alert", " * Fill All The Field ! ")
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ backgroundColor: "#F0F0F0" }}>


                    <View style={{ padding: 30 }} />



                    <View style={{ backgroundColor: "white", flexDirection: "row", paddingTop: 12 }}>
                        <RadioButton.Group onValueChange={value => setCardName(value)} value={CardName}>

                            <RadioButton.Item value="Visa Card" style={{ marginTop: -11 }} />
                        </RadioButton.Group>
                        <Text style={{ display: "flex", flex: 1, fontSize: 18 }}>Visa Card</Text>
                        <Text style={{ display: "flex", flex: 1, fontSize: 18 }}>1234-5678-XXXX</Text>
                    </View>











                    <View style={{ backgroundColor: "white", flexDirection: "row", paddingTop: 12 }}>
                        <RadioButton.Group onValueChange={value => setCardName(value)} value={CardName}>
                            <RadioButton.Item value="Master Card" style={{ marginTop: -11 }} />
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
                                style={{ fontSize: 20, fontStyle: "italic", backgroundColor: "#F0F0F0" }} />
                        </View>

                        <View>
                            <Text style={{ textAlign: "auto", color: "black", fontSize: 20 }}>14 digit Card Number</Text>
                        </View>




                        <View style={{ flexDirection: "row" }}>
                            <View style={{ margin: 10 }}>
                                <TextInput
                                    onChangeText={text => setpart1(text)}
                                    placeholder="1234"
                                    value={part1}
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
                                    onChangeText={text => setpart2(text)}
                                    placeholder="5678"
                                    value={part2}
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
                                    onChangeText={text => setpart3(text)}
                                    placeholder="9012"
                                    value={part3}
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
                                    onChangeText={text => setpart4(text)}
                                    placeholder="...."
                                    value={setpart4}
                                    mode="outlined"
                                    activeOutlineColor={"#F0F0F0"}
                                    outlineColor={"#F0F0F0"}
                                    activeUnderlineColor={"#F0F0F0"}
                                    underlineColor={"black"}
                                    placeholderTextColor={"black"}
                                    keyboardType="numeric"
                                    selectionColor="lightblue"
                                    maxLength={2}
                                    style={{ fontSize: 18, fontStyle: "italic", backgroundColor: "#F0F0F0" }} />
                            </View>
                        </View>






                        <View style={{ flexDirection: "row" }}>
                            <View style={{ margin: 10 }}>
                                <TextInput
                                    onChangeText={text => setExp_Date(text)}
                                    placeholder="Exp Date : 23/12/2022"
                                    // label={"UserName"}
                                    value={Exp_Date}
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
                                    onChangeText={text => setCVV_Number(text)}
                                    placeholder="CVV"
                                    // label={"UserName"}
                                    value={CVV_Number}
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
                        style={{ backgroundColor: '#0099FF', height: 50, marginTop: 40, elevation: 10, marginRight: 10, marginLeft: 10 }}
                        onPress={Card_Detail}>
                        {/* top: 40, */}
                        <Text style={{ fontSize: 20, color: '#fff', textAlign: "center", marginTop: 12 }}> Finish Payment </Text>
                    </TouchableOpacity>





                    <View style={{ padding: 6 }} />


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PayWithCard

const styles = StyleSheet.create({})