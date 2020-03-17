/*
Preloader component 
*/
import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';

// custom modules
import { Images } from '../../theme';
import styles from './styles';

// typeof declaration of props
interface Props {
  title: string;
}

//  Reusable preloader component
const Preloader: React.SFC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.background}
        style={styles.backgroundImage}
      >
        <View style={styles.loader}>
          <Image
            source={Images.preloader_big}
            style={styles.prloaderImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.textBlockText}>{props.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Preloader;
