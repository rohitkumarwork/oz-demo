import React, { useEffect, useState } from 'react';
import { View, BackHandler, SafeAreaView, Platform } from 'react-native';

// custom modules
import OZPlayer from '../../components/videoPlayer';
import styles from './styles';
import Preloader from '../../components/preloader';

// interface for props in nowPlaying screen
export interface Props {
  navigation: any;
  nowPlayingData: any;
  initPlaylist: () => any;
}

function NowPlayingScreen(props: Props) {
  const [showData, setshowData] = useState(null);

  // function for orientation function
  const orientationLandscape = (val: any) => {
    setshowData(val);
  };

  // function on press back of android
  const hardwareBackPress = () => {
    BackHandler.exitApp();
  };

  // handleback functionality for android
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {props.nowPlayingData.data && props.nowPlayingData.data.length < 0 && (
        <Preloader title="Gathering services..." />
      )}
      <View>
        <OZPlayer
          showControls
          src={props.nowPlayingData.url}
          posterUrl="https://d3pwgdagcpl4mv.cloudfront.net/oz/image/upload//v1537765301/m5kqo0bxclp0ckun4hea.jpg"
          posterResizeMode="cover"
          orientationLandscape={orientationLandscape}
        />
      </View>
    </SafeAreaView>
  );
}
export default NowPlayingScreen;
