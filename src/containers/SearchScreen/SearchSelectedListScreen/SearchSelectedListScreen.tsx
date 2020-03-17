import React, { useEffect } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Platform,
} from 'react-native';
import GridView from 'react-native-super-grid';
import FastImage from 'react-native-fast-image';

// custom modules
import NavigationHeader from '../../../components/NavigationHeader';
import styles from './styles';
import { BaseStyle, sortJsonArray } from '../../../constants';
import { Images } from '../../../theme';
import { dynamicSize } from '../../../constants/dimensions';

// functional components to performs react-hooks operations

function SearchSelectedListScreen(props: any) {
  const listItems = sortJsonArray(props.channelVideos, 'updatedAt', 'des');
  const renderItem = (item: any) => (
    <View>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('SearchSelectedInfoScreen', {
            backgroundColor: props.navigation.state.params.backgroundColor,
          })
        }
      >
        <FastImage
          style={styles.image}
          source={{
            uri: item.posterUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        >
          <Text
            style={[styles.textLeftBottom, { fontWeight: '600' }]}
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
    <View style={styles.container}>
      <NavigationHeader
        navigationProp={props.navigation}
        headerText="Playing"
        imageBack={Platform.isTV ? styles.imageBackTV : styles.imageBack}
      />
      {/* {isLoading && <Preloader title="Gathering services..." />} */}
      <View style={{ flex: 9 }}>
        <GridView
          itemDimension={Platform.isTV ? dynamicSize(400) : dynamicSize(300)}
          items={listItems}
          horizontal={Platform.isTV}
          renderItem={item => renderItem(item)}
          itemContainerStyle={
            Platform.isTV
              ? {
                  height:
                    Platform.OS === 'ios'
                      ? BaseStyle.DEVICE_HEIGHT / 2.2
                      : BaseStyle.DEVICE_HEIGHT / 2.7,
                  width: BaseStyle.DEVICE_WIDTH / 2,
                }
              : null
          }
          spacing={10}
        />
      </View>
    </View>
  );
}
export default SearchSelectedListScreen;
