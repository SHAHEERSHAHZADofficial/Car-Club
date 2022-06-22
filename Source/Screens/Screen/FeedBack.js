import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Switch } from 'react-native-paper'

const FeedBack = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);
    const [isSwitchOn3, setIsSwitchOn3] = useState(false);



    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
    const onToggleSwitch3 = () => setIsSwitchOn3(!isSwitchOn3);



    return (
        <SafeAreaView>
            <StatusBar backgroundColor={"#505050"} />
            <ScrollView>
                <View style={{ backgroundColor: "lightgrey" }}>
                    <View style={{ backgroundColor: "#505050", flexDirection: "row" }}>

                        <Text style={{ fontSize: 20, color: "white", padding: 30, textAlign: "center", marginLeft: -10 }}>Close</Text>

                        <Text style={{ fontSize: 20, color: "white", padding: 30, textAlign: "center", marginLeft: 10 }}>FeedBack</Text>

                        <Text style={{ fontSize: 20, color: "white", padding: 30, textAlign: "center", marginRight: -30 }}>Post</Text>

                    </View>

                    <View style={{ margin: 10 }}>
                        <TextInput
                            placeholder="Write  Something  ...."
                            // label={"UserName"}

                            //   mode="flat"
                            mode="outlined"
                            activeOutlineColor={"lightgrey"}
                            outlineColor={"lightgrey"}
                            activeUnderlineColor={"lightgrey"}
                            underlineColor={"lightgrey"}
                            placeholderTextColor={"grey"}
                            keyboardType="name-phone-pad"
                            selectionColor="lightblue"

                            style={{ color: "#f55a07", fontSize: 20, fontStyle: "italic", padding: 10, backgroundColor: "lightgrey" }}
                            theme={{ colors: { text: "#505050" } }}
                            multiline={true}
                        /></View>

                    <View style={{ padding: 30, backgroundColor: "white" }}>
                        <Text style={{ fontSize: 20 }}>Add Location</Text>
                    </View>

                    <View style={{ padding: 30 }} />

                    <View style={{ padding: 20, flexDirection: "row", backgroundColor: "white" }}>
                        <Text style={{ fontSize: 25, color: "black" }}>Twitter</Text>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={"grey"} style={{ marginLeft: 150 }} />
                    </View>




                    <View style={{ padding: 20, flexDirection: "row", backgroundColor: "white" }}>
                        <Text style={{ fontSize: 25, color: "black" }}> FaceBook</Text>
                        <Switch value={isSwitchOn2} onValueChange={onToggleSwitch2} color={"grey"} style={{ marginLeft: 120 }} />
                    </View>


                    <View style={{ padding: 20, flexDirection: "row", backgroundColor: "white" }}>
                        <Text style={{ fontSize: 25, color: "black" }}> Instagram </Text>
                        <Switch value={isSwitchOn3} onValueChange={onToggleSwitch3} color={"grey"} style={{ marginLeft: 110 }} />
                    </View>


                    <View style={{ padding: 85 }} />


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FeedBack