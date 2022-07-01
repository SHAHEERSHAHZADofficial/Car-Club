import AsyncStorage from "@react-native-async-storage/async-storage"



function Init() {

    return async dispatch => {
        const token = await AsyncStorage.getItem("@token")

        if (token !== null) {
            console.log("token fetched")

            dispatch({
                type: "LOGIN",
                payload: token
            })
        } else {
            console.log("No Token Found")
        }

    }


};






function Login(token, contactNumber, id, Name) {
    const login_token = token
    const BookingNumber = contactNumber.toString()
    const BookingId = BookingNumber
    const UserId = id
    const UserName = Name.toString()
    return async dispatch => {
        if (login_token !== null) {
            await AsyncStorage.setItem("@token", login_token)
                .then((result) => {
                    console.log("Token Stored ")
                }).catch((err) => {
                    console.log(" Token Not Stored ")
                });
        }

        if (BookingId !== null) {
            console.log(BookingId, "=============>>>>>>> Number")
            await AsyncStorage.setItem("@NewBookingNumber", BookingId)
                .then((result) => {
                    console.log("Token Stored ")
                }).catch((err) => {
                    console.log(" Token Not Stored ")
                });
        }


        if (UserId !== null) {
            await AsyncStorage.setItem("@UserId", UserId)
                .then((result) => {
                    console.log("Token Stored ")
                }).catch((err) => {
                    console.log(" Token Not Stored")
                });
        }

        if (UserName !== null) {
            await AsyncStorage.setItem("@UserName", UserName)
                .then((result) => {
                    console.log("Token Stored ")
                }).catch((err) => {
                    console.log(" Token Not Stored")
                });
        }

        dispatch({
            type: "LOGIN",
            payload: login_token
        })
    }


};



function Logout() {
    return async dispatch => {

        await AsyncStorage.clear()

        dispatch({
            type: "LOGOUT",
        })
    }

}


export {
    Login,
    Logout, Init
}



