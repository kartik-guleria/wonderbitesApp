import React, { useState, useEffect } from 'react';
import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Alert,
    Image

} from 'react-native';
import BannerSlider from 'components/BannerSlider';
import HighlightsBanner from 'components/MealPlanComp/HighlightsBanner';
import TestimonialBanner from 'components/MealPlanComp/TestimonialBanner';
import MealSubsComp from 'components/MealPlanComp/MealSubsComp';
import MainStyle from 'styleSheet/MainStyle';
import HeaderRight from 'components/HeaderRight';
import { useTranslation } from 'react-i18next';
import { COLORS, FONTS, SIZES, MealPlanIcons } from 'assets/index';
import { useNavigation } from '@react-navigation/native';
import CuisineList from 'components/CuisineList';
import styles from './style';
import { Colors } from 'react-native-paper';
import MyButton from 'components/MyButton';
import UnderlineView from 'components/underlineView';
import { HowItWorks } from 'data/mealPlanData';
import { MealPlan } from 'data/mealPlanData';
const WelcomeMealKit = ({ route }) => {
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();


    const images = [require('assets/images/mealBanner.png'), require('assets/images/mealBanner.png')];
    const highLightsImages = [require('assets/images/wrap.png'), require('assets/images/wrap.png'), require('assets/images/wrap.png'), require('assets/images/wrap.png'), require('assets/images/wrap.png'),];
    const Header = () => {
        return (
            <View>

                <View style={[MainStyle.shadowForView, { margin: 15 }]}>
                    <View >

                        <View style={{ textAlign: 'center', alignItems: "center", padding: 14 }}>
                            {MealPlanIcons.wonderBiteLogo}
                            <Text style={[MainStyle.textTitle, { fontWeight: '500', margin: 0, marginTop: 14, fontSize: 16, alignSelf: 'center' }]} > Become a part of Wonderbites family</Text>
                            <Text style={[MainStyle.descTextLight, { fontSize: 12, marginTop: 8, }]}>Get delicious healthy meal plans with pre-measured ingredients delivered straight to your door  </Text>

                        </View>
                        <MyButton title="Personalize your meal Kit" onSelect={() => {
                            navigation.navigate({
                                name: 'SubscribeMealKit'
                            });
                        }} />
                        <Text style={[MainStyle.textTitle, { fontWeight: '500', marginTop: -10, marginLeft: 4, fontSize: 14, alignSelf: 'center' }]} > Already a member ? Sign in</Text>
                    </View>
                </View>
                <Text style={[MainStyle.textTitle, { fontWeight: '500', }]} > Features & Benefits</Text>
                <View style={{ marginLeft: 15 }}><BannerSlider images={images} /></View>
                <Text style={[MainStyle.textTitle, { fontWeight: '500', }]} > Highlights </Text>
                <View style={{ marginLeft: 15 }}><HighlightsBanner images={highLightsImages} /></View>
                <Text style={[MainStyle.textTitle, { fontWeight: '500', }]} > This is how it works </Text>


            </View>
        );
    };

    const Footer = () => {
        return (
            <View>
                <MyButton title="Personalize your meal Kit" onSelect={() => {
                    navigation.navigate({
                        name: 'SubscribeMealKit'
                    });
                }} />
                <Text style={[MainStyle.textTitle, { fontWeight: '500', marginTop: -10, marginLeft: 4, fontSize: 14, alignSelf: 'center' }]} > Already a member ? Sign in</Text>
                <Text style={[MainStyle.textTitle, { fontWeight: '500', }]} > Testimonials </Text>
                <View style={{ marginLeft: 15 }}><TestimonialBanner images={highLightsImages} /></View>
                <Text style={[MainStyle.textTitle, { fontWeight: '500', }]} > This is how we prepare your food </Text>
                <Image style={{ flex: 1, margin: 15, height: 200, width: '90%', borderRadius: 12 }} source={require('assets/images/mealFood.png')} />
                <MyButton title="Personalize your meal Kit" onSelect={() => {
                    navigation.navigate({
                        name: 'SubscribeMealKit'
                    });
                }} />
                <Text style={[MainStyle.textTitle, { fontWeight: '500', marginTop: -10, marginLeft: 4, fontSize: 14, alignSelf: 'center', marginBottom: 20 }]} > Already a member ? Sign in</Text>
            </View>
        );
    };
    const renderProductGridItem = itemData => {
        // alert(JSON.stringify(catProductData?.products));
        return (
            <View style={styles.productItem}>

                <View >
                    <View style={[styles.productItem, { justifyContent: 'center', borderRadius: SIZES.r1, flexDirection: 'row' }]}>
                        <View style={{ marginRight: 10 }}>
                            {itemData.item.iconStep}
                        </View>
                        <View>
                            <TouchableOpacity style={{
                                backgroundColor: COLORS.white,
                            }} >
                                <Text style={[MainStyle.textTitle, { textAlign: 'left', marginLeft: 0, margin: 0, marginBottom: 5, }]}>{itemData.item.title}</Text>
                                <Text style={styles.descText}>
                                    {itemData.item.desc}
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>

            </View>
        );
    };
    const checkLoginData = () => {
        navigation.pop();
    };
    return (
        <SafeAreaView style={MainStyle.safeAreaContainerLight}>

            <View style={{ marginBottom: 100 }}>
                <HeaderRight navigation={navigation} onPressWonderbites={() => checkLoginData()} />
                <CuisineList data={MealPlan} />
                <FlatList
                    bounces={false}
                    // showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: COLORS.white }}
                    numColumns={1}
                    data={HowItWorks}
                    renderItem={renderProductGridItem}
                    // columnWrapperStyle={{ backgroundColor: '#dddddd' }}
                    ListHeaderComponent={Header}
                    ListFooterComponent={Footer}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};
export default WelcomeMealKit;
