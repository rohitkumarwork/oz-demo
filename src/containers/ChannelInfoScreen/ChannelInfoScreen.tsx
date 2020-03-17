import React from 'react';
import { ScrollView, Text, Image, View, SafeAreaView } from 'react-native';

// custom modules
import { i18n } from '../../constants';
import styles from './styles';

function ChannelInfoScreen(props: any) {
  const bottomDetails = () => {
    const { channelInfo } = props;
    return (
      <View style={{ backgroundColor: '#D3D3D3' }}>
        <View style={styles.memberContainer}>
          <Text style={styles.bottomInfo}>
            {i18n.detailVideoScreen.language}
          </Text>
          <Text style={styles.bottomInfoss}>
            {channelInfo.data.language.toUpperCase()}
          </Text>
        </View>
        <View style={styles.memberContainer}>
          <Text style={styles.bottomInfo}>
            {i18n.detailVideoScreen.available}
          </Text>
          <Text style={styles.bottomInfoss}>
            {channelInfo.data.purchaseCountries
              ? channelInfo.data.purchaseCountries[0]
              : ''}
          </Text>
        </View>
        <View style={styles.memberContainer}>
          <Text style={styles.bottomInfo}>
            {i18n.detailVideoScreen.membership}
          </Text>
          <Text style={styles.bottomInfoss}>
            {' '}
            {channelInfo.data.price.plans.recurring
              ? channelInfo.data.price.symbol
              : ''}
            {channelInfo.data.price.plans.recurring
              ? channelInfo.data.price.plans.recurring.amount
              : ''}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={{ height: '100%' }}>
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical
        >
          <Image
            source={{
              uri: props.channelInfo.data && props.channelInfo.data.posterUrl,
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}> {props.channelInfo.data.name}</Text>
            <Text> {props.channelInfo.data.description}</Text>
          </View>
          <View style={styles.bottomContainer}>{bottomDetails()}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
export default ChannelInfoScreen;
