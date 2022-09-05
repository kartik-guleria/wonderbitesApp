import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';


const Loader = props =>{
    return(
        // <View style = {{backgroundColor:'red'}}>
        <LottieView source={require('assets/Animations/loader.json')}
        autoPlay
        style = {props.style}
        />
        /* </View> */

    );
}
export default Loader;
