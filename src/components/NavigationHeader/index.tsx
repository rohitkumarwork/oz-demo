/*
Header component of other screens
*/
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// custom modules
import styles from './styles';
import { Images } from '../../theme';

// typeof props declareation
interface Props {
  imageBack: any;
  headerText: string;
  navigationProp: any;
}

// component  for navigation header
const NavigationHeader: React.SFC<Props> = (props: Props) => {
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: props.navigationProp.state.params.backgroundColor },
      ]}
    >
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigationProp.goBack();
          }}
        >
          <Image style={props.imageBack} source={Images.arrow_left} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{props.headerText}</Text>
      </View>
    </View>
  );
};

export default NavigationHeader;
