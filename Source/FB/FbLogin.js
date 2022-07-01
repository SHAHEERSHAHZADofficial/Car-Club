import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Settings } from 'react-native-fbsdk-next';

import { ShareDialog } from 'react-native-fbsdk-next';
import { TextInput } from 'react-native-paper';

const FBLogin = () => {
    Settings.setAppID("1222436241911626");
    Settings.initializeSDK();


    // const handlelogin = () => {
    //     LoginManager.logInWithPermissions(["public_profile"]).then(
    //         function (result) {
    //             if (result.isCancelled) {
    //                 console.log("Login cancelled");
    //             } else {
    //                 console.log(
    //                     "Login success with permissions: " +
    //                     result.grantedPermissions.toString()
    //                 );
    //             }
    //         },
    //         function (error) {
    //             console.log("Login fail with error: " + error);
    //         }
    //     );
    // }





    const shareLinkContent = {
        contentType: 'link',
        contentDescription: 'Wow, check out this great site!',
        content: "hello",
        contentUrl: "http://",
    };

    // ...
    // Share the link using the share dialog.
    function shareLinkWithShareDialog() {
        // var tmp = this;
        ShareDialog.canShow(shareLinkContent, '/me', 'Some message.').then(
            function (canShow) {
                if (canShow) {
                    return ShareDialog.show(shareLinkContent, '/me', 'Some message.');
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



    return (
        <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
            <ScrollView style={{ backgroundColor: "red" }}>
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
            </ScrollView>
        </SafeAreaView>

    )
}

export default FBLogin

const styles = StyleSheet.create({})