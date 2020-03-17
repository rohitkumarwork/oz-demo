import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import GridView from 'react-native-super-grid';
import FastImage from 'react-native-fast-image';
import dateFormat from 'dateformat';

//  custom modules
import Preloader from '../../components/preloader';
import { Images } from '../../theme';
import styles from './styles';
import { sortJsonArray, BaseStyle } from '../../constants';
import LatestClip from '../LatestClip/LatestClip';
import { responsiveHeight } from '../../constants/dimensions';
import Toast from 'react-native-root-toast-ct';

//  functional components for react hooks

function PlaylistScreen(props: any) {
  const [onVideoClick, setonVideoClick] = useState(false);
  const redirectToNowPlaying = (item: { id: string; channelId: string }) => {
    setonVideoClick(true);
    const token =
      props.userStore.user !== null ? props.userStore.user.access_token : '';
    props.runVideoStream(item.channelId, item.id, token);
  };

  const displayDate = (date: any) => {
    let newTime = new Date(date).toDateString();
    newTime = dateFormat(newTime, 'dd mmm yyyy');
    const year = newTime.split(' ');
    const currentYear = new Date().getFullYear();
    if (currentYear === parseInt(year[2], 10)) {
      newTime = dateFormat(newTime, 'dd mmm');
      return <Text style={styles.textRightTop}>{newTime}</Text>;
    }

    return <Text style={styles.textRightTop}>{newTime}</Text>;
  };

  useEffect(
    () => {
      const { navigate } = props.navigationProp
        ? props.navigationProp
        : props.navigation;
      if (onVideoClick) {
        if (props.playlistStore.error && props.playlistStore.error.response) {
          if (props.playlistStore.error.response.statusCode === 403) {
            Toast.show(props.playlistStore.error.response.message, {
              position: Toast.positions.BOTTOM,
            });
          } else if (props.playlistStore.error.response.statusCode === 500) {
            Toast.show(props.playlistStore.response.message, {
              position: Toast.positions.BOTTOM,
            });
          }
        } else {
          navigate('NowPlaying');
        }
      }
    },
    [props.playlistStore.nowPlayingData],
  );

  // used for item rendering of gridView
  const renderItem = (item: any) => (
    <View>
      <View style={styles.dateView}>{displayDate(item.updatedAt)}</View>
      <TouchableOpacity onPress={() => redirectToNowPlaying(item)}>
        <FastImage
          style={styles.image}
          source={{
            uri: item.posterUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        >
          <Text
            style={styles.textLeftBottom}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {item.title}
          </Text>
          <Text style={styles.textLeftBottom}>collection</Text>
          <Image
            source={Images.icon_collections}
            style={styles.iconRightBottom}
            resizeMode="contain"
          />
        </FastImage>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView horizontal={Platform.isTV}>
      {props.playlistStore.channelVideos && (
        <View>
          <GridView
            itemDimension={Platform.isTV ? responsiveHeight(300) : 300}
            items={sortJsonArray(
              props.playlistStore.channelVideos,
              'updatedAt',
              'des',
            )}
            horizontal={Platform.isTV}
            renderItem={item => renderItem(item)}
            itemContainerStyle={
              Platform.isTV
                ? {
                    height:
                      Platform.OS === 'ios'
                        ? BaseStyle.DEVICE_HEIGHT / 2.4
                        : BaseStyle.DEVICE_HEIGHT / 2.3,
                    width: BaseStyle.DEVICE_WIDTH / 2,
                  }
                : null
            }
            spacing={10}
          />
        </View>
      )}
      <View style={styles.latestClipContainer}>
        <LatestClip
          clip={
            props.momentStore.momentData &&
            sortJsonArray(props.momentStore.momentData, 'updatedAt', 'des')
          }
          navigation={
            props.navigationProp
              ? props.navigationProp.navigation
              : props.navigation
          }
          screen="playlist"
        />
      </View>
    </ScrollView>
  );
}

export default PlaylistScreen;
