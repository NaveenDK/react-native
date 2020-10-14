import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  //console.log(props);

  return (
    <View>
    <Text style={styles.text}>App</Text>
    <Button 
     onPress={()=>{
        navigation.navigate('Components')
     }}
     title="Go to components Demo"
     />
    <Button 
     onPress={()=>{
        navigation.navigate('List')
     }}
     title="Go to List Demo"
     />
        <Button 
     onPress={()=>{
        navigation.navigate('Images')
     }}
     title="Go to Image Screen"
     />
           <Button 
     onPress={()=>{
        navigation.navigate('Counter')
     }}
     title="Go to Counter Demo"
     />
           <Button 
     onPress={()=>{
        navigation.navigate('Color')
     }}
     title="Go to Color Demo"
     />
  </View>
  )
  
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
