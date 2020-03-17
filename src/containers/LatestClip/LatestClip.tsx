import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  Image,
  BackHandler,
} from 'react-native';
import GridView from 'react-native-super-grid';

// custom modules
import OZPlayer from '../../components/videoPlayer';
import styles from './styles';
import { responsiveHeight } from '../../constants/dimensions';
import MediaComponent from '../../components/common /MediaComponent/MediaShareComponent';
import { Images } from '../../theme';
import dateFormat from 'dateformat';

// props coming in the latest clip screen
export interface Props {
  screen: string;
  clip: any;
  navigation: {
    navigate: (value: string, backgroundColor: object) => any;
    state: { params: { brandColor: string } };
  };
}

function LatestClip(props: Props) {
  const [data, setdata] = useState(props.clip);

  // function on press of profile
  const goToProfile = (item: any) => {
    props.navigation.navigate('ProfileLatestClip', {
      data: item,
      backgroundColor: props.navigation.state.params.brandColor,
    });
  };

  // function on press arrow
  const arrowPressedFunction = (indexPassed: number) => {
    const keyModified = data;
    keyModified[indexPassed].arrowPressed = !keyModified[indexPassed]
      .arrowPressed;
    setdata(keyModified);
  };

  // function on like the clip
  const onLike = (indexPassed: number) => {
    const modifiedData = data;
    modifiedData[indexPassed].like = !data[indexPassed].like;
    setdata(modifiedData);
  };

  // function on press back of android
  const hardwareBackPress = () => {
    BackHandler.exitApp();
  };

  // display date on new moment
  const displayDate = (date: string) => {
    let newTime = new Date(date).toDateString();
    newTime = dateFormat(newTime, 'dd mmm yyyy');
    const year = newTime.split(' ');
    const currentYear = new Date().getFullYear();
    if (currentYear === parseInt(year[2], 10)) {
      newTime = dateFormat(newTime, 'dd mmm');
      return <Text style={styles.headerText}>{newTime}</Text>;
    }

    return <Text style={styles.headerText}>{newTime}</Text>;
  };

  // handleback functionality for android
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  }, []);

  const renderItem = (item: {
    id: string;
    createdAt: string;
    arrowPressed: boolean;
    user: { firstName: string; lastName: string; avatarUrl: string };
    channel: { callToActionHeadline: string };
    videoFileUrlLandscape: string;
  }) => {
    const indexPassed = data.findIndex((clip: any) => clip.id === item.id);
    return (
      <TouchableOpacity
        style={[
          styles.flatListContainer,
          props.screen === 'comment' && { marginTop: responsiveHeight(-2) },
        ]}
      >
        <View style={styles.headerStyle}>
          <Text style={styles.headerText}>New Moment</Text>
          {displayDate(item.createdAt)}
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => arrowPressedFunction(indexPassed)}
          activeOpacity={0.9}
        >
          <Image
            source={item.arrowPressed ? Images.arrow_up : Images.arrow_down}
            style={styles.imageArrow}
          />
        </TouchableOpacity>
        <View
          style={
            props.screen === 'comment'
              ? styles.videoContainerComment
              : styles.videoContainer
          }
        >
          {item.arrowPressed && (
            <TouchableOpacity style={styles.arrowPressed} activeOpacity={0.9}>
              <Text style={styles.nameBoldText}>
                {item.user.firstName
                  ? item.user.firstName.concat(
                      item.user.lastName ? item.user.lastName : '',
                    )
                  : ''}
              </Text>
              <Text style={styles.nameText}>
                {item.channel.callToActionHeadline}
              </Text>
            </TouchableOpacity>
          )}
          <OZPlayer
            screen={props.screen}
            src={item.videoFileUrlLandscape}
            posterResizeMode="cover"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.imageContainer}
          onPress={() => goToProfile(item)}
        >
          <Image
            style={styles.image}
            source={
              item.user.avatarUrl
                ? {
                    uri: item.user.avatarUrl,
                  }
                : Images.defaultUser
            }
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={
            props.screen === 'comment'
              ? styles.mediacomponentContainerComment
              : styles.mediacomponentContainer
          }
        >
          <MediaComponent
            navigation={props.navigation}
            onLike={() => onLike(indexPassed)}
            clip={item}
            index={indexPassed}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <GridView
        itemDimension={
          props.screen === 'comment'
            ? Platform.isTV
              ? responsiveHeight(400)
              : responsiveHeight(800)
            : Platform.isTV
            ? responsiveHeight(400)
            : responsiveHeight(300)
        }
        items={data && data.length > 0 ? data : []}
        horizontal={!!Platform.isTV}
        renderItem={(item: any) => renderItem(item)}
        itemContainerStyle={
          props.screen === 'comment'
            ? Platform.isTV
              ? styles.TvViewComment
              : null
            : Platform.isTV
            ? styles.TvViewStyle
            : null
        }
        spacing={5}
      />
    </View>
  );
}
export default LatestClip;
