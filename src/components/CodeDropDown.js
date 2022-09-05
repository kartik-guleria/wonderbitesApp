import { COLORS, FONTS, SIZES } from 'assets/theme'
import { FlatList } from 'react-native';
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DelIcons } from "assets/index";
import { useNavigation } from '@react-navigation/native';



const CodeDropDown = props => {
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState({});
    const onClick = (itemData) => {
        setSelectedItem(itemData.item);

    }
    const renderItem = itemData => {
        return (
            <><TouchableOpacity
                onPress={ ()=> onClick(itemData)}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: FONTS.normal,
                        fontWeight: SIZES.w4,
                        marginTop: 5,
                        marginBottom: 5,
                        width: '100%',
                        color: selectedItem.id === itemData.item.id ? COLORS.red : null,
                    }}>
                    {itemData.item.name}
                </Text>

            </TouchableOpacity>
                <View
                    style={{ backgroundColor: COLORS.grey, height: 1 }}>
                </View>
            </>
        );
    }

    return (
        <View style={{ alignContent: 'center' }}>
            <View style={{ alignItems: 'center', marginTop: -20, marginBottom: 40 }}>
                {DelIcons.flatIndicatorGrey}
            </View>
            <FlatList
                // bounces={false}
                keyExtractor={(item, index) => item.id}
                data={props.codes}
                renderItem={renderItem}
                scrollEnabled="false"
                numColumns={1}
            />
        </View>

    );
};

export default CodeDropDown;
