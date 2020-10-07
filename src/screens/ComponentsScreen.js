import React from 'react'
import {Text,StyleSheet, View} from 'react-native'

const ComponentsScreen = () =>{
   const name = "Naveen"
  return<View>
   <Text style={styles.textStyle}>Getting started with react native!</Text>
   <Text style={styles.subTextStyle}> My Name is {name}</Text>
  </View>
}
//

const styles = StyleSheet.create({
  textStyle:{
      fontSize:30
  },
  subTextStyle:{
      fontSize:10
  }
});

export default ComponentsScreen;