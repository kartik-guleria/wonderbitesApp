import React, { useState ,useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import _ from "lodash";
import MySwitch from 'components/MySwitch';
import MyCustomSwitch from 'components/MyCustomSwitch';
import MainStyle from 'styleSheet/MainStyle';
import ImageSlider from 'components/ImageSlider';
import UnderlineView from 'components/underlineView';
import NavigationHeaderCross from 'components/NavigationHeaderCross';
import { useTranslation } from 'react-i18next';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  COLORS,
  SIZES,
} from 'assets/index';
import { showProductRequest } from '../ProductDetailScreen/actions';
import { addToCartRequest } from '../CategoryScreen/actions';
import { replace } from 'navigation/RootNaviagtion';
const ConfirmationScreen = ({ route }) => {
  const { productId, savedIngredients } = route.params;
  const commaSep = savedIngredients?.map(item => item.name).join(', ');
  const { t, i18n } = useTranslation();
  const onSelectSwitch = index => {
    //alert('Selected index: ' + index);
  };
  const dispatch = useDispatch();
  const productDetail = useSelector(state => state.ProductDetailReducer.productDetail);
  useEffect(() => {
    dispatch(showProductRequest(productId));
  }, []);
  const navigation = useNavigation();
  const images = [
    require('images/noodle.png'),
    require('images/noodle.png'),
    require('images/noodle.png'),
    require('images/noodle.png'),
  ];
  const [itemQuantity, setQuantity] = useState(1);

  const incrementValue = () => {
    setQuantity(itemQuantity + 1);
  };

  const decrementValue = () => {
    if (itemQuantity > 1) {
      setQuantity(itemQuantity - 1);
    }
  };
  const addedProductObject = {
    "action": "ADD",
    "products": {
      [productId]: {
        "qty": itemQuantity
      }
    },
      "ingredients": _.transform(savedIngredients, (result, ingredient) => {
        result[ingredient.id] = { qty: 1, product_id: productId }
      }, {})
  }

  const onConfirm = () => {
    dispatch(addToCartRequest(addedProductObject));
    replace('ChooseOption');
  }
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={{ height: '100%', backgroundColor: COLORS.white }}>
        <NavigationHeaderCross navigation={navigation} />
        <ScrollView bounces={false}>
          <View style={styles.bottomContainer}>
            <View style={{ height: 300 }}>
              <ImageSlider images={images} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[MainStyle.textTitle, { marginLeft: 0 }]}>
              {productDetail.name}
              </Text>
              <Text style={[MainStyle.textTitle, { color: COLORS.red }]}>
                {productDetail.price}L
              </Text>
            </View>
            <Text
              style={[
                MainStyle.descText,
                {
                  color: COLORS.darkGrey,
                  fontWeight: SIZES.w5,
                  textAlign: 'left',
                },
              ]}>
              {productDetail.calories} Kcal
            </Text>
            <Text
              style={[
                MainStyle.descText,
                {
                  borderColor: COLORS.lineColor,
                  marginTop: 15,
                  textAlign: 'left',
                },
              ]}>
              {t('delivery:ingrieidients')}
            </Text>
            <Text
              style={[
                MainStyle.descText,
                { fontWeight: SIZES.w5, marginTop: 10, textAlign: 'left' },
              ]}>
              {t('delivery:added')} : {''}
              {commaSep}
            </Text>
            <UnderlineView />
            <View style={[styles.textView,{marginTop:16,marginBottom:16}]}>
              <Text style={styles.text}>{t('delivery:quantity')}</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={decrementValue}>
                  <Image
                    style={styles.iconBox}
                    source={require('/images/minus.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 19,
                    marginRight: 19,
                    fontSize: SIZES.h3,
                    fontWeight: SIZES.w6,
                    alignSelf: 'center',
                  }}>
                  {itemQuantity}
                </Text>
                <TouchableOpacity onPress={incrementValue}>
                  <Image
                    style={styles.iconBox}
                    source={require('/images/plus.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <UnderlineView />

            {/* <View style={[styles.textView,{marginTop:16,marginBottom:16}]}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>{t('delivery:dressing')} (1/3)</Text>
              </View>
              <View>
                <MyCustomSwitch
                  selectionMode={1}
                  roundCorner={true}
                  option1= {t('delivery:onTheSide')}
                  option2={t('delivery:mixed')}
                  onSelectSwitch={onSelectSwitch}
                  selectionColor={COLORS.background2}
                />
              </View>
            </View>

            <UnderlineView />

            <View style={styles.textView}>
              <Text style={styles.text}>{t('delivery:addBread')}</Text>

              <View style={styles.breadSwitch}>
                <MySwitch />
              </View>
            </View> */}

            <UnderlineView />
          </View>
          <View
            style={{
              flexDirection: 'row',
              // marginBottom: 100,
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={[styles.buttonStyleGray, { width: '44%' }]}
              onPress={() => {
                navigation.navigate({
                  name: "ProductDetail",
                  params: { productId, savedIngredients },
                  merge: true,
                })
              }
              }>
              <View>
                <Text style={[styles.text_color, { color: COLORS.grey }]}>
                  {t('delivery:modify')}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonStyleRed, { width: '44%' }]}
              onPress={() => onConfirm()}>
              <View>
                <Text style={styles.text_color}>{t('delivery:confirm')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
