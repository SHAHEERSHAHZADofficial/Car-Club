import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Logout } from "./../../Redux/Actions/ActionLogin"
import { useDispatch } from 'react-redux';
const Categories = ({ navigation }) => {
  const [Categories, setCategories] = useState([null])
  useEffect(() => {

    axios.get("http://10.0.2.2:9090/Categories/getCategories")
      .then(res => {
        const Category = res.data;
        console.info(Category.CarCategories)
        setCategories(Category.CarCategories)

      }).catch((error) => {
        console.warn(error)
      })
    // console.log(Categories)

  }, [])


  const dispatch = useDispatch()


  return (
    <SafeAreaView style={{ margin: 10 }}>
      <ScrollView>
        <View>

          <Button
            title="LogOut"
            color={"#077ee6"}
            onPress={() => {
              dispatch(Logout())
            }}
          />

          {
            Categories[0] === null ? (
              <>
                <View>
                  <Text style={{ fontSize: 30, fontWeight: "bold", color: "black", textAlign: "center" }}>
                    Error No Data Found
                  </Text>
                </View>
              </>

            ) : (
              Categories.map(({ CategoryName, CategoryDescription, _id }, index) => (
                <View style={{ margin: 6, borderWidth: 5, backgroundColor: "lightblue" }} key={index} >
                  <Text onPress={() => {
                    navigation.navigate({
                      name: 'SubCategories',
                      params: { searchId: _id },
                    })
                  }} style={styles.textPart1}> CategoryName:-   <Text style={styles.textPart2}>{CategoryName}</Text>  </Text>

                  <Text onPress={() => {
                    navigation.navigate({
                      name: "SubCategories",
                      params: { searchId: _id },
                    })
                  }} style={styles.textPart1}>  CategoryDescription:-   <Text style={styles.textPart2}>  {CategoryDescription}  </Text>
                  </Text>
                </View>
              ))
            )
          }


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Categories



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