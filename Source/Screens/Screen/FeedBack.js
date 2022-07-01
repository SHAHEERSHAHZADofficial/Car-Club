import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, } from 'react-native-paper'
import { Settings } from 'react-native-fbsdk-next';

import { ShareDialog } from 'react-native-fbsdk-next';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const FeedBack = () => {
    Settings.setAppID("1222436241911626");
    Settings.initializeSDK();

    const [FeedBack, setFeedBack] = useState("")
    const [UserID, setUserID] = useState("")


    useEffect(() => {

        async function GetUserId() {
            const UserId = await AsyncStorage.getItem("@UserId")
            if (UserId !== null) {
                setUserID(UserId)
            }
        }

    }, [])



    const shareLinkContent = {
        contentType: 'link',
        contentDescription: 'Wow, check out this great site!',
        contentUrl: "http://",
    };

    // ...
    // Share the link using the share dialog.
    function shareLinkWithShareDialog() {
        // var tmp = this;
        ShareDialog.canShow(shareLinkContent).then(
            function (canShow) {
                if (canShow) {
                    return ShareDialog.show(shareLinkContent);
                }
            }
        ).then(
            function (result) {
                if (result.isCancelled) {
                    alert('Share cancelled');
                } else {
                    alert('Share success');
                }
            },
            function (error) {
                alert('Share fail with error: ' + error);
            }
        );


    }



    const SendFeedBack = () => {
        if (FeedBack !== "") {
            axios.post('http://10.0.2.2:9090/FeedBack/addFeedBack', {
                FeedBack: FeedBack,
                User_id: UserID,
            })
                .then(result => {
                    console.log(result)
                    Alert.alert("FeedBack Sended")
                })
                .catch(err => {
                    console.error(err.message);

                });
        } else {
            Alert.alert("FeedBack is Empty")
        }
    }



    return (
        <SafeAreaView>
            <StatusBar backgroundColor={"#505050"} />
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "#505050" }}>

                        <Text style={{ fontSize: 20, color: "white", textAlign: "right", margin: 20 }} onPress={SendFeedBack}>Post</Text>

                    </View>

                    <View style={{ margin: 5 }}>
                        <TextInput
                            value={FeedBack}
                            onChange={text => setFeedBack(text)}
                            placeholder="Write  Something  ...."
                            mode="outlined"
                            activeOutlineColor={"lightgrey"}
                            outlineColor={"lightgrey"}
                            activeUnderlineColor={"lightgrey"}
                            underlineColor={"lightgrey"}
                            placeholderTextColor={"black"}
                            keyboardType="name-phone-pad"
                            selectionColor="lightblue"

                            style={{ color: "#f55a07", fontSize: 20, fontStyle: "italic", padding: 5, backgroundColor: "lightgrey" }}
                            theme={{ colors: { text: "#000" } }}
                            multiline={true}
                        /></View>


                    <View style={{ margin: 30 }}>

                        <TouchableOpacity
                            onPress={shareLinkWithShareDialog}
                            style={{
                                backgroundColor: '#0099FF',
                                height: 50,
                                marginTop: 20,
                                elevation: 10,
                                margin: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#fff',
                                    textAlign: 'center',
                                    marginTop: 12,
                                }}>
                                Share FeedBack on FaceBack
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FeedBack