/*
Component for share like and comment latest clip
*/
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

// custom modules
import styles from './styles';
import { i18n } from '../../../constants';
import { Images } from '../../../theme';

interface Props {
  clip: any;
  index: number;
  onLike: (value: number) => any;
  navigation: any;
}

const MediaComponent: React.SFC<Props> = (props: Props) => {
  const data = props.clip;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.subContainer}>
        <TouchableOpacity style={styles.iconStyle}>
          <Image
            source={Images.share}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.mediaText}>{i18n.media.share}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => {
          props.navigation.navigate('CommentScreen', {
            backgroundColor: props.navigation.state.params.brandColor,
            clip: [props.clip],
          });
        }}
      >
        <TouchableOpacity style={styles.iconStyle}>
          <Image
            source={Images.comment}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.mediaText}>{i18n.media.comment}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.subContainer, { borderRightWidth: 0 }]}>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => props.onLike(props.index)}
          activeOpacity={0.9}
        >
          <Image
            source={data.like ? Images.clip_like : Images.like}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.mediaText}>
          {data.likes.length > 0 ? data.likes.length : ''} {i18n.media.like}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MediaComponent;
