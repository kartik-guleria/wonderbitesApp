import React, { useEffect, useState } from 'react';
import BannerSlider from 'components/BannerSlider';
import MainStyle from 'styleSheet/MainStyle';
import { addToCartRequest,addToWishlistRequest } from '../CategoryScreen/actions';
import { cartListRequest } from '../CartScreen/actions';
import Modal from 'react-native-modal';
import SuccessModel from 'components/SuccessModel';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import SEARCHRESULT from 'data/dummy-data';
import { useTranslation } from 'react-i18next';
import styles from './style';
import { COLORS, ComIcons, DelIcons, FONTS, SIZES } from 'assets/index';
import SearchBar from '../PopularSearchScreen/SearchBar';
import UnderlineView from 'components/underlineView';
import { useDispatch, useSelector } from 'react-redux';
import { productListRequest } from './actions';
import ProductGridTile from 'components/ProductGridTile';
import { ScrollView } from 'react-native-gesture-handler';
import Config from 'react-native-config';
import { useNavigation } from '@react-navigation/native';
import { showProductRequest } from '../ProductDetailScreen/actions';
import Loader from 'components/Loader';
const PopularSearchScreen = props => {
  const toggleAlert = () => {
    setAlertVisible(!isAlertVisible);
  };
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isAddAlertVisible, setAddAlertVisible] = useState(false);
  const toggleAddAlert = () => {
    setAddAlertVisible(!isAddAlertVisible);
  };  
  const [heart, setHeart] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const productListData = useSelector(state => state.PopularSearchReducer.productListData);
  const loading = useSelector(state => state.PopularSearchReducer.loading);
  const { t, i18n } = useTranslation();
  const images = [
    require('../../../images/banner.png'),
    require('../../../images/banner.png'),
    require('../../../images/banner.png'),
    require('../../../images/banner.png'),
  ];
  useEffect(() => {
    dispatch(productListRequest());
  }, []);

  const getFooter = () => {
    return (
      <View>
        <View style={{ flex: SIZES.f1, alignItems: 'center' }}>
          <Text style={styles.headingDesc}>{t('delivery:offersForYou')}</Text>
        </View>
        <View style={styles.container}>
          <BannerSlider images={images} />
        </View>
      </View>
    );
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
          // marginRight: SIZES.mlr1,
          marginLeft: SIZES.mlr1,
          marginTop: 5,
          marginBottom: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: SIZES.f1,
            height: 34,
            // margin: 5,
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
        </View>
      </TouchableOpacity>
    );
  };

  const POPULAR = [
    { id: 1, title: 'Pizza' },
    { id: 2, title: 'Burger' },
    { id: 3, title: 'Pasta' },
    { id: 4, title: 'Maki' },
    { id: 5, title: 'Pasta' },
    { id: 6, title: 'Risotto' },
  ];
  const renderPopoularSearch = itemData => {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', borderColor: COLORS.grey, borderWidth: 1, margin: 12, height: 30 }}
      onPress={() => {
        props.navigation.navigate({
          name: 'Category',
          params: {categoryId: itemData.item.id},
        });
      }}>
        <View style={{
          marginLeft: 5, justifyContent: 'center', marginRight: 14
        }}>
          {DelIcons.popularSearch}
        </View>
        <Text style={{
          fontSize: 12, alignSelf: 'center', marginRight: 6
        }}>
          {itemData.item.title}
        </Text>
      </TouchableOpacity>
    );
  }
  const [selectedId,setSelectedId] = useState('');
const onPressProduct = (items) => {
  return(
  setSelectedId(items.item.id),
  dispatch(showProductRequest(items.item.id)),
  navigation.navigate({
    name: 'ProductDetail',
    params: { productId: items.item.id },
  })
  );
};
const onAddToCart=(items) => {
  dispatch(addToCartRequest({
    "action": "ADD",
    "products": {
      [items.item.id]: {
        "qty": 1
      }
    }
  }));
  dispatch(cartListRequest());
toggleAddAlert();
};
const onAddToWishlist = (items) => {
  dispatch(addToWishlistRequest(
    {
      "action": "ADD", "products": { [items.item.id]: { "qty": 1 } }
  }));
  toggleAlert();
  setHeart(true);
};
  const renderProductGridItem = items => {
    const thumb = items.item.thumbnail
    const thumbnails = `${Config.BASE_URL}${thumb}`
    console.log(thumbnails);
    return (
      <ProductGridTile
        title={items.item.name}
        shortDesc={items.item.description}
        longDesc={items.item.description}
        price={items.item.price}
        image={items.item.thumbnail}
        kcal={items.item.calories}
        onAddPress={() => onAddToCart(items)}
        onAddWishlist={() => onAddToWishlist(items)}
        onSelect={() => {
          dispatch(showProductRequest(items.item.id)),
          navigation.navigate({
            name: 'ProductDetail',
            params: { productId: items.item.id },
          });
        }}
      />
    );
  };
  return (
    <SafeAreaView style = {MainStyle.safeAreaContainerLight}>
      <View style={{
        backgroundColor: COLORS.white,
      }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ marginLeft: 15, justifyContent: 'center' }} onPress={() => props.navigation.pop()}>
            {ComIcons.back}
          </TouchableOpacity>
          <SearchBar customContainerStyle={{ marginBottom: -41, width: '90%' }} />
        </View>
        <UnderlineView />
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center', marginLeft: 16 }}>
            <Text style={styles.headingDesc}>{t('delivery:popularSearches')}</Text>
          </View>
          <FlatList
            bounces={false}
            numColumns={3}
            data={POPULAR}
            keyExtractor={(item, index) => item.id}
            renderItem={renderPopoularSearch}
          />
          <View style={[MainStyle.wrapperView, { padding: 0, marginLeft: 10 }]}>
            <View
              style={{
                width: Dimensions.get('window').width,
              }}>
              <FlatList
                bounces={false}
                numColumns={3}
                data={SEARCHRESULT}
                renderItem={renderCuisinesItem}
                ListFooterComponent={getFooter}
              />
            </View>
          </View>
          <View style={{ marginRight: 0, marginBottom: 150 }}>
          {loading ? <Loader style={{ position: 'relative', height: 100, width: 100, alignSelf: 'center' }} /> : 
            <FlatList
              bounces={false}
              numColumns={1}
              data={productListData}
              renderItem={renderProductGridItem}
              keyExtractor={(item, index) => item.id}
            />}
             <Modal isVisible={isAlertVisible}>
          <SuccessModel
            successTitle={"Product Added to Wishlist"}
            onSelect={toggleAlert}
            type="Success"
          />
        </Modal>
        <Modal isVisible={isAddAlertVisible}>
          <SuccessModel
            successTitle={"Product Added to Cart"}
            onSelect={toggleAddAlert}
            type="Success"
          />
        </Modal>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PopularSearchScreen;
