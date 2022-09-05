import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { COLORS, DelIcons } from 'assets/index';

const EmptyCartScreen = props => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: COLORS.white }}>
        <NavigationHeader displayBtn title={t('delivery:myBag')} displayLine={true} navigation={props.navigation} />
        <UnderlineView />
        <View style={styles.screen}>
          <View style={styles.image}>
            {DelIcons.emptyCart}
          </View>
          <Text style={styles.sectionDescription}>
            {t('delivery:youDontHave')}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmptyCartScreen;
