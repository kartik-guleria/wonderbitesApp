import React from "react";
import {View,TouchableOpacity } from 'react-native';
import { COLORS,MealPlanIcons } from "assets/";
const NextArrowButton = props => {
return( 
    <View>
<TouchableOpacity onPress={props.onSelect}
style = {{
    backgroundColor : props.condition ? COLORS.grey : COLORS.red,
    height:50,
    width:50,
    alignSelf:'flex-end',
    marginRight:16,
    justifyContent:'center',
    borderRadius:25,
    alignItems:'center'}}>
  {MealPlanIcons.whiteArrow}
   </TouchableOpacity>
   </View>
);
}

export default NextArrowButton;