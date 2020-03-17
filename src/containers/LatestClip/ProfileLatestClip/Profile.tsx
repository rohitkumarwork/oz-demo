import React, { useEffect } from 'react';
import {
  Image,
  BackHandler,
  ImageBackground,
  Platform,
  View,
  Text,
} from 'react-native';

// custom modules
import NavigationHeader from '../../../components/NavigationHeader';
import styles from './styles';
import NoClip from '../../../components/NoClipComponent/NoClip';
import { Images } from '../../../theme';

export interface Props {
  navigation: any;
}

function ProfileLatestClip(props: Props) {
  const data = props.navigation.state.params.data;

  // function on press back of android
  const hardwareBackPress = () => {
    props.navigation.goBack();
  };

  // handleback functionality for android
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  });

  return (
    <View>
      <NavigationHeader
        navigationProp={props.navigation}
        headerText={
          data.user.firstName
            ? data.user.firstName.concat(
                data.user.lastName ? data.user.lastName : '',
              )
            : data.user.username
        }
        imageBack={Platform.isTV ? styles.imageBackTV : styles.imageBack}
      />

      <ImageBackground
        source={
          data.user.avatarUrl
            ? { uri: data.user.avatarUrl }
            : Images.defaultUser
        }
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View>
          {data.user.avatarUrl && (
            <Image
              source={{ uri: data.user.avatarUrl }}
              style={styles.imageUser}
              resizeMode="contain"
            />
          )}
          <Text style={styles.nameBoldText}>
            {data.user.firstName ? data.user.firstName : data.user.username}{' '}
            {data.user.lastName ? data.user.lastName : ''}
          </Text>
          <Text style={styles.emailText}>
            {data.user.email ? data.user.email : ''}
          </Text>
        </View>
      </ImageBackground>
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
export default ProfileLatestClip;
