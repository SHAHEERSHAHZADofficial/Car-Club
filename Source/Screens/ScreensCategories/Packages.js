import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';

const Packages = ({navigation}) => {
  const route = useRoute()

    const [Package, setPackage] = useState([])
    useEffect(() => {
      
    // let {id} = route.params
    let {searchId} = route.params
    console.log(searchId,"==========>","route")
            axios.get(`http://10.0.2.2:9090/Package/getById/${searchId}`)
          .then(res => {
              const Category = res.data;
        // console.info(Category.CarSubCategories)   
        setPackage([Category.Packages])
        console.log(Category.Packages)
        // console.log(SubCategory,"=====================>","Category")
    
    }).catch((error) => {
              console.error(error.message)
            })
    
    }, [])
    
    console.log(Package,"=====================>","Category")
  return (
<SafeAreaView>
<ScrollView>
<View>
{
  Package[0] === null ? (
    <>
    <View> 
    <Text style={{fontSize:30,fontWeight:"bold",color:"black",textAlign:"center"}}>
        Error No Data Found
    </Text>
    </View>
      </>

    ):(

      Package.map(({PackageName,PackageDescription,_id,PackagePrice,SubCategory_Id},index) => (
    <View style={{margin:6,borderWidth:5,backgroundColor:"lightblue"}} key={index}>
   <Text style={styles.textPart1}      onPress={() => {
              navigation.navigate({
                name: 'Booking',
                params: { packageId: _id , SubCategoryId:SubCategory_Id},
               merge:true
              })
            }}>Package Name:-<Text style={styles.textPart2}>{PackageName}</Text>  </Text>
   <Text style={styles.textPart1}      onPress={() => {
              navigation.navigate({
                name: 'Booking',
                params: { packageId: _id , SubCategoryId:SubCategory_Id},
               merge:true
              })
            }}>Package Description:-<Text style={styles.textPart2}>{PackageDescription}</Text>  </Text>
   <Text style={styles.textPart1}      onPress={() => {
              navigation.navigate({
                name: 'Packages',
                params: { packageId: _id , SubCategoryId:SubCategory_Id},
               merge:true
              })
            }}>Package Price:-<Text style={styles.textPart2}>{PackagePrice}</Text>  </Text>



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
  textPart1:{
    fontSize: 25, 
    color: "blue", 
    textAlign: "left" ,
    fontWeight:"900",
    margin:10
  },
  textPart2:{
    fontSize: 23, 
    color: "black", 
    textAlign: "right",
    fontWeight:"900",
    margin:10
  }
})