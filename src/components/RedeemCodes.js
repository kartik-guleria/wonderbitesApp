import { COLORS, DelIcons } from "assets/index";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


const RedeemCode = props => {
    return (
        <View>

            <View style={{ height: 32, borderRadius: 6, justifyContent: 'center', backgroundColor: COLORS.grey, alignSelf: 'center', marginLeft: 10, marginRight: 10 }}>
                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>
                    {props.text}
                </Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'flex-end' }} onPress={props.onClick} key={props.key}>
                <View style={{ marginTop: -38 }}>
                    {DelIcons.redMinus}
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default RedeemCode;
