import * as React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import NavigationHeader from 'components/NavigationHeader';
import StarReview from 'react-native-stars';
import UnderlineView from 'components/underlineView';
import { REVIEWS } from 'data/dummy-data';
import { useTranslation } from 'react-i18next';
import { FONTS, SIZES } from 'assets/index';

const ReviewsScreen = props => {
    const { t, i18n } = useTranslation();
    const renderGridItem = itemData => {
        return (
            <View style={{ marginLeft: 10, marginRight: 10, marginTop: 15 }}>
                <Text style={{ fontWeight: '900', fontFamily: 'Gotham', fontSize: 17 }}>
                    {itemData.item.name}
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <StarReview />
                        <Text style={{ fontWeight: '700', fontFamily: 'Gotham', fontSize: 15, marginLeft: 10 }}>
                            {itemData.item.rating}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: '700', fontFamily: 'Gotham', fontSize: 15 }}>
                            {itemData.item.date}
                        </Text>
                    </View>
                </View>

                <Text style={{ fontWeight: '900', fontFamily: 'Gotham', fontSize: 20, marginTop: 16 }}>
                    {itemData.item.title}
                </Text>
                <Text style={{ fontFamily: 'Gotham', fontSize: 15, marginTop: 16, marginBottom: 10 }}>
                    {itemData.item.description}
                </Text>
                <UnderlineView />
            </View>
        );
    };
    return (
        <SafeAreaView>
            <NavigationHeader title={t('common:Reviews')} displayLine={true} navigation={props.navigation} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: SIZES.h7, fontWeight: SIZES.w8, fontFamily: FONTS.normal }}>
                    4.8
                </Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <StarReview />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: SIZES.h2, fontWeight: SIZES.w8, fontFamily: FONTS.normal }}>
                    {t('common:basedOn')} 2 {t('common:reviews')}
                </Text>
            </View>
            <UnderlineView />
            <FlatList
                bounces={false}
                keyExtractor={(item, index) => item.id}
                data={REVIEWS}
                showsVerticalScrollIndicator="false"
                renderItem={renderGridItem}
                numColumns={1}
            />
        </SafeAreaView>
    );
}
export default ReviewsScreen;