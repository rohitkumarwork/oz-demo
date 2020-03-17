import React, { useState, useEffect } from 'react';
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  BackHandler,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { i18n } from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
  dynamicSize,
} from '../../constants/dimensions';
import NavigationHeader from '../../components/NavigationHeader';
import styles from './styles';
import DialogInput from './DialogInput';
import { Images } from '../../theme';
import FastImage from 'react-native-fast-image';

const options = {
  title: 'Select Mode',
  storageOptions: {
    skipBackup: true,
  },
};
const selectedText: string = '';

export interface Props {
  navigation: { goBack: () => any };
}

function SettingsScreen(props: any) {
  const [isDialogVisible, setisDialogVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [tappedBtn, settappedBtn] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [toggle, settoggle] = useState(false);
  const [avatarSource, setAvatarSource] = useState(Images.profile);

  const sendInput = (inputText: any) => {
    if (selectedText === i18n.settingsScreen.firstName) {
      setisDialogVisible(false);
      setfirstName(inputText);
    } else if (selectedText === i18n.settingsScreen.lastName) {
      setisDialogVisible(false);
      setLastName(inputText);
    } else {
      setisDialogVisible(false);
    }
  };
  const hardwareBackPress = () => {
    props.navigation.goBack();
  };
  const showDialog = (isShow: any) => {
    setisDialogVisible(isShow);
  };

  const selectImage = () => {
    ImagePicker.showImagePicker(options, (response: { uri: any }) => {
      const source = { uri: response.uri ? response.uri : Images.profile };
      setAvatarSource(source);
    });
  };
  async function buttonClicked(val: any, text: any) {
    switch (val) {
      case '0':
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: i18n.common.camPermission,
                message: i18n.common.accessCam,
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              selectImage();
            } else {
              Alert.alert(i18n.common.provideCamPerm);
            }
          } catch (err) {
            return {};
          }
        } else {
          selectImage();
        }

        break;
      case '1':
        // selectedText = i18n.settingsScreen.firstName;
        setisDialogVisible(true);
        setTitle(i18n.settingsScreen.firstName);
        settappedBtn(i18n.settingsScreen.firstName);

        break;
      case '2':
        // selectedText = i18n.settingsScreen.lastName;
        setisDialogVisible(true);
        setTitle(i18n.settingsScreen.lastName);
        settappedBtn(i18n.settingsScreen.lastName);
        break;
      case '3':
        // selectedText = i18n.settingsScreen.changePassword;
        setisDialogVisible(true);
        setTitle(i18n.settingsScreen.changePassword);
        settappedBtn(i18n.settingsScreen.changePassword);
        break;
      case '4':
        Alert.alert(text);

        break;
      case '5':
        Alert.alert(text);

        break;
      default:
        break;
    }
  }

  const showImage = (val: any) => {
    switch (val) {
      case '0':
        if (avatarSource) {
          return (
            <View>
              <Image source={avatarSource} style={styles.imageView} />
            </View>
          );
        }

        return (
          <View>
            <Image source={Images.profile} style={styles.imageView} />
          </View>
        );

        break;
      case '1':
        return (
          <View>
            <Image source={Images.setting_name} style={styles.imageView} />
          </View>
        );
        break;
      case '2':
        return (
          <View>
            <Image source={Images.setting_name} style={styles.imageView} />
          </View>
        );
        break;
      case '3':
        return (
          <View>
            <Image source={Images.password} style={styles.imageView} />
          </View>
        );
        break;
      case '4':
        return (
          <View>
            <Image source={Images.logOut} style={styles.imageView} />
          </View>
        );
        break;
      case '5':
        return (
          <View>
            <Image source={Images.send} style={styles.imageView} />
          </View>
        );
        break;
      default:
        return <View />;
        break;
    }
  };
  const showText = (val: any) => {
    switch (val) {
      case '0':
        return <View />;
        break;
      case '1':
        return (
          <View style={styles.textHeaderContainer}>
            <Text style={styles.textHeader}>{firstName}</Text>
          </View>
        );
        break;
      case '2':
        return (
          <View style={styles.textHeaderContainer}>
            <Text
              style={[
                styles.textHeader,
                {
                  marginLeft: responsiveWidth(3),
                },
              ]}
            >
              {lastName}
            </Text>
          </View>
        );
        break;
      default:
        return <View />;
        break;
    }
  };
  const showImage2 = (val: any) => {
    if (val !== '4') {
      return (
        <View>
          <Image source={Images.arrow_right.png} style={styles.imageView2} />
        </View>
      );
    }
  };

  const profileData = (imgVal: any, text: any) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            buttonClicked(imgVal, text);
          }}
        >
          <View
            style={[
              styles.fbheaderContainer,
              {
                marginTop: responsiveHeight(0.4),
              },
            ]}
          >
            <View style={styles.fbheaderSubContainer}>
              {showImage(imgVal)}
              <Text style={styles.text}>{text}</Text>
            </View>
            {showText(imgVal)}
            <View style={styles.fbSwitchContainer}>{showImage2(imgVal)}</View>
          </View>
          <View style={styles.linesStyle} />
        </TouchableOpacity>
      </View>
    );
  };
  const toggleSwitch = () => {
    // alert(!toggle)
    settoggle(!toggle);
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return BackHandler.removeEventListener(
      'hardwareBackPress',
      hardwareBackPress,
    );
  }, []);

  return (
    <View style={styles.MainContainer}>
      <NavigationHeader
        navigationProp={props.navigation}
        headerText="Setting"
        imageBack={Platform.isTV ? styles.imageBackTV : styles.imageBack}
      />

      <View style={{ flex: 9 }}>
        <DialogInput
          isDialogVisible={isDialogVisible}
          title={title}
          tappedBtn={tappedBtn}
          submitInput={(inputText: any) => {
            sendInput(inputText);
          }}
          closeDialog={() => {
            showDialog(false);
          }}
        />

        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            {i18n.settingsScreen.settingHeading}
          </Text>
        </View>

        <View style={styles.fbheaderContainer}>
          <View style={styles.fbheaderSubContainer}>
            <Image source={Images.fb} style={styles.imageView} />
            <Text style={styles.text}>{i18n.settingsScreen.fb}</Text>
          </View>
          <View style={styles.fbSwitchContainer}>
            <TouchableOpacity
              style={styles.toggleClickImageStyle}
              onPress={toggleSwitch}
            >
              <FastImage
                source={toggle ? Images.toggle : Images.untoggle}
                resizeMode="contain"
                style={styles.toggleImageStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.linesStyle} />

        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>Profile</Text>
        </View>

        {profileData('0', i18n.settingsScreen.profilePic)}
        {profileData('1', i18n.settingsScreen.firstName)}
        {profileData('2', i18n.settingsScreen.lastName)}
        {profileData('3', i18n.settingsScreen.changePassword)}
      </View>
      <View style={{ padding: dynamicSize(5) }}>
        {profileData('4', i18n.common.logOut)}
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>{i18n.settingsScreen.support}</Text>

        {profileData('5', i18n.settingsScreen.sendFeedback)}
      </View>
    </View>
  );
}
export default SettingsScreen;
