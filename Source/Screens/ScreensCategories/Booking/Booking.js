import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Booking = ({ navigation }) => {
  const route = useRoute()
  let { BookingNo } = route.params
  const [booking, setBooking] = useState([null])


  useEffect(() => {




    axios.get(`http://10.0.2.2:9090/Booking/getBooking/${BookingNo}`)
      .then(res => {
        const BookingData = res.data;
        setBooking(BookingData.Booking)
        console.log(BookingData.Booking)

      }).catch((error) => {
        console.error(error.message)
      })

  }, [])

  console.log(booking, "=====================>", "booking")
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <ScrollView>
        <View>
          {
            booking[0] === null ? (
              <>
                <View>
                  <Text style={{ fontSize: 30, fontWeight: "bold", color: "black", textAlign: "center" }}>
                    Error No Data Found
                  </Text>
                </View>
              </>

            ) : (
              booking.map(({ PackageName, PackagePrice, BookingNo, Booking_Status, _id }, index) => (
                <View style={{ margin: 6, borderWidth: 5, backgroundColor: "lightblue" }} key={index} >
                  <Text style={styles.textPart1}> Name:-   <Text style={styles.textPart2}>{PackageName}</Text>  </Text>

                  <Text style={styles.textPart1}>  Price:-   <Text style={styles.textPart2}>  {PackagePrice}  </Text> </Text>

                  <Text style={styles.textPart1}>  BookingNo:-   <Text style={styles.textPart2}>  {BookingNo}  </Text> </Text>

                  <Text style={styles.textPart1}>  BookingStatus:-   <Text style={styles.textPart2}>  {Booking_Status}  </Text> </Text>

                  <TouchableOpacity
                    onPress={() => {
                      axios
                        .delete('http://10.0.2.2:9090/Booking/delete', {
                          id: _id
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
                      Delete Booking {' '}
                    </Text>
                  </TouchableOpacity>



                  <TouchableOpacity
                    onPress={() => {
                      axios
                        .post('http://10.0.2.2:9090/Booking/update', {
                          id: _id,
                          Booking_Status: "Accepted"
                        })
                        .then((result) => {
                          console.warn(result.data);
                          navigation.navigate("PayWithCard")
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
                      Accept  Booking {' '}
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

export default Booking

const styles = StyleSheet.create({
  textPart1: {
    fontSize: 25,
    color: "blue",
    fontWeight: "900",
    margin: 2
  },
  textPart2: {
    fontSize: 20,
    color: "black",
    fontWeight: "900",
    margin: 2,
    textAlign: 'right'
  }
})