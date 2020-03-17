import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
  BackHandler,
} from 'react-native';

// custom modules

import SearchInput, { createFilter } from 'react-native-search-filter';
import Preloader from '../../components/preloader';
import { Images } from '../../theme';
import styles from './styles';

// functional components to performs react-hooks operations

function SearchScreen(props: any) {
  const [searchTerm, setsearchTerm] = useState('');

  const KEYS_TO_FILTERS = ['collection.name', 'video.title'];

  // function on searching the data
  const searchUpdated = (term: string) => {
    setsearchTerm(term);
  };

  // function on press of searching the data
  const redirectToList = () => {
    const { navigate } = props.navigationProp.navigation;
    navigate('SearchSelectedListScreen', { backgroundColor: props.color });
  };

  // function to get filterData
  const filteredData =
    props.videoCollection &&
    props.videoCollection.length > 0 &&
    props.videoCollection.filter(createFilter(searchTerm, KEYS_TO_FILTERS));

  // function to return data in flatlist
  const renderItem = (item: any) => (
    <TouchableOpacity
      onPress={() => {
        redirectToList();
      }}
      style={[styles.imageContainer]}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 4 }}>
          <ImageBackground
            source={{
              uri: item.collection
                ? item.collection.posterUrl
                : item.video.posterUrl,
            }}
            style={styles.image}
          >
            <Image
              source={Images.icon_collections}
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
            {item.collection ? item.collection.name : item.video.title}
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
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.mainSearchContainer}>
          <Image
            source={Images.menu_search}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <SearchInput
            onChangeText={(term: string) => {
              searchUpdated(term);
            }}
            style={styles.searchFeildStyle}
            placeholderTextColor="white"
          />
        </View>
        {props.videoCollection && props.videoCollection.length < 0 && (
          <Preloader title="Gathering services..." />
        )}
        <FlatList
          data={
            props.videoCollection && props.videoCollection.length > 0
              ? filteredData
              : []
          }
          renderItem={item => renderItem(item.item)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
export default SearchScreen;
