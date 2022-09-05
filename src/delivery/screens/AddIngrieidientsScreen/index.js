import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import MainStyles from 'styleSheet/MainStyle';
import {
  INGRIDIENTS,
  INGRIDIENTSTYPE,
  PRODUCTS,
  ADDINGRIDIENTS,
} from 'data/dummy-data';
import UnderlineView from 'components/underlineView';
import {useTranslation} from 'react-i18next';
import styles from './style';
import {COLORS, FONTS, SIZES} from 'assets/index';
import { showProductRequest } from 'delivery/screens/ProductDetailScreen/actions'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryRequest } from '../MainScreen/actions';
import { fetchCategoryProductRequest } from '../CategoryScreen/actions'
const AddIngrieidientsScreen = ({route, navigation}) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { productId, savedIngredients } = route.params;
  const [addIngredients, setAddIngredients] = useState(savedIngredients == null ? [] : savedIngredients);

  useEffect(() => {
    dispatch(fetchCategoryRequest({ params: { type: "ingredient", with: ['category.ingredients'] } }));
  }, [selCategory]);

  const productDetail = useSelector(state => state.ProductDetailReducer.productDetail);
  const loading = useSelector(state => state.ProductDetailReducer.loading);
  const categoryData = useSelector(state => state.CategoryListReducer.categoryData);

  const [selCategory, setSelCategory] = useState(0);
  const onSelectCat = (index) => {
    setSelCategory(index);
  };
  const renderCategoryGridItem = itemData => {
    return (
      <View
        style={{
            alignItems: 'center',
            width: Dimensions.get('window').width / 3.8,
            height: Dimensions.get('window').width / 3.8,
            margin: 10,
            borderRadius: SIZES.r,
            backgroundColor: '#F2F3F0',
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 2,
            elevation: 1,
            transform: [{rotate: '4deg'}],
          }}>
        <TouchableOpacity
          style={[styles.crossImage, { marginRight: 12 }]}
          onPress={() => {
            setAddIngredients(current =>
              current.filter(addIngredients => {
                // 👇️ remove object that has id equal to 2
                return addIngredients.id != itemData.item.id;
              }),
            )
          }}>
            <Image
            style={[styles.crossImage, { height: '100%', width: '100%' }]}
              source={require('images/cross-small.png')}
          />
        </TouchableOpacity>
            <Image
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                resizeMode: 'contain',
                width: '55%',
                height: '50%',
              }}
              source={require('images/ingr2.png')}
            />
        
        <Text style={MainStyles.itemTitle}>{itemData.item.name}</Text>
      </View>
    );
  };
  const renderAddGridItem = itemData => {
    return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          width: Dimensions.get('window').width / 4,
          height: Dimensions.get('window').width / 4,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 8,
            borderRadius: SIZES.r,
            backgroundColor: '#F2F3F0',
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 2,
            elevation: 1,
          }}>
        <TouchableOpacity
          style={styles.plusImage}
          onPress={() => {
            setAddIngredients(addIngredients => [...addIngredients, itemData.item]);
          }}>
            <Image
              style={{
                justifyContent: 'flex-end',
              resizeMode: 'contain',
              height: '100%', width: '100%',
                alignSelf: 'flex-end',
                marginRight:10,
                marginTop:0,
              }}
              source={require('images/plus-small.png')}
          />
        </TouchableOpacity>
            <Image
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                resizeMode: 'contain',
                width: '55%',
                height: '50%',
              }}
              source={require('images/ingr2.png')}
            />
          {/* </View> */}
          <Text
            style={{
              alignContent: 'center',
              fontSize: SIZES.h,
              color: COLORS.black,
            }}>
          {itemData.item.name}
          </Text>
      </View>
    );
  };
  const renderCuisinesItem = items => {
    return (
      <TouchableOpacity
        style={MainStyles.menuItem}
        onPress={() => {
          setSelCategory(items.index);
        }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: SIZES.f1,
            borderBottomColor: selCategory == items.index ? 'red' : COLORS.grey,
            borderBottomWidth: selCategory == items.index ? 3 : 1,
          height: 34,
        }}>
        <Text
          style={{
            alignContent: 'center',
            fontSize: SIZES.h2,
            width: Dimensions.get('window').width / 5,
            color: COLORS.black,
              textAlign: 'center',
            fontFamily: FONTS.normal,
          }}>
            {items.item.name}
        </Text>
      </View>
      </TouchableOpacity>
    );
  };

  const Header = () => {
    const {t, i18n} = useTranslation();

    return (
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.textTitle}>{productDetail?.name}</Text>
          <Text style={[styles.textTitle, { color: COLORS.red }]}>{productDetail?.price}L</Text>
        </View>
        <Text
          style={[styles.descText, {color: COLORS.darkGrey, marginBottom: 10}]}>
          {productDetail?.calories} Kcal
        </Text>
        <Text style={[MainStyles.descTextLight, {textAlign: 'left'}]}>
          {productDetail?.description}
        </Text>
        <UnderlineView />
        <Text style={MainStyles.menuItem}>INGRIDIENTS</Text>
      </View>
    );
  };
  const getFooter = () => {
    return (
      <View>
        <FlatList
          bounces={false}
          numColumns={5}
          data={categoryData}
          // keyExtractor={(item, index)}
          renderItem={renderCuisinesItem}
        />
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'space-between',
            width: '95%',
            marginTop: 10,
          }}>
          <FlatList
            bounces={false}
            numColumns={3}

            data={categoryData[selCategory]?.ingredients}
            renderItem={renderAddGridItem}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 50,
            justifyContent: 'space-between',
            marginLeft: 10,

            borderTopColor: '#dddddd',
            borderTopWidth: 1,
          }}>
          <View style={{flex: 1, marginRight: 20}}>
            <TouchableOpacity
              style={[styles.buttonStyleGray, {marginTop: 40}]}
              onPress={() => {
                dispatch(fetchCategoryRequest({ params: { type: "product" } }));
                navigation.pop();
              }}>
              <Text style={[styles.text_color, {color: COLORS.grey}]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, marginRight: 10}}>
            <TouchableOpacity
              style={[styles.buttonStyleRed, {marginTop: 40}]}
              onPress={() => {
                dispatch(fetchCategoryRequest({ params: { type: "product" } }));
                navigation.navigate({
                  name: "ProductDetail",
                  params: { productId, addIngredients },
                  merge: true,
                })
              }}>
              <Text style={styles.text_color}>I'm Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
      <View style={MainStyles.screen}>
        <View style={{backgroundColor: COLORS.white, flex: SIZES.f1}}>
          <FlatList
            bounces={false}
            style={{marginLeft: 8, marginRight: 8}}
            numColumns={3}
            showsVerticalScrollIndicator="false"
            // keyExtractor={(item, index)}
            data={addIngredients}
            renderItem={renderCategoryGridItem}
            ListHeaderComponent={Header}
            ListFooterComponent={getFooter}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddIngrieidientsScreen;
