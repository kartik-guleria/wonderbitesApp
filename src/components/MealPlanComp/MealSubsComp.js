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
const MealSubsComp = props => {
    return (
        <View>

            <View style={styles.productItem}>
                <View style={{ justifyContent: 'center', borderRadius: SIZES.r1, flexDirection: 'row' }}>
                    <View style={{ width: '60%' }} >
                        <TouchableOpacity style={{
                            backgroundColor: COLORS.white,
                        }} onPress={props.onSelect}>
                            <Text style={[styles.textTitle, { fontWeight: '500', color: COLORS.red }]}>Day 1 - Mon, 13 Sep </Text>
                            <Text style={styles.textTitle}>Toast and Fruits</Text>
                            <Text style={styles.descText}>
                                Salads, Fruits Bowls, Pitas, Sanwich , peanuts
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '40%', }}>
                        <Image source={require('assets/images/mealFood.png')} style={{ width: '100%', height: 103, borderRadius: 8, alignSelf: 'center' }} />
                    </View>

                </View>

            </View>
            <View style={{ margin: 8 }}>
                <UnderlineView />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    productItem: {
        borderRadius: SIZES.r1,
        marginLeft: SIZES.mlr1,
        marginRight: SIZES.mlr1,
        marginTop: 8,
        marginBottom: 8,
        alignItems: 'center'
    },
    textTitle: {
        fontWeight: 'bold',
        color: COLORS.black,
        fontFamily: FONTS.normal,
        fontSize: SIZES.h1,
        textAlign: 'left',
        justifyContent: 'center',
        marginTop: 8,
    },
    descText: {
        color: COLORS.black,
        marginTop: 10,
        fontSize: SIZES.h1,
        fontFamily: FONTS.normal,
        marginBottom: 10,
    },
});

export default MealSubsComp;
