import React, { useState, useEffect } from 'react';
import { View, BackHandler } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

// custom modules
import PlaylistScreen from '../PlaylistScreen';
import ChannelVideoCollections from '../ChannelVideoCollection';
import TabBar from './TabBar/TabBar';
import ChannelInfoScreen from '../ChannelInfoScreen';
import SearchScreen from '../SearchScreen';
import Header from './header';
import UpcomingVideoScreen from '../UpcomingVideoScreen';

// functional component for hooks
function ChannelVideosScreen(props: any) {
  // useState declaration
  const [name, setName] = useState('Live videos');
  const { brandColor } = props.navigation.state.params;

  const onRightButton = () => {
    props.navigation.navigate('Login');
  };

  //  function for  name change in swipeable tabs
  const onChangeTab = (i: any) => {
    if (i.i === 0) {
      setName('Live videos');
    } else if (i.i === 1) {
      setName('Browse');
    } else if (i.i === 2) {
      setName('Upcoming Video');
    } else if (i.i === 3) {
      setName('Search');
    } else {
      setName('Info');
    }
  };

  // on handle back functionality
  const hardwareBackPress = () => {
    props.navigation.navigate('MainScreen');
  };

  // add event to handle back functionality
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header
        navigationProp={props}
        onRightButton={onRightButton}
        name={name}
      />
      <ScrollableTabView
        initialPage={0}
        onChangeTab={(i: any) => {
          onChangeTab(i);
        }}
        renderTabBar={() => <TabBar brandColor={brandColor} />}
      >
        <View tabLabel="channel_feed" style={{ backgroundColor: brandColor }}>
          <PlaylistScreen navigationProp={props.navigation} />
        </View>
        <View tabLabel="menu_videos" style={{ backgroundColor: brandColor }}>
          <ChannelVideoCollections navigationProp={props} />
        </View>
        <View tabLabel="menu_schedule" style={{ backgroundColor: brandColor }}>
          <UpcomingVideoScreen navigationProp={props} />
        </View>

        <View tabLabel="menu_search" style={{ backgroundColor: brandColor }}>
          <SearchScreen navigationProp={props} color={brandColor} />
        </View>
        <View tabLabel="menu_info">
          <ChannelInfoScreen />
        </View>
      </ScrollableTabView>
    </View>
  );
}
export default ChannelVideosScreen;
