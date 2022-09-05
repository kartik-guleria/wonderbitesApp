import React, {useState } from "react";
import {
  Text,
  View,
  SectionList,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native';
import Modal from "react-native-modal";
import { Searchbar } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import styles from './style';
import { COLORS, SIZES } from 'assets/index';
import { useSelector,useDispatch } from "react-redux";

const ModalTester = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const cuisinesData = useSelector(state => state.FetchCuisineReducer.cuisinesData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={toggleModal} style={{ alignSelf: 'center', marginTop: 330, fontSize: SIZES.h7 }}>
          <Text style={{ fontSize: SIZES.h7, fontWeight: 'bold' }}>
            Click Me!
          </Text>
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          backgroundColor="#FFFFFF"
          //propagateSwipe={true}
          style={styles.bottomSheet}>
          {/* <ScrollView> */}
          <SafeAreaView>
            <View style={styles.bottomSheetView}>
              <View>
                <Text style={styles.title}>
                  {t('delivery:cuisines')}
                </Text>
                <Searchbar
                  style={styles.searchBar}
                  placeholder={t('delivery:searchCuisine')}
                  fontSize={12}
                  fontWeight='400'
                  color={COLORS.black}
                  placeholderTextColor={'#A1A1A1'}
                  iconColor='red'
                />
              </View>
              <View style={styles.line1}>
              </View>
              <View style={styles.middleSection}>

                <SectionList
                  sections={[
                    { title: 'Cuisines', data: ['Asian', 'European', 'American', 'Greek'] }]}
                  renderSectionHeader={({ section }) => <Text style={styles.sectionHeader1}>{section.title}</Text>}
                  renderItem={({ item }) => <Text style={styles.blankItems1}>
                  </Text>}
                  keyExtractor={(item, index) => index}
                />

                <View style={styles.section1}>
                  <SectionList
                    sections={[
                      { data: cuisinesData }]}
                    renderItem={({ item }) => <Text style={styles.cuisinesData}>{item.name}</Text>}
                    keyExtractor={(item, index) => cuisinesData.id}
                    scrollEnabled={false} />
                  <View style={styles.checkBoxView}>
                    <CheckBox size={19}/>
                    <CheckBox size={19} />
                    <CheckBox size={19} />
                    <CheckBox size={19} />
                  </View>

                </View>

                <View style={{ marginTop: -20 }}>
                  <SectionList
                    sections={[
                      { title: 'Everything For you', data: ['Healthy Meal', 'Family Meals', 'Workaholic Meal', 'Events Meal'] }]}

                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader2}>{section.title}</Text>}
                    renderItem={({ item }) => <Text style={styles.blankItems2}>
                    </Text>}
                    keyExtractor={(item, index) => index}
                  />
                </View>
                <View style={styles.section2}>
                  <SectionList
                    sections={[
                      { data: cuisinesData }]}
                    renderItem={({ item }) => <Text style={styles.everythingData}>{item.name}</Text>}
                    keyExtractor={(item, index) => index}
                    scrollEnabled={false} />

                  <View style={styles.checkBoxView}>
                    <CheckBox
                      size={19} />
                    <CheckBox
                      size={19} />
                    <CheckBox
                      size={19} />
                    <CheckBox
                      size={19} />

                  </View>
                </View>
              </View>

              <View style={styles.line2}>
              </View>

              <View style={styles.bottomSection}>

                <View style={styles.clearView}>
                  <TouchableOpacity>
                    <Text style={styles.clearButton}>
                      {t('delivery:clearAll')}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.applyView}>
                  <TouchableOpacity style={styles.applyButton} onPress={()=> alert('jj')}>
                    <Text style={styles.applyText}>
                      {t('delivery:apply')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* </ScrollView> */}
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
}


export default ModalTester;
