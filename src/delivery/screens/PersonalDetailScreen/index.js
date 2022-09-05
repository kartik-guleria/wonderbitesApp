import React, {useState} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
  Platform
} from 'react-native';

import FormData from 'form-data';
FormData.prototype[Symbol.toStringTag] = 'FormData';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {userUpdateRequest} from './actions';
import Modal from 'react-native-modal';
import MyButton from 'components/MyButton';
import styles from './style';
import {COLORS, SIZES, DelIcons} from 'assets/index';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import Config from 'react-native-config';

const PersonalDetailsScreen = props => {
  const dispatch = useDispatch();
  const [imageProfile, setImage] = useState(userData?.avatar);
  const [isModalVisible, setModalVisible] = useState(false);
  const {t, i18n} = useTranslation();
  const [date, setDate] = useState('');
  const [first_name, setFirstName] = useState(userData?.first_name);
  const [last_name, setLastName] = useState(userData?.last_name);
  const [image_path, setImagePath] = useState('');
  const userData = useSelector(state => state.getUserReducer.userData);
  const [fileName, setFileName] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [fileType, setFileType] = useState('');
  const [formData, setFormData] = useState({});
  console.log(JSON.stringify(userData));
  const checkSavedChange = () => {
    if (first_name === '') {

    } else if (last_name === '') {
      setEmptyField(true);
    } else {
      dispatch(
        userUpdateRequest({ userId: userData?.id, data: formData })
      );
    }
  };

  const toggleModal = () => {
    return setModalVisible(true);
  };

  const toggleModalFalse = () => {
    setModalVisible(false);
  };
  const takePhoto = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        Alert.alert('cancelled');
      } else if (response.errorCode == 'permission') {
        Alert.alert('permission not found');
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not Found');
      }
      // else if (response.assets[0].fileSize > 2097152) {
      //   Alert.alert('MAX SIZE', [{ text: 'Ok' }]
      //   );
      // }
      else {

        setImage(response.assets[0].uri);
        setFileName(response.assets[0])
        setFileUrl(response.assets[0].uri)
        setFileType(response.assets[0].type)
        toggleModalFalse();
      }
    });
  };

  const options = {
    options: {
      mediaType: 'photo',
      quality: 3,
      includeBase64: true,
    },
  }
  const uploadImage = async() => {
    launchImageLibrary(options, images => {
      const formData = new FormData()
  formData.append('first_name', first_name);
  formData.append('last_name', last_name);
  formData.append('image_path',{
    uri: Platform.OS === 'android' ? images.assets[0].uri : images.assets[0].uri.replace('file://', ''),
    type:images.assets[0].type,
    name:images.assets[0].fileName,
    base64:images.assets[0].base64,
  })
  setFormData(formData)
      setImage(images.assets[0].uri);
  });
};

  const removeImage = () => {
    setImage('');
  };

  const image_uri = 'data:image/jpg;base64,' + imageProfile; 
  const onFirstNameChange = value => {
    if (value === '') {
      Toast.show({
        type: 'error',
        text1: 'First Name Could not be empty',
        text1Style: {
          fontSize: 20,
          fontWeight: '400',
        },
      });
    } else {
      setFirstName(value);
    }
  };

  const onLastNameChange = value => {
    if (value === '') {
      Toast.show({
        type: 'error',
        text1: 'Last Name Could not be empty',
        text1Style: {
          fontSize: 20,
          fontWeight: '400',
        },
      });
    } else {
      setLastName(value);
    }
  };
  return (
      <SafeAreaView style={MainStyle.safeAreaContainerLight}>
        <NavigationHeader
          title={t('delivery:personalDetails')}
          navigation={props.navigation}
        />
        <ScrollView bounces={false}>
                  <View style={{marginTop: 10}}>
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => toggleModal()}>
            {userData.image_path == null ?
              <Image
                style={styles.profileImage}
                source={{ uri: !imageProfile ? userData.avatar : imageProfile }}
              /> : <Image
                style={styles.profileImage}
                source={{ uri: !imageProfile ? `${Config.BASE_URL}/uploads/${userData.image_path}` : imageProfile }}
              /> 
  }
              {!imageProfile ?
                <View style={styles.imageIcon}>{DelIcons.camera}</View> : null}
            </TouchableOpacity>
          </View>

          <View style={styles.middleContainer}>
            <Text style={styles.title}>{t('common:FirstName')}</Text>
            <View style={styles.border}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#2B2C2D"
                onChangeText={value => onFirstNameChange(value)}
                defaultValue={userData?.first_name}></TextInput>
            </View>
          </View>

          <View style={styles.middleContainer}>
            <Text style={styles.title}>{t('common:LastName')}</Text>
            <View style={styles.border}>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#2B2C2D"
                onChangeText={value => onLastNameChange(value)}
                defaultValue={userData?.last_name}></TextInput>
            </View>
          </View>
          {/* <View
              style={[styles.middleContainer, {marginLeft: 0, marginRight: 0}]}>
              <Text style={[styles.title, {marginTop: 17}]}>Date of Birth</Text>
              <View>
                <DatePicker
                  style={{
                    fontFamily: FONTS.normal,
                    alignSelf: 'flex-start',
                    color: COLORS.black,
                    borderColor: COLORS.white,
                    borderWidth: 2,
                    // width: '100%',
                  }}
                  date={date} // Initial date from state
                  mode="date" // The enum of date, datetime and time
                  placeholder="23-02-1993"
                  format="DD-MM-YYYY"
                  minDate="01-01-1950"
                  maxDate="01-01-2022"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  onDateChange={date => {
                    setDate(date);
                  }}
                />
              </View>
            </View> */}
          <View style={styles.middleContainer}>
            <Text style={styles.title}>{t('delivery:dateOfBirth')}</Text>
            <View
              style={[
                styles.border,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <TextInput
                style={styles.input}
                placeholder="23-02-1993"
                placeholderTextColor="#2B2C2D"
              />
              <View style={{marginRight: 15}}>{DelIcons.redArrowDown}</View>
            </View>
            <Text style={[styles.title, {marginTop: 17}]}>
              {t('delivery:emailAddress')}
            </Text>
            <View style={styles.border}>
              <Text style={styles.input}>{userData?.email}</Text>
            </View>
            <Text style={[styles.title, {marginTop: 17}]}>
              {t('delivery:phoneNumber')}
            </Text>
            <View style={styles.border}>
              <Text style={styles.input}>{userData?.mobile}</Text>
            </View>
          </View>
         
       
        <TouchableOpacity
          style={styles.button}
          onPress={() => checkSavedChange()}>
          <Text style={styles.buttonText}>{t('delivery:saveChanges')}</Text>
        </TouchableOpacity>
      
        <Modal
          isVisible={isModalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          backgroundColor="#FFFFFF"
          style={{width: '100%', marginLeft: 0, marginTop: 510}}>
          <View style={{flex: 1}}>
            <View style={{marginTop: 10}}>
              <View style={{alignItems: 'center', marginBottom: 40}}>
                {DelIcons.flatIndicator}
              </View>
              <MyButton title={'Take Photo'} onSelect={() => takePhoto()} />
              <MyButton title={'Upload Photo'} onSelect={() => uploadImage()} />
              <MyButton title={'Remove Photo'} onSelect={() => removeImage()} />
            </View>
          </View>
        </Modal>
        </ScrollView>
      </SafeAreaView>
  );
};

export default PersonalDetailsScreen;
