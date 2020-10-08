import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    
    const friends =[
        {name:"Friend 1", age: "20" },
        {name:"Friend 2", age: "45"},
        {name: "Friend 3", age: "32"},
        {name:"Friend 4", age: "27"},
        {name:"Friend 5", age: "43"},
        {name:"Friend 6",  age: "23"},
        {name: "Friend 7", age: "29"}, 
        {name:"Friend 8", age: "09"}
    ]

    return (
    <FlatList 
     keyExtractor = {friend=>friend.name}
     data= {friends} renderItem={({item})=>{
        //element ==={item:{name:'Friend 1'}, index:0} therefore we use destructure to get item out
          return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>

    }}
    />
    );
}
const styles = StyleSheet.create({
    textStyle:{
        marginVertical:10
    }
})
export default ListScreen