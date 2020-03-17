import { Image, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

//  custom modules
import styles from './styles';
import { i18n } from '../../constants';
import { Images } from '../../theme/images';

const toggleDrawer = () => {
  // user !== null
  //  props.navigationProp.navigation.toggleDrawer();
};

// header components for channelvideoscreen

const Header = (props: any) => {
  const { user } = props.navigationProp.userStore;
  return (
    <View
      style={[
        user == null ? styles.mainContainer : styles.mainloginContainer,
        {
          backgroundColor:
            props.navigationProp.navigation.state.params.brandColor,
        },
      ]}
    >
      <View>
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={Images.menu_drawer_icon} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.name}</Text>
      </View>
      {user === null && (
        <TouchableOpacity
          onPress={() => props.onRightButton()}
          style={styles.rightButton}
        >
          <Text style={styles.loginText}>{i18n.common.logIn}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
Header.propTypes = {
  navigationProp: PropTypes.object.isRequired,
  onRightButton: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
