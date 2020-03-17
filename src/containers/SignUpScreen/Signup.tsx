import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import SafeAreaView from 'react-native-safe-area-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-root-toast-ct';
import { Images } from '../../theme';

// custom modules

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

// functional components to performs react-hooks operations

function SignUpScreen(props: any) {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [signupClicked, setsignupClicked] = useState(false);

  const handleChange = (value: any, type: any) => {
    if (value && type === 'username') {
      setUserName(value);
    }
    if (value && type === 'password') {
      setPassword(value);
    }
    if (value && type === 'confirmpassword') {
      setconfirmPassword(value);
    }
  };

  // function called when user want to login
  const onLoginAccount = () => {
    props.navigation.navigate('Login');
  };

  // function called when user want to SignUP
  const SignUpUser = () => {
    Keyboard.dismiss();
    if (UserName === '' || Password === '' || confirmPassword === '') {
      Toast.show("Fields can't be empty");
    } else if (UserName && Password) {
      if (!validateEmail(UserName).status) {
        Toast.show(validateEmail(UserName).error);
      } else if (Password.length < 7) {
        Toast.show('Please check your password strength');
      } else if (Password !== confirmPassword) {
        Toast.show('Password does not match ');
      } else {
        const formData = {
          UserName,
          Password,
        };
        setsignupClicked(true);
        props.signUpUser(formData);
      }
    }
  };

  //   Login API integarion in useEffect
  useEffect(() => {
    if (signupClicked) {
      if (props.userStore.phase === 'SUCCESS' && signupClicked) {
        props.navigation.navigate('MainScreen');
        Toast.show('You are successfully registerd!', {
          position: Toast.positions.BOTTOM,
        });
      } else if (props.userStore.error !== null && signupClicked) {
        const error = props.userStore.error.response.message;
        Toast.show(error, {
          position: Toast.positions.BOTTOM,
        });
      }
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
              <Text style={headerText}>{i18n.common.signUp}</Text>
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
                style={TextiArea}
                keyboardType="default"
                commentScreen={false}
                onChange={password => handleChange(password, 'password')}
                secret={true}
                value={Password}
                autoCapitalize="none"
                returnKeyType="done"
                multiline={false}
              />
              <OzInput
                placeholder="Confirm Password"
                name="confirmPassword"
                style={null}
                keyboardType="default"
                commentScreen={false}
                onChange={confirmpassword =>
                  handleChange(confirmpassword, 'confirmpassword')
                }
                secret={true}
                value={confirmPassword}
                autoCapitalize="none"
                returnKeyType="done"
                multiline={false}
              />
              <TouchableOpacity onPress={SignUpUser} style={buttonStyle}>
                <Text style={buttonText}>{i18n.common.register}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginContainer}
                onPress={onLoginAccount}
              >
                <Text style={styles.loginText}>{i18n.common.loginAccount}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
export default SignUpScreen;
