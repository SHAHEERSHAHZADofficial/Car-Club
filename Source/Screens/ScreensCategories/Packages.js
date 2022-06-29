import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Packages = ({ navigation }) => {
  const route = useRoute()

  const [Package, setPackage] = useState([null])

  const [Booking, setBooking] = useState("")


  useEffect(() => {

    let { searchId } = route.params
    console.log(searchId, "==========>", "route")
    axios.get(`http://10.0.2.2:9090/Package/getById/${searchId}`)
      .then(res => {
        const Category = res.data;
        // console.info(Category.CarSubCategories)   
        setPackage(Category.Packages)
        console.log(Category.Packages)
        // console.log(SubCategory,"=====================>","Category")

      }).catch((error) => {
        console.error(error.message)
      })

    // const BookingNo =  AsyncStorage.getItem("@NewBookingNumber")
    // if (BookingNo !== null) {
    //   setBooking(BookingNo)
    //   console.log(BookingNo, "===============>>>>>> BookingNo <<<<<<===============")
    // }



  }, [])




  console.log(Package, "=====================>", "Package")



  useEffect(() => {
    async function FetchData() {
      const BookingNo = await AsyncStorage.getItem("@NewBookingNumber")
      if (BookingNo !== null) {
        setBooking(BookingNo)
        console.log(BookingNo, "===============>>>>>> BookingNo <<<<<<===============")
      }
    }


    return FetchData()

  }, [])




  // if (UserName != '' && Password != '') {
  //   axios
  //     .post('http://10.0.2.2:9090/User/login', {
  //       UserName: UserName,
  //       Password: Password,
  //     })
  //     .then(result => {
  //       const token = result.data.Token
  //       console.log(result.data.Token);
  //       dispatch(Login(token))

  //       // navigation.replace("Authenticated Routes")
  //       // ToastAndroid.show("Thanks For Registration",ToastAndroid.LONG)
  //     })
  //     .catch(err => {
  //       console.error(err.message);
  //       if (err.message == 'Request failed with status code 401') {
  //         Alert.alert('Error', 'Username Or Password not Match');
  //       } else if (err.message == 'Request failed with status code 404') {
  //         Alert.alert('User not Found');
  //       }
  //       {
  //       }
  //     });
  // } else {
  //   Alert.alert('Presence Alert', '* Fill All The Field !');
  // }



  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {
            Package[0] === null ? (
              <>
                <View>
                  <Text style={{ fontSize: 30, fontWeight: "bold", color: "black", textAlign: "center" }}>
                    Error No Data Found
                  </Text>
                </View>
              </>

            ) : (

              Package.map(({ PackageName, PackageDescription, _id, PackagePrice, SubCategory_Id }, index) => (
                <View style={{ margin: 6, borderWidth: 5, backgroundColor: "lightblue" }} key={index}>
                  <Text style={styles.textPart1} onPress={() => {

                  }}>Package Name:-<Text style={styles.textPart2}>{PackageName}</Text>  </Text>
                  <Text style={styles.textPart1} onPress={() => {

                  }}>Package Description:-<Text style={styles.textPart2}>{PackageDescription}</Text>  </Text>
                  <Text style={styles.textPart1} onPress={() => {

                  }}>Package Price:-<Text style={styles.textPart2}>{PackagePrice}</Text>  </Text>


                  <TouchableOpacity
                    onPress={() => {
                      axios
                        .post('http://10.0.2.2:9090/Booking/addBooking', {
                          BookingNo: Booking,
                          Package_Id: _id,
                          SubCategory_Id: SubCategory_Id,
                          Booking_Status: "Pending",
                          PackageName: PackageName,
                          PackagePrice: PackagePrice
                        })
                        .then((result) => {
                          console.warn(result.data);
                        }).catch((err) => {
                          console.error(err);
                        });
                    }}
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
                      Book It{' '}
                    </Text>
                  </TouchableOpacity>


                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate({ name: "Booking", params: { BookingNo: Booking } })
                    }}
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
                      Check Booking {' '}
                    </Text>
                  </TouchableOpacity>


                </View>

              ))


            )
          }
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Packages

const styles = StyleSheet.create({
  textPart1: {
    fontSize: 25,
    color: "blue",
    textAlign: "left",
    fontWeight: "900",
    margin: 10
  },
  textPart2: {
    fontSize: 23,
    color: "black",
    textAlign: "right",
    fontWeight: "900",
    margin: 10
  }
})