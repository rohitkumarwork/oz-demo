import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import Toast from 'react-native-root-toast-ct';

//  custom modules

import styles from './styles';
import { Colors, i18n } from '../../constants';
import { Images } from '../../theme';

const data = ['MyServices', 'Notification'];
//  typeof props declaration in drawerScrren

export interface Props {
  navigation: { goBack: () => any; navigate: (value: any, value2: any) => any };
  getMyServices: () => any;
  logOut: () => any;
  drawerStore: any;
}

// functional component for drawer screen
function DrawerScreen(props: Props) {
  // useState declaration
  const [tabPressed, settabPressed] = useState('MyServices');

  // function on after logout Api
  const renderLogin = () => {
    const { navigate } = props.navigation;
    navigate('Login', { backgroundColor: Colors.Black });
  };

  // function on logout button click
  const onLogout = () => {
    const { logOut } = props;
    logOut();
    renderLogin();
    Toast.show('You are successfully logged out!', {
      position: Toast.positions.BOTTOM,
    });
  };

  // flat list function of flatlist Item seperator
  const FlatListItemSeparator = () => <View style={styles.linesStyle} />;

  // drawer service API
  useEffect(() => {
    props.getMyServices();
  }, []);

  return (
    <View style={styles.MainContainer}>
      <View style={styles.drawerHeaderContainer}>
        {data.map((dataText, index) => (
          <TouchableOpacity
            onPress={() => {
              settabPressed(index === 0 ? 'MyServices' : 'Notifications');
              props.getMyServices();
            }}
            style={styles.topTabView}
          >
            <Text
              style={
                tabPressed === 'MyServices' && index === 0
                  ? styles.button
                  : tabPressed === 'Notifications' && index === 1
                  ? styles.button
                  : styles.buttonPressed
              }
            >
              {dataText}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={props.drawerStore.myserviceData}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({ item }: any) => (
            <View style={styles.flatListView}>
              <Image source={{ uri: item.iconUrl }} style={styles.imageView} />
              <View style={styles.innerFlatListView}>
                <Text style={styles.textView}>{item.slug}</Text>
                <Text style={styles.subtextView}>{item.genres}</Text>
              </View>
            </View>
          )}
          keyExtractor={(index: any) => index.toString()}
        />
      </View>
      <View style={styles.mainView}>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('MyProfile', {
                backgroundColor: Colors.Black,
              });
            }}
          >
            <Image source={Images.Profile} style={styles.bottomImageView} />
            <Text style={styles.textBottomTab}>
              {i18n.drawerScreen.myProfile}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Settings', {
                backgroundColor: Colors.Black,
              });
            }}
          >
            <Image
              source={Images.Setting}
              style={styles.bottomImageViewlogOut}
            />
            <Text style={styles.textBottomTab1}>
              {i18n.drawerScreen.settings}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={onLogout}>
            <Image
              source={Images.logOut}
              style={styles.bottomImageViewlogOut}
            />
            <Text style={styles.textBottomTab1}>{i18n.common.logOut}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default DrawerScreen;
