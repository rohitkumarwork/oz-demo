import React, { useState } from 'react';
import { Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';

// custom modules

import styles from './styles';
import { i18n } from '../../constants';

// functional components used for react hooks

function DialogInput(props: any) {
  // useState declaration
  const [inputModal, setInputModal] = useState(props.value || '');
  const [inputModal2, setInputModal2] = useState('');
  const [inputModal3, setInputModal3] = useState('');
  const [inputModal4, setInputModal4] = useState('');

  const title = props.title || '';
  const modalStyleProps = props.modalStyle || {};
  const dialogStyleProps = props.dialogStyle || {};
  const cancelText = props.cancelText || 'Cancel';
  const submitText = props.submitText || 'Save';

  // functional for save data of user
  const saveData = () => {
    if (props.tappedBtn === i18n.settingsScreen.firstName) {
      props.submitInput(inputModal);
    } else if (props.tappedBtn === i18n.settingsScreen.lastName) {
      props.submitInput(inputModal2);
    } else if (inputModal3 !== '' && inputModal4 !== '') {
      if (inputModal3 === inputModal4) {
        alert('Current Password and New password cannot be same!');
      } else {
        props.submitInput(inputModal3);
      }
    }
  };

  // set data on onchnagetext of user
  const setDataInModal = (type: string, changeText: string) => {
    if (type === 'fname') {
      setInputModal(changeText);
    }
    if (type === 'lname') {
      setInputModal2(changeText);
    }
    if (type === 'password') {
      setInputModal3(changeText);
    }

    if (type === 'CNPassword') {
      setInputModal4(changeText);
    }
  };

  const showText = () => {
    if (props.tappedBtn === i18n.settingsScreen.firstName) {
      return (
        <View>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            onChangeText={(fname: string) => setDataInModal('fname', fname)}
            value={inputModal}
          />
        </View>
      );
    }
    if (props.tappedBtn === i18n.settingsScreen.lastName) {
      return (
        <View>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            onChangeText={(lname: string) => setDataInModal('lname', lname)}
            value={inputModal2}
          />
        </View>
      );
    }

    return (
      <View style={{ flexDirection: 'column' }}>
        <TextInput
          style={styles.input_container}
          underlineColorAndroid="transparent"
          onChangeText={(password: string) =>
            setDataInModal('password', password)
          }
          value={inputModal3}
          contextMenuHidden
          secureTextEntry
          placeholder={i18n.settingsScreen.currentPassword}
        />
        <TextInput
          style={styles.input_container}
          contextMenuHidden
          underlineColorAndroid="transparent"
          secureTextEntry
          onChangeText={(CNPassword: string) =>
            setDataInModal('CNPassword', CNPassword)
          }
          value={inputModal4}
          placeholder={i18n.settingsScreen.newPassword}
        />
      </View>
    );
  };

  // UI declaration
  return (
    <Modal
      animationType="fade"
      transparent
      visible={props.isDialogVisible}
      onRequestClose={() => {
        props.closeDialog();
      }}
    >
      <View style={[styles.container, { ...modalStyleProps }]}>
        <View style={[styles.modal_container, { ...dialogStyleProps }]}>
          <View style={styles.modal_body}>
            <Text style={styles.title_modal}>{title}</Text>
            <Text
              style={[props.message ? styles.message_modal : { height: 0 }]}
            >
              {props.message}
            </Text>
            {showText()}
          </View>
          <View style={styles.btn_container}>
            <TouchableOpacity
              style={styles.touch_modal}
              onPress={() => {
                props.closeDialog();
              }}
            >
              <Text style={styles.btn_modal_left}>{cancelText}</Text>
            </TouchableOpacity>
            <View style={styles.divider_btn} />
            <TouchableOpacity
              style={styles.touch_modal}
              onPress={() => {
                saveData();
              }}
            >
              <Text style={styles.btn_modal_right}>{submitText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default DialogInput;
