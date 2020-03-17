import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

// custom modules
import styles from './styles';
import { Images } from '../../theme';
import { i18n } from '../../constants';
import NavigationHeader from '../../components/NavigationHeader';
import NoClip from '../../components/NoClipComponent/NoClip';

function MyProfile(props: any) {
  const [avatarSource, setavatarSource] = useState({});
  // function to open image picker on button click
  const selectImage = () => {
    ImagePicker.showImagePicker((response: any) => {
      const source = { uri: response.uri };
      setavatarSource(source);
    });
  };

  // Event listner for handle back functionality in android
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  });

  // function on press back of android
  const hardwareBackPress = () => {
    props.navigation.goBack();
  };

  return (
    <View>
      <NavigationHeader
        navigationProp={props.navigation}
        headerText={i18n.profileScreen.myProfile}
        imageBack={Platform.isTV ? styles.imageBackTV : styles.imageBack}
      />
      <View style={styles.cameraContainer}>
        <View style={styles.camerasubContainer}>
          <TouchableOpacity onPress={selectImage} style={styles.cameraClick}>
            <View style={styles.cameraImage}>
              <Image source={Images.icon_camera.png} />
            </View>
            <View style={styles.textConatiner}>
              <Text style={styles.addProfile}>
                {i18n.profileScreen.addProfile}
              </Text>
              <Text style={styles.photo}>{i18n.profileScreen.photo}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.proofOfConcept}>
            <Text style={styles.photoText}>{i18n.profileScreen.poc}</Text>
          </View>
        </View>
      </View>
      <View>
        <NoClip
          noOfLine={2}
          upperTitle="Your Clips appear here"
          lowerTitle="Become a club member and create clips from any video by tapping the clips icon"
        />
      </View>
    </View>
  );
}

export default MyProfile;
