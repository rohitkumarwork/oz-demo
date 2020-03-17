import React, { useEffect } from 'react';
import {
  View,
  Image,
  Platform,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import GridView from 'react-native-super-grid';

// custom modules
import Preloader from '../../components/preloader';
import MyHeader from '../../components/header';
import styles from './styles';
import { i18n } from '../../constants';

console.disableYellowBox = true;
// typeof props interface
export interface Props {
  navigation: any;
  initApp: () => any;
  userStore: { user: any };
  mainStore: any;
  getChannelVideos: (value: string) => any;
  myMomentData: (value: string) => any;
  momentData: (value: string) => any;
}

function MainScreen(props: Props) {
  const { user } = props.userStore;

  // function on click of login button
  const renderLogin = () => {
    const { navigate } = props.navigation;
    navigate('Login');
  };

  // function on clicking channel
  const redirectToPlaylist = (item: { id: string; brandColor: string }) => {
    props.getChannelVideos(item.id);
    if (user == null) {
      props.momentData(item.id);
    }
    const {
      navigation: { navigate },
    } = props;
    navigate('ChannelVideosScreen', { brandColor: item.brandColor });
  };

  // function to show the channels in the grid list
  const renderItem = (item: {
    posterUrl: string;
    id: string;
    brandColor: string;
  }) => (
    <TouchableOpacity
      onPress={() => {
        redirectToPlaylist(item);
      }}
    >
      {item.posterUrl != null && (
        <Image style={styles.posterUrl} source={{ uri: item.posterUrl }} />
      )}
    </TouchableOpacity>
  );

  // Channel data API
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    props.initApp();

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  }, []);

  // function on press back of android
  const hardwareBackPress = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <View>
        {props.mainStore.chennelData == null && (
          <Preloader title={i18n.common.gatheringServices} />
        )}
      </View>

      <MyHeader
        title={i18n.common.mainHeaderTitle}
        onRightButton={renderLogin}
        loginButtonShow={user == null ? true : false}
      />

      <View style={styles.gridViewContainer}>
        <GridView
          itemDimension={Platform.isTV ? 200 : 300}
          items={props.mainStore.chennelData}
          horizontal={!!Platform.isTV}
          renderItem={item => renderItem(item)}
          itemContainerStyle={Platform.isTV ? styles.platformTVview : null}
          spacing={10}
        />
      </View>
    </View>
  );
}

export default MainScreen;
