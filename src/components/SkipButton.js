import React from "react";
import { Text,TouchableOpacity,View} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {replace} from 'navigation/RootNaviagtion';
import { FONTS } from "assets/theme";
import { SIZES } from "assets/";
import { COLORS } from "assets/";

const SkipButton = props => {
    const navigation = useNavigation();

return (
    <View>
        <TouchableOpacity 
            onPress={props.onSelect}>
             <View style = {{borderRadius:16,borderColor:COLORS.grey,borderWidth:props.btnBorderDisplay,marginLeft:-40}}>
            <Text style = {{fontFamily:FONTS.bold,fontSize:SIZES.h1,lineHeight:SIZES.l3,marginLeft:7,marginRight:7,marginTop:5,marginBottom:5}}>
               {props.btnName}
            </Text>
            </View>
        </TouchableOpacity>
    </View>

);
};

export default SkipButton;
