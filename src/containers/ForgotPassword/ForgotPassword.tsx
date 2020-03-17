import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';
import Toast from 'react-native-root-toast-ct';
import FastImage from 'react-native-fast-image';
import { Images } from '../../theme';

//  custom modules
import styles from './styles';
import OzInput from '../../components/form';
import { i18n } from '../../constants';
import { validateEmail } from '../../constants/validation';

// style destructing

const {
  forgotText,
  dontHaveAnAccount,
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

// functional components in hooks
function ForgotPassword(props: any) {
  // usestate in forgot password
  const [email, setEmail] = useState('');

  // validation function to check the form
  const ResetPassword = () => {
    if (email === '') {
      Toast.show("field can't be empty");
    } else if (email) {
      if (!validateEmail(email).status) {
        Toast.show(validateEmail(email).error);
      } else {
        Toast.show('done');
      }
    }
  };

  // function on entering the email
  const changesEmail = (value: any) => {
    setEmail(value);
  };

  // function to navigate to signupscreen if you don't have any account
  const newSignUp = () => {
    props.navigation.navigate('SignUpScreen');
  };

  return (
    <TouchableWithoutFeedback accessible={false}>
      <SafeAreaView style={mainArea}>
        <KeyboardAwareScrollView
          bounces={false}
          contentContainerStyle={flexOne}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <ScrollView style={container}>
            <View style={headerArea}>
              <FastImage source={Images.unlock} style={styles.imageUnlock} />
              <Text style={headerText}>{i18n.common.forgotPasswordText1}</Text>
              <Text style={headerText}>{i18n.common.forgotPasswordText2}</Text>
              <Text style={forgotText}>{i18n.common.forgotPasswordinfo}</Text>
            </View>
            <View style={bottomArea}>
              <OzInput
                placeholder="Email"
                name="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                style={TextiArea}
                commentScreen={false}
                multiline={true}
                secret={false}
                onChange={value => changesEmail(value)}
                value={email}
              />
              <TouchableOpacity style={buttonStyle} onPress={ResetPassword}>
                <Text style={buttonText}>
                  {i18n.common.forgotPasswordButtonText}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={newSignUp}>
                <Text style={dontHaveAnAccount}>
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
export default ForgotPassword;
