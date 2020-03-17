import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-root-toast-ct';
import FastImage from 'react-native-fast-image';
import { Images } from '../../theme';

//  custom modules
import OzInput from '../../components/form';
import styles from './styles';
import { i18n } from '../../constants';
import { validateEmail } from '../../constants/validation';

//  styles destructing
const {
  flexOne,
  mainArea,
  container,
  buttonStyle,
  buttonText,
  headerArea,
  headerText,
  bottomArea,
  TextiArea,
} = styles;

// functional component for loginscreen

function LoginScreen(props: any) {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [loginClicked, setloginClicked] = useState(false);

  // function on entering password and email
  const handleChange = (value: any, type: any) => {
    if (value && type === 'username') {
      setUserName(value);
    }
    if (value && type === 'password') {
      setPassword(value);
    }
  };

  // function to navigate to forgot password on forgot button click
  const navigateToForgot = () => {
    props.navigation.navigate('ForgotPassword');
  };

  // function to validate form
  const loginUser = () => {
    Keyboard.dismiss();
    if (UserName === '' || Password === '') {
      Toast.show("Fields can't be empty");
    } else if (UserName && Password) {
      if (!validateEmail(UserName).status) {
        Toast.show(validateEmail(UserName).error);
      } else if (Password.length < 7) {
        Toast.show('Please check your email and  password');
      } else {
        setloginClicked(true);
        const formData = {
          UserName,
          Password,
        };
        props.loginUser(formData);
      }
    }
  };

  // function to navigate to signupscreen if you don't have any account
  const newSignUp = () => {
    props.navigation.navigate('SignUpScreen');
  };

  //   Login API integarion in useEffect
  useEffect(() => {
    if (props.userStore.phase === 'SUCCESS' && loginClicked) {
      props.navigation.navigate('MainScreen');
      Toast.show('You are successfully logged in!', {
        position: Toast.positions.BOTTOM,
      });
    } else if (
      props.userStore.error !== null &&
      props.userStore.error.status === 400 &&
      loginClicked
    ) {
      const error =
        props.userStore.error &&
        props.userStore.error.message === 'NETWORK_ERROR_MESSAGE'
          ? 'Please check your connection!'
          : 'Invalid username and password';
      Toast.show(error, { position: Toast.positions.BOTTOM });
    }
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={mainArea}>
        <KeyboardAwareScrollView
          bounces={false}
          contentContainerStyle={flexOne}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <ScrollView contentContainerStyle={container}>
            <View style={headerArea}>
              <View>
                <FastImage source={Images.user} style={styles.imageUser} />
              </View>
              <Text style={headerText}>
                {i18n.common.logininTo}
                <Text style={headerText}>{i18n.common.accountLogin}</Text>
              </Text>
            </View>
            <View style={bottomArea}>
              <OzInput
                placeholder="UserName"
                name="UserName"
                onChange={username => handleChange(username, 'username')}
                value={UserName}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                style={TextiArea}
                commentScreen={false}
                multiline={true}
                secret={false}
              />
              <OzInput
                placeholder="Password"
                name="Password"
                style={null}
                keyboardType="default"
                commentScreen={false}
                onChange={password => handleChange(password, 'password')}
                secret={true}
                value={Password}
                autoCapitalize="none"
                returnKeyType="done"
                multiline={false}
              />
              <TouchableOpacity onPress={loginUser} style={buttonStyle}>
                <Text style={buttonText}>{i18n.common.continue}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[buttonStyle, { backgroundColor: 'transparent' }]}
                onPress={navigateToForgot}
              >
                <Text style={[buttonText, { color: 'white' }]}>
                  {i18n.common.forgotPassword}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dontHaveAnAccountContainer}
                onPress={newSignUp}
                activeOpacity={0.9}
              >
                <Text style={styles.dontHaveAnAccountText}>
                  {i18n.common.dontHaveAnAccout}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
