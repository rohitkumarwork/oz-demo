import React, { useEffect } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  ImageBackground,
  FlatList,
} from 'react-native';

// custom modules
import styles from './styles';
import { sortJsonArray } from '../../../constants';
import { Images } from '../../../theme';

function SearchTabListScreen(props: any) {
  const listItems = sortJsonArray(props.channelVideos, 'updatedAt', 'des');
  const renderItem = (item: any) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('SearchSelectedInfoScreen');
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 4 }}>
          <ImageBackground
            source={{ uri: item.posterUrl }}
            style={styles.image}
          >
            <Image
              source={Images.player_play}
              style={styles.iconRightBottom}
              resizeMode="contain"
            />
          </ImageBackground>
        </View>
        <View style={styles.headerTitle}>
          <Text
            style={[styles.textLeftBottom, styles.headerTitleText]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // function on press back of android
  const hardwareBackPress = () => {
    props.navigation.goBack();
  };

  // Add Event Listner Handleback functionality
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  }, []);

  return (
    <View>
      {/* {isLoading && <Preloader title="Gathering services..." />} */}
      <FlatList
        data={listItems}
        renderItem={(item: any) => renderItem(item.item)}
      />
    </View>
  );
}
export default SearchTabListScreen;
