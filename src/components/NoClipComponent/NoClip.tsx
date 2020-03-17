/*
Component when no clip is present 
*/
import React from 'react';
import { View, Image, Text } from 'react-native';

// custom modules
import { Images } from '../../theme';
import styles from './styles';

// typeof props declaration
interface Props {
  upperTitle: string;
  lowerTitle: string;
  noOfLine: number;
}

// component for noclip
const NoClip: React.SFC<Props> = (props: Props) => {
  return (
    <View style={styles.imageIntroView}>
      <Image
        style={styles.imageIntro}
        source={Images.intro_moment}
        resizeMode="contain"
      />
      <Text style={styles.yourClips}>{props.upperTitle}</Text>
      <Text style={styles.become} noOfLines={2}>
        {props.lowerTitle}
      </Text>
    </View>
  );
};

export default NoClip;
