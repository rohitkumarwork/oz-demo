/*
Commom Text Input Component for App
*/
import React from 'react';
import { TextField } from 'react-native-material-textfield';

// custom modules
import { Colors } from '../../constants';

//  typeof props declaration used in form
interface Props {
  placeholder: string;
  onChange: (value1: string, value: string) => any;
  name: string;
  secret: boolean;
  value: string;
  autoCapitalize: string;
  keyboardType: string;
  returnKeyType: string;
  multiline: any;
  style: any;
  commentScreen: any;
}
// navigation  header component

const NavigationHeader: React.SFC<Props> = props => {
  const name = props.name;
  return (
    <TextField
      label={props.placeholder}
      onChangeText={(v: string) => props.onChange(v, name)}
      tintColor="#6F757C"
      textColor={!props.commentScreen ? '#FFFFFF' : Colors.Black}
      baseColor="#6F757C"
      inputContainerPadding={2}
      secureTextEntry={props.secret ? true : false}
      value={props.value}
      autoCapitalize={props.autoCapitalize}
      keyboardType={props.keyboardType}
      returnKeyType={props.returnKeyType}
      multiline={props.multiline}
      containerStyle={props.style}
      labelHeight={props.commentScreen ? 2 : null}
      activeLineWidth={props.commentScreen ? 0 : 2}
      lineWidth={props.commentScreen ? 0 : 2}
      underlineColorAndroid="transparent"
    />
  );
};

export default NavigationHeader;
