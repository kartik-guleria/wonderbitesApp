import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import CuisinesBottomSheet from 'components/CuisinesBottomSheet';
import { CUISINES } from 'data/dummy-data';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons, NavIcons } from 'assets/index';
const CuisineList = props => {
    const [selectedIndex, setSelectedIndex] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        {
            selectedIndex == '1' ? setModalVisible(true) : null;
        }

    };
    const onCuisineClick = (id) => {
        setSelectedIndex(id);
        toggleModal();
    };
    const renderCuisinesItem = items => {
        return (
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: SIZES.f1,
                    borderColor: COLORS.grey,
                    borderWidth: 1,
                    borderRadius: SIZES.r1,
                    height: 34,
                    marginLeft: SIZES.mlr1,
                    marginTop: 5,
                    marginBottom: 5,
                }}
                onPress={() => onCuisineClick(items.item.id)}>
                {/* onPress={() => setSelectedIndex(items.item.id)}>
        {toggleModal()} */}
                <Modal
                    isVisible={isModalVisible}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection="down"
                    backgroundColor="#FFFFFF"
                    style={{ width: '100%', marginTop: 200, marginLeft: 0 }}>
                    <View style={{ marginTop: 10 }}>
                        <CuisinesBottomSheet onPressClearAll={null} />
                    </View>
                </Modal>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: SIZES.f1,
                        height: 34,
                        marginTop: 8,
                        marginBottom: 8,
                        marginLeft: 12,
                        marginRight: 12,
                    }}>
                    <Text
                        style={{
                            alignContent: 'center',
                            fontSize: SIZES.h,
                            color: COLORS.black,
                            fontWeight: SIZES.w5,
                            fontFamily: FONTS.normal,
                        }}>
                        {items.item.title}
                    </Text>
                    <View style={{ marginLeft: 10 }}>
                        {items.item.title === 'Cuisines' ? DelIcons.blackDownArrow : null}
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <FlatList
                bounces={false}
                horizontal
                data={props.data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={items => items.id}
                renderItem={renderCuisinesItem}
            />
        </View>
    )
}
export default CuisineList;
