import React from "react";
import { Text,View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { navigationRef, replace } from 'navigation/RootNaviagtion';

const NetNotAvailable =props => {
 return(
     <View style = {{alignItems:'center',flex:1}}>
         <Text style = {{marginTop:200}}>hello</Text>
         <TouchableOpacity onPress={()=> replace('BottomTabs')}>
             <Text>
                 Retry
             </Text>
         </TouchableOpacity>
     </View>
 );
};

export default NetNotAvailable;