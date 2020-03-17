import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Platform,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// custom modules
import NavigationHeader from '../../../components/NavigationHeader';
import styles from './styles';
import { i18n } from '../../../constants';
import { Images } from '../../../theme';
import LatestClip from '../LatestClip';
import OzInput from '../../../components/form';

export interface Props {
  navigation: any;
}

function CommentScreen(props: Props) {
  const [Comment, setComment] = useState('');

  // function on entering comment in comment screen
  const handleChange = (value: any, type: any) => {
    if (value && type === 'Comment') {
      setComment(value);
    }
  };

  // function on press back of android
  const hardwareBackPress = () => {
    props.navigation.goBack();
  };

  // handleback functionality for android
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  });

  return (
    <View style={styles.flexOne}>
      <NavigationHeader
        navigationProp={props.navigation}
        headerText="HEADING"
        imageBack={Platform.isTV ? styles.imageBackTV : styles.imageBack}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAwareScrollView
          bounces={false}
          contentContainerStyle={styles.flexOne}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <ScrollView style={styles.scrollContainer}>
            <LatestClip
              clip={props.navigation.state.params.clip}
              navigation={props.navigation}
              screen="comment"
            />
            <View style={styles.subContainer2}>
              <Image
                source={Images.icon_comment_empty}
                style={styles.imageStyle2}
                resizeMode="contain"
              />

              <Text style={styles.firstComment}>
                {i18n.commentScreen.firstComment}
              </Text>
              <Text style={styles.become}>
                {i18n.commentScreen.secondComment}
              </Text>
              <Text style={styles.become}>
                {i18n.commentScreen.thirdComment}
              </Text>
            </View>
          </ScrollView>
          <View style={styles.bottomViewContainer}>
            <OzInput
              keyboardType="default"
              multiline={false}
              secret={false}
              commentScreen={true}
              placeholder="Add your comment..."
              style={styles.bottomViewTextInput}
              returnKeyType="done"
              name="Comment"
              value={Comment}
              autoCapitalize="none"
              onChange={handleChange}
            />
            <TouchableOpacity>
              <Text style={styles.bottomViewText}>
                {i18n.commentScreen.send}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
}
export default CommentScreen;
