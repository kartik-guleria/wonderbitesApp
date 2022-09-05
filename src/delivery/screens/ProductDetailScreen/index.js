import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Share,
} from 'react-native';
import ImageSlider from 'components/ImageSlider';
import { INGRIDIENTS } from 'data/dummy-data';
import UnderlineView from 'components/underlineView';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';
import styles from './style';
import { COLORS, FONTS, SIZES } from 'assets/index';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showProductRequest } from './actions'
import Config from 'react-native-config';
import HeaderCrossWithShare from 'components/HeaderCrossWithShare';

const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { productId, addIngredients } = route.params;
  useEffect(() => {
    dispatch(showProductRequest(productId));
  }, []);
  const productDetail = useSelector(state => state.ProductDetailReducer.productDetail);
  const loading = useSelector(state => state.ProductDetailReducer.loading);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Link of the website",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {

    }
  };
  const renderCategoryGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.menuItem}
        // onPress={() =>
        //   props.navigation.navigate('Category', { categoryId: itemData.item.id })
        // }
        >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('window').width / 3.6,
            height: Dimensions.get('window').width / 3.6,
            margin: 8,
            borderRadius: SIZES.r,
            backgroundColor: '#F2F3F0',
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 2,
            elevation: 1,
          }}>
          <Image
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              resizeMode: 'contain',
              width: '55%',
              height: '50%',
              margin: 10,
            }}
            source={require('images/ingr2.png')}
          />
          <Text style={MainStyle.itemTitle}>{itemData.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const images = [
    require('images/grocery.png'),
    require('images/grocery.png'),
    require('images/grocery.png'),
    require('images/grocery.png'),
  ];

  const Header = () => {
    const thumb = productDetail?.media
    // alert(JSON.stringify(thumb));
    return (
      <View>
        <View style={{ height: 300, marginLeft: -20, marginRight: -20 }}>
          <ImageSlider images={images} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={MainStyle.textTitle}>{productDetail?.name}</Text>
          <Text style={[MainStyle.textTitle, { color: COLORS.red }]}>{productDetail?.price}L</Text>
        </View>
        <Text
          style={[
            MainStyle.inputPhone,
            {
              color: COLORS.darkGrey,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            },
          ]}>
          {productDetail?.calories} Kcal
        </Text>
        <Text
          style={[
            MainStyle.descTextLight,
            {
              padding: 14,
              paddingBottom: 0,
              textAlign: 'left',
              fontFamily:FONTS.normal,
              fontWeight: SIZES.w3,
              fontSize:SIZES.h3,
              marginBottom:16

            },
          ]}>
          {productDetail?.description}
        </Text>
        <UnderlineView />
        <Text style={[MainStyle.textTitle, { fontSize: SIZES.h2, marginTop: 16 }]}>
          {t('delivery:ingrieidients')}
        </Text>
      </View>
    );
  };
  const getFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 50,
          justifyContent: 'space-between',
          width: '95%',
          marginTop: 10,
          marginLeft: 10,
          borderTopColor: '#dddddd',
          borderTopWidth: 1,
        }}>
        <TouchableOpacity
          style={[styles.buttonStyleGray, { width: '45%', marginTop: 40 }]}
          onPress={() => {
            navigation.navigate({
              name: 'AddIngrieidients',
              params: {
                productId,
                savedIngredients: addIngredients
              },
            });
          }}>
          <View>
            <Text style={[styles.text_color, { color: COLORS.grey }]}>
              {t('delivery:modify')}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyleRed, { width: '45%', marginTop: 40 }]}
          onPress={() => {
            navigation.navigate({
              name: 'Confirmation',
              params: { productId: productId, savedIngredients: addIngredients },
            });
          }}>
          <View>
            <Text style={styles.text_color}>{t('delivery:addToBag')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <StatusBar barstyle="dark-content" />
      <HeaderCrossWithShare  navigation = {navigation} onClick ={() => onShare()}/>
      <FlatList
        bounces={false}
        style={{ marginLeft: 6, marginRight: 6 }}
        numColumns={3}
        data={addIngredients}
        showsVerticalScrollIndicator="false"
        renderItem={renderCategoryGridItem}
        ListHeaderComponent={Header}
        ListFooterComponent={getFooter}
      />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
