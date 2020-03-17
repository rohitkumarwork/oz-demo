import React from 'react';
import { Platform, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

// custom modules
import TabBar from './TabBar/TabBar';
import SearchScreenPlayingScreen from '../SearchScreenPlayingScreen';
import SearchTabListScreen from '../SearchTabListScreen';
import styles from './styles';
import NavigationHeader from '../../../components/NavigationHeader';

// functional components to performs react-hooks operations
function SearchTabScreen(props: any) {
  return (
    <View style={{ flex: 1 }}>
      <NavigationHeader
        navigationProp={props.navigation}
        headerText="Playing"
        imageBack={Platform.isTV ? styles.imageBackTV : styles.imageBack}
      />
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => (
          <TabBar brandColor={props.navigation.state.params.backgroundColor} />
        )}
      >
        <View>
          <SearchScreenPlayingScreen navigation={props.navigation} />
        </View>
        <View>
          <SearchTabListScreen navigation={props.navigation} />
        </View>
      </ScrollableTabView>
    </View>
  );
}

export default SearchTabScreen;
