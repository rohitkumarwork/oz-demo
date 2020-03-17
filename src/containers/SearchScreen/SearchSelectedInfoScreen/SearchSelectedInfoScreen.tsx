import React, { useEffect } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  ImageBackground,
  FlatList,
  Platform,
} from 'react-native';

// custom modules
import NavigationHeader from '../../../components/NavigationHeader';
import styles from './styles';
import { sortJsonArray } from '../../../constants';
import { Images } from '../../../theme';

// functional components to performs react-hooks operations

function SearchSelectedInfoScreen(props: any) {
  const listItems = sortJsonArray(props.channelVideos, 'updatedAt', 'des');

  // function to return data in flatlist
  const renderItem = (item: { posterUrl: string; title: string }) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('SearchTabScreen', {
          backgroundColor: props.navigation.state.params.backgroundColor,
        });
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
        <View style={styles.titleContainer}>
          <Text
            style={[styles.textLeftBottom, styles.titleStyle]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Add Event Listner Handleback functionality
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  }, []);

  // function on press back of android
  const hardwareBackPress = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <NavigationHeader
        navigationProp={props.navigation}
        headerText="Playing"
        imageBack={Platform.isTV ? styles.imageBackTV : styles.imageBack}
      />
      {/* {isLoading && <Preloader title="Gathering services..." />} */}
      <FlatList
        data={listItems}
        renderItem={(item: { item: { posterUrl: string; title: string } }) =>
          renderItem(item.item)
        }
      />
    </View>
  );
}
export default SearchSelectedInfoScreen;
