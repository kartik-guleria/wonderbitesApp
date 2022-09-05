import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { COLORS, FONTS, SIZES } from 'assets/index';
import UnderlineView from 'components/underlineView';
const MealFoodGrid = props => {

    return (
        <View>
            <Text style={[styles.textTitle, { fontWeight: '500', margin: 15, marginLeft: 15 }]}>Monday, 13 September</Text>
            <View style={styles.productItem}>

                <View style={{ backgroundColor: '#F2F3F0', borderRadius: SIZES.r1 }}>

                    <View style={styles.productRow}>
                        <Image source={require('assets/images/mealFood.png')} style={{ width: '100%', height: 217 }} />
                    </View>



                    <TouchableOpacity style={{
                        backgroundColor: COLORS.white,
                        borderBottomEndRadius: 12,
                        borderBottomStartRadius: 12,
                    }} onPress={props.onSelect}>
                        <View
                            style={{
                                flexDirection: 'row',
                                flex: 2,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text style={styles.textTitle}>Cottage cheese, vegetables</Text>
                            <Text style={[styles.descText, { margin: 15, fontWeight: SIZES.w5, color: COLORS.borderColor }]}>
                                375 Kcal
                            </Text>
                        </View>
                        <Text style={styles.descText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod phasellus.
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ margin: 15, marginBottom: 5 }}>
                <UnderlineView />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    productItem: {
        borderRadius: SIZES.r1,
        marginLeft: SIZES.mlr1,
        marginRight: SIZES.mlr1,
        marginTop: 8,
        marginBottom: 8,
        borderColor: COLORS.red,
        shadowColor: COLORS.titleBlack,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 0 },
    },
    buttonStyleRed: {
        backgroundColor: COLORS.red,
        height: 30,
        alignItems: 'center',
        width: 75,
        borderRadius: SIZES.r,
        marginLeft: 10,
        marginRight: 8,
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        // marginBottom: 10,
        justifyContent: 'center',
        color: COLORS.white,
        fontSize: SIZES.h,
        fontFamily: FONTS.normal,
    },
    textTitle: {
        fontWeight: SIZES.w7,
        color: COLORS.black,
        fontFamily: FONTS.normal,
        fontSize: SIZES.h3,
        alignSelf: 'flex-start',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 8,
        marginTop: 15,
        // marginBottom: 5,
    },
    descText: {
        color: COLORS.black,
        marginLeft: 10,
        marginRight: 6,
        fontSize: SIZES.h,
        fontFamily: FONTS.normal,
        marginBottom: 15,
    },
    rateText: {
        color: COLORS.black,
        fontSize: SIZES.h3,
        fontFamily: FONTS.normal,
        fontWeight: SIZES.w5,
    },

    circleView: {
        height: 30,
        width: 30,
        backgroundColor: COLORS.white,
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: SIZES.r2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    productRow: {
        flexDirection: 'row',
        borderRadius: SIZES.r1,

    },

    productDescription: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -40,
    },
    bgImge: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: SIZES.h4,
        color: 'white',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
});

export default MealFoodGrid;
