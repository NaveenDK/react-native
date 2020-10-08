import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  //console.log(props);

  return (
    <View>
    <Text style={styles.text}>App</Text>
    <Button 
     onPress={()=>{
        props.navigation.navigate('Components')
     }}
     title="Go to components Demo"
     
     />
     <TouchableOpacity onPress={() =>{console.log("List Pressed")}}>
        <Text>Go to List Demo</Text>
     </TouchableOpacity>
  </View>
  )
  
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
