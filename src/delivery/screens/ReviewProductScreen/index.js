import React from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    View,
    TextInput,
    SafeAreaView
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { COLORS, FONTS, SIZES } from 'assets/index';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import styles from './style';
const ReviewProductScreen = ({
    route: {
        params: { productTitle, productDetail, productPrice },
    }, navigation }) => {
    const { t, i18n } = useTranslation();
    return (
        <SafeAreaView style={MainStyle.safeAreaContainerLight}>
            <NavigationHeader
                title={'Review Product'}
                navigation={navigation}
            />
            <View style={{ marginLeft: 15, marginRight: 15 }}>
                <View
                    style={{
                        marginTop: 20,
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontFamily: FONTS.normal, fontSize: SIZES.h3, fontWeight: SIZES.w6, lineHeight: SIZES.l4 }}>{productTitle}</Text>
                            <Text style={{ fontFamily: FONTS.normal, fontSize: SIZES.h2, fontWeight: SIZES.w3, lineHeight: SIZES.l3, marginTop: 5 }}>{productDetail}</Text>
                            <Text style={{ fontFamily: FONTS.normal, fontSize: SIZES.h1, fontWeight: SIZES.w7, lineHeight: SIZES.l3, marginTop: 10, color: COLORS.red }}>{productPrice}</Text>
                        </View>
                        <View
                            style={{
                                backgroundColor: '#F2F3F0',
                                height: 60,
                                width: 60,
                                borderRadius: SIZES.r,
                            }}>
                            <Image
                                style={styles.image}
                                source={null}
                            />
                        </View>
                    </View>
                </View>

                <Text style={{ fontFamily: FONTS.normal, fontSize: SIZES.h3, fontWeight: SIZES.w5, lineHeight: SIZES.l6, marginTop: 25 }}>Rate Product</Text>
                <Text style={{ fontFamily: FONTS.normal, fontSize: SIZES.h3, fontWeight: SIZES.w5, lineHeight: SIZES.l6, marginTop: 25 }}>Review Title</Text>
                <View style={{
                    marginTop: 10,
                    borderRadius: SIZES.r1,
                    borderColor: COLORS.darkGrey,
                    borderWidth: 1,
                    height: 57
                }}>
                    <TextInput
                        maxLength={50}
                        style={styles.feedbackText}
                        multiline
                        placeholder="Enter your feedback here..."
                    />
                </View>
                <Text style={{ fontFamily: FONTS.normal, fontSize: SIZES.h3, fontWeight: SIZES.w5, lineHeight: SIZES.l6, marginTop: 25 }}>Write Review</Text>

                <View style={styles.boxView}>
                    <TextInput
                        style={styles.feedbackText}
                        multiline
                        placeholder="Enter your feedback here..."
                    />
                </View>
                <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonText}>Submit </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ReviewProductScreen;

