import React from 'react'
import {Text,StyleSheet, View,Image} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = ()=>{
    return(<View>
        <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} />
        <ImageDetail title="Sea" imageSource={require('../../assets/beach.jpg')} />
        <ImageDetail title="Sea" imageSource={require('../../assets/mountain.jpg')} />  
    </View>)
}

export default ImageScreen;