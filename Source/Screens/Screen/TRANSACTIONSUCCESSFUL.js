import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import image from "../Images/download.png"
const TRANSACTIONSUCCESSFUL = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#F0F0F0", padding: 10 }}>
            <View style={{ backgroundColor: "#F0F0F0" }}>
                <View style={{ backgroundColor: "white" }}>
                    <Image source={require("../Images/download.png")} style={{ margin: 80, width: 200, height: 200 }} />
                    <Text style={{ textAlign: "center", fontSize: 40, color: "black" }}>Money Transfer Is Successful</Text>



                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, marginLeft: 10 }}>RECIPENT'S NAME</Text>
                        <Text style={{ fontSize: 18, marginLeft: 100 }}>$ 346.00</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 18, marginLeft: 10 }}>Today At 12:56</Text>
                    </View>

                </View>

                <TouchableOpacity
                    style={{ backgroundColor: '#0099FF', height: 50, marginTop: 40, elevation: 10, marginRight: 10, marginLeft: 10 }}>
                    {/* top: 40, */}
                    <Text style={{ fontSize: 20, color: '#fff', textAlign: "center", marginTop: 12 }}> Finish Payment </Text>
                </TouchableOpacity>

                <View style={{ padding: 60 }} />


            </View>
        </SafeAreaView>
    )
}

export default TRANSACTIONSUCCESSFUL