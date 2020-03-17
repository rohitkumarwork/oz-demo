/*
 Header component for main  screen 
*/
import React from 'react';
import {
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

// custom modules
import { Images } from '../../theme';
import { Colors, i18n } from '../../constants';
import styles from './styles';

//  typeof props declaration used in header
interface Props {
  title: string;
  onRightButton: () => any;
  loginButtonShow: boolean;
}

// myHeader component
const MyHeader: React.SFC<Props> = props => {
  return (
    <View style={styles.headerStyle}>
      {Platform.OS === 'android' ? (
        <StatusBar translucent backgroundColor={Colors.Black} />
      ) : null}
      <View style={styles.sideButtonStyle}>
        <Image
          source={Images.header_icon}
          style={styles.headerIconStyle}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.leftButton}>
        <Text style={styles.loginText}>{props.title}</Text>
      </TouchableOpacity>
      {props.loginButtonShow ? (
        <TouchableOpacity
          onPress={() => props.onRightButton()}
          style={styles.rightButton}
        >
          <Text style={styles.loginText}>{i18n.common.logIn}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            styles.rightButton,
            { borderWidth: 0, backgroundColor: 'transparent' },
          ]}
        >
          <Text style={styles.loginText}>{''}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MyHeader;
