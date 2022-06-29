import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';

const SubCategories = ({ navigation }) => {
  const route = useRoute()
  const [SubCategory, setSubCategory] = useState([])

  useEffect(() => {

    let { searchId } = route.params
    // let{searchId}=props.route.params
    console.log(searchId, "==========>", "route")
    axios.get(`http://10.0.2.2:9090/SubCategories/getById/${searchId}`)
      .then(res => {
        const Category = res.data;
        // console.info(Category.CarSubCategories)   
        setSubCategory(Category.CarSubCategories)


      }).catch((error) => {
        console.error(error.message)
      })

  }, [])

  console.log(SubCategory, "=====================>", "SubCategory")

  return (
    <SafeAreaView>
      <ScrollView>
    <View>

      {
        SubCategory[0] === null ? (
          <>
            <View>
              <Text style={{ fontSize: 30, fontWeight: "bold", color: "black", textAlign: "center" }}>
                Error No Data Found
              </Text>
            </View>
          </>

        ) : (

          SubCategory.map(({ SubCategoryName, SubCategoryDescription, _id }, index) => (
            <View style={{ margin: 6, borderWidth: 5, backgroundColor: "lightblue" }} key={index}>
              <Text style={styles.textPart1} onPress={() => {
                navigation.navigate({
                  name: 'Packages',
                  params: { searchId: _id },
                  merge: true
                })
              }} >Car Name:-<Text style={styles.textPart2}>{SubCategoryName}</Text>  </Text>
              <Text style={styles.textPart1} onPress={() => {
                navigation.navigate({
                  name: 'Packages',
                  params: { searchId: _id },
                  merge: true
                })
              }} >Car Description:-<Text style={styles.textPart2}>{SubCategoryDescription}</Text>  </Text>


            </View>

          ))


        )
      }
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default SubCategories

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