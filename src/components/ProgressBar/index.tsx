/*
Component for Progress bar of video in android
*/
import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

// custom modules
import styles from './styles';

// typeof props declaration
interface Props {
  visible: boolean;
}

// reueable progressbar component
const ProgressBar: React.SFC<Props> = (props: Props) => {
  return (
    <Modal transparent onRequestClose={() => null} visible={props.visible}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            color="black"
            style={styles.mainStyle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ProgressBar;
