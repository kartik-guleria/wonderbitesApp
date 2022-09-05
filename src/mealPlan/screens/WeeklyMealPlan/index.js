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

import { MealPlanOption } from 'data/mealPlanData';
import MealFoodGrid from 'components/MealPlanComp/MealFoodGrid';
import MainStyle from 'styleSheet/MainStyle';
import HeaderRight from 'components/HeaderRight';
import { useTranslation } from 'react-i18next';
import { COLORS, FONTS, SIZES } from 'assets/index';
import { useNavigation } from '@react-navigation/native';
import CuisineList from 'components/CuisineList';
import styles from './style';
import { Colors } from 'react-native-paper';
import UnderlineView from 'components/underlineView';
const WeeklyMealPlan = props => {
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();
    const Header = () => {
        return (
            <View>
                <View style={{ marginTop: 10, marginBottom: -10 }}>
                    <CuisineList data={MealPlanOption} />
                </View>
                <Text style={[MainStyle.textTitle, { fontSize: 14, margin: 0, marginLeft: 18 }]}>{t('mealPlan:mySubscription')}</Text>
                <View style={{ margin: 15, backgroundColor: '#F7F7F7', borderRadius: 4 }}>
                    <View><Text style={[MainStyle.textTitle, { fontWeight: '500', marginLeft: 4, }]} >{t('mealPlan:monthlyMealPlan')}</Text>
                        <Text style={[MainStyle.descTextLight, { fontSize: 14, textAlign: 'left', marginLeft: 17 }]}>{t('mealPlan:monthly')} <Text style={
                            { fontSize: 6 }
                        }>⬤ </Text> <Text>5 {t('mealPlan:daysAWeek')} </Text><Text style={
                            { fontSize: 6 }
                        }>⬤ </Text> <Text>3 {t('mealPlan:weeks')}
                            </Text> </Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.buttonStyleRed}
                                onPress={() => props.navigation.navigate('QuestionnaireFront')}>
                                <Text style={styles.text_color}>{t('mealPlan:viewMealDetails')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyleGray}
                                onPress={() => props.navigation.navigate('BottomTabs')}>
                                <Text style={[styles.text_color, { color: COLORS.red }]}>{t('mealPlan:reschedule')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 10, }}>
                    <Text style={[MainStyle.textTitle, { fontSize: 14, marginLeft: 18, marginTop: 0 }]}>{t('mealPlan:allSubscriptions')}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image source={require('assets/images/sort.png')} style={{ width: 12, height: 12, marginTop: 3 }} />
                        <Text style={[MainStyle.textTitle, { fontSize: 12, marginTop: 0, color: '#626262' }]}>{t('mealPlan:sortFilter')}</Text></View>
                </View>
                <UnderlineView />
            </View >
        );
    };
    const renderProductGridItem = itemData => {
        // alert(JSON.stringify(catProductData?.products));
        return (
            <MealFoodGrid
                title={itemData.item.name}
                shortDesc={itemData.item.description}
                longDesc={itemData.item.description}
                rating={itemData.item.rating}
                price={itemData.item.price}
                image={itemData.item.thumbnail}
                kcal={itemData.item.calories}

                onSelect={() => {
                    navigation.navigate({
                        name: 'MealSubscription',
                        params: { mealId: itemData.item.id },
                    });
                }}
            />
        );
    };
    const checkLoginData = () => {
        navigation.pop();
    };
    return (
        <SafeAreaView style={MainStyle.safeAreaContainerLight}>
            <HeaderRight navigation={navigation} onPressWonderbites={() => checkLoginData()} />
            <View style={{ marginBottom: 50 }}>
                <FlatList
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: COLORS.white }}
                    numColumns={1}
                    data={MealPlanOption}
                    renderItem={renderProductGridItem}
                    ListHeaderComponent={Header}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};
export default WeeklyMealPlan;
