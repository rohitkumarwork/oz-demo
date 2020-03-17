import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';
import GridView from 'react-native-super-grid';

// custom modules
import Preloader from '../../components/preloader';
import { Images } from '../../theme';
import styles from './styles';

// styles destructuring
const { image, textLeftBottom, textLBottom, iconRightBottom } = styles;

//  functional components for hooks
function ChannelVideoCollections(props: any) {
  const renderItem = (item: any) => {
    return (
      <TouchableOpacity>
        <ImageBackground
          source={{
            uri: item.collection
              ? item.collection.posterUrl
              : item.video.posterUrl,
          }}
          style={image}
          resizeMode="cover"
        >
          <Text style={textLBottom} ellipsizeMode="tail" numberOfLines={1}>
            {item.collection ? item.collection.name : item.video.title}
          </Text>
          <Text style={textLeftBottom}>collection</Text>
          <Image
            source={Images.icon_collections}
            style={iconRightBottom}
            resizeMode="contain"
          />
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {props.videoCollection.length < 0 && (
        <Preloader title="Gathering services..." />
      )}
      <GridView
        itemDimension={Platform.isTV ? 200 : 300}
        items={props.videoCollection}
        horizontal={!!Platform.isTV}
        renderItem={item => renderItem(item)}
        itemContainerStyle={Platform.isTV ? styles.TvStyle : null}
        spacing={10}
      />
    </View>
  );
}

export default ChannelVideoCollections;
