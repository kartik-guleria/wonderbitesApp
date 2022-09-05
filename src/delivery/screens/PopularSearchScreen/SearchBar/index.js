import React, {memo, forwardRef} from 'react';
import {
  View,
  ActivityIndicator,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';
import Style from './style';
import {DelIcons} from 'assets/index';
import { useTranslation } from 'react-i18next';

const SearchBar = forwardRef((props, inputRef) => {
  const { t, i18n } = useTranslation();
  const {
    customContainerStyle,
    customInputStyle,
    placeholder,
    listData,
    loading,
    style,
    onPressListItem,
    ...pendingProps
  } = props;

  const renderItems = ({item}) => (
    <TouchableOpacity
      style={Style.listItem}
      onPress={() => onPressListItem(item)}>
      <Text style={Style.placeTxt} numberOfLines={1}>
        {item.formatted_address}
      </Text>
    </TouchableOpacity>
  );
  const onCrossPress = () => {
    inputRef.current.clear();
  };

  return (
    <View style={[customContainerStyle, Style.inputBox]}>
      <View style={[Style.searchContainer,{justifyContent:'space-between'}]}>
        <TextInput
          ref={inputRef}
          style={[Style.input, Style.cardStyle]}
          placeholder= {t('delivery:searchFood')}
          placeholderTextColor={'grey'}
          {...pendingProps}
        />
        <TouchableOpacity
          onPress={onCrossPress}
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            resizeMode: 'contain',
            marginLeft: 10,
            marginRight: 10,
            // backgroundColor:'red',
            height: 20,
            width: 20,
          }}>
          {DelIcons.crossGrey}
        </TouchableOpacity>
      </View>
      <View style={Style.loadingCloseContainer}>
        <ActivityIndicator animating={loading} size={20} />
      </View>

      <FlatList
        style={[Style.listContainer, Style.cardStyle]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={listData}
        renderItem={renderItems}
      />
    </View>
  );
});

SearchBar.propTypes = {
  customContainerStyle: ViewPropTypes.style,
  customInputStyle: PropTypes.object,
  listData: PropTypes.array,
  loading: PropTypes.bool,
  onPressListItem: PropTypes.func,
};

SearchBar.defaultProps = {
  customInputStyle: Style.defaultInput,
  listData: [],
  loading: false,
  onPressListItem: () => {},
  placeholder: 'Search',
};

export default memo(SearchBar);
