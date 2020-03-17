/*
Video player component 
*/
import React, { Component, useState } from 'react';
import {
  View,
  Animated,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// custom modules
import ProgressBar from 'react-native-progress/Bar';
import { Images } from '../../theme';
import { BaseStyle, Colors } from '../../constants';
import styles from './styles';
import { responsiveHeight, responsiveWidth } from '../../constants/dimensions';

function secondsToTime(time) {
  return `${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`;
}

// class ozplayer used as video player in app

export default class OZPlayer extends Component {
  static propTypes = {
    orientationLandscape: PropTypes.func,
    posterResizeMode: PropTypes.string,
    posterUrl: PropTypes.string,
    showControls: PropTypes.bool,
    src: PropTypes.string,
  };

  state = {
    isPortrait: true,
    muted: !!this.props.controlBar,
    paused: true,
    progressWidth: BaseStyle.DEVICE_WIDTH / 2,
    resizeMode: Platform.isTV
      ? 'cover'
      : !this.props.controlBar
      ? 'contain'
      : 'cover',
    showPoster: true,
    sourceFile: this.props.src,
    topViewStyle: {
      flex: 1,
      height: BaseStyle.DEVICE_WIDTH / (16 / 9),
      width: '100%',
    },
    videoStyle: {
      alignSelf: 'stretch',
      height: BaseStyle.DEVICE_WIDTH / (16 / 9),
      position: 'relative',
      width: '100%',
    },
    videoStyle2: {
      alignSelf: 'stretch',
      height: Platform.isTV ? responsiveHeight(20) : responsiveHeight(32),
      position: 'absolute',
      width: '100%',
    },
    videoStyle3: {
      alignSelf: 'stretch',
      height: Platform.isTV ? responsiveHeight(30) : responsiveHeight(32),
      position: 'absolute',
      width: '100%',
    },
  };

  animated = new Animated.Value(0);

  onVideoLoaded = () => {
    // this.player.seek(1);
  };

  componentWillMount() {
    if (Platform.isTV === true && Platform.OS === 'android') {
      Orientation.lockToLandscape();
      const { orientationLandscape } = this.props;
      orientationLandscape(false);
    } else if (Platform.isTV === false) {
      Orientation.lockToPortrait();
    }
    this.setState({
      duration: 0,
      innerLoading: true,
      muted: false,
      paused: false,
      progress: 0,
    });
  }

  componentWillUnmount() {
    Orientation.unlockAllOrientations();
  }

  handleMainButtonTouch = () => {
    this.triggerShowHide();
    if (this.state.progress >= 1) {
      this.player.seek(0);
    }
    this.setState(state => ({
      paused: !state.paused,
    }));
  };

  handleProgressPress = e => {
    this.triggerShowHide();
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * this.state.duration;
    this.player.seek(progress);
  };

  handleProgress = progress => {
    this.setState({
      progress: progress.currentTime / this.state.duration,
    });
  };



  handleLoad = meta => {
    this.setState({
      duration: meta.duration,
      innerLoading: false,
      showPoster: false,
    });
    this.triggerShowHide();
  };

  handleVideoPress = () => {
    this.triggerShowHide();
  };

  triggerShowHide = () => {
    clearTimeout(this.hideTimeout);
    Animated.timing(this.animated, {
      duration: 100,
      toValue: 1,
    }).start();
    this.hideTimeout = setTimeout(() => {
      Animated.timing(this.animated, {
        duration: 300,
        toValue: 0,
      }).start();
    }, 1500);
  };

  resizeScreen = () => {
    const { isPortrait, topViewStyle } = this.state;
    const { orientationLandscape } = this.props;
    if (isPortrait) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
    const topstyle = { ...topViewStyle };
    topstyle.height = BaseStyle.DEVICE_WIDTH / (16 / 9);
    topstyle.width = '100%';
    // if landscape helps to hide other content
    orientationLandscape(!isPortrait);
    this.setState({
      isPortrait: !isPortrait,
      progressWidth: BaseStyle.DEVICE_WIDTH / 2,
      topViewStyle: topstyle,
      videoStyle: topstyle,
    });
  };

  onMuteFunctionality = () => {
    this.setState({ muted: !this.state.muted });
  };

  render() {
    const {
      controls,
      loaderSmallContainer,
      playIconStyle,
      fullHeightWidth,
    } = styles;
    const { innerLoading, paused, isPortrait } = this.state;
    const {
      posterUrl,
      posterResizeMode,
      showControls,
      controlBar,
      index,
    } = this.props;
    const playIcon = paused ? Images.player_pause : Images.player_play;
    const screenIcon = isPortrait
      ? Images.player_fullscreen
      : Images.player_smallscreen;
    return (
      <View
        style={[
          { backgroundColor: 'black' },
          isPortrait && !Platform.isTV
            ? { height: BaseStyle.DEVICE_WIDTH / (16 / 9), width: '100%' }
            : { height: '100%', width: '100%' },
        ]}
      >
        {/* <StatusBar hidden /> */}
        <View style={[fullHeightWidth, this.state.topViewStyle]}>
          <TouchableOpacity
            style={this.state.videoStyle}
            onPress={this.handleMainButtonTouch}
          >
            <Video
             repeat={this.props.screen==='playlist'?true:false}
              ref={ref => {
                this.player = ref;
              }}
              controls={this.props.controlBar}
              paused={this.state.paused}
              muted={
                !this.props.controlBar ? !this.state.muted : this.state.muted
              }
              resizeMode={this.state.resizeMode}
              source={{ uri: this.state.sourceFile }}
              onProgress={this.handleProgress}
              style={[
                fullHeightWidth,
                this.props.screen==='playlist'
                  ? this.state.videoStyle2
                  : this.props.screen==='comment'
                  ? this.state.videoStyle3
                  : this.state.videoStyle,
              ]}
              onLoad={this.handleLoad}
              poster={this.state.showPoster ? posterUrl : null}
              posterResizeMode={posterResizeMode}
            />
          </TouchableOpacity>
        </View>
        {innerLoading &&  this.props.screen!=='playlist' &&(
          <View style={loaderSmallContainer}>
            <Animated.Image
              source={Images.preloader_small}
              style={styles.loaderSmall}
            />
          </View>
        )}
        {showControls && Platform.OS === 'android' && (
          <Animated.View style={[controls]}>
            <TouchableOpacity onPress={this.handleMainButtonTouch}>
              <Image source={playIcon} style={playIconStyle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleProgressPress}>
              <ProgressBar
                progress={this.state.progress}
                color={Colors.white}
                unfilledColor="black"
                borderColor="#FFF"
                width={this.state.progressWidth}
                height={5}
              />
            </TouchableOpacity>
            <Text style={styles.duration}>
              {`${secondsToTime(
                Math.floor(this.state.progress * this.state.duration),
              )}/${secondsToTime(Math.floor(this.state.duration))}`}
            </Text>
            <TouchableOpacity onPress={this.resizeScreen}>
              <Image source={screenIcon} style={playIconStyle} />
            </TouchableOpacity>
          </Animated.View>
        )}
        {!controlBar && (
          <Animated.View style={[controls, { justifyContent: 'flex-end' }]}>
            <TouchableOpacity
              onPress={() => this.onMuteFunctionality()}
              style={{ backgroundColor: 'transparent' }}
            >
              {!this.state.muted ? (
                <Image
                  source={Images.mute}
                  style={[
                    playIconStyle,
                    {
                      ...Platform.select({
                        android: {
                          paddingRight: Platform.isTV
                            ? responsiveWidth(6)
                            : responsiveWidth(7),
                        },
                        ios: {
                          paddingRight: Platform.isTV
                            ? responsiveWidth(4)
                            : responsiveWidth(6),
                        },
                      }),
                    },
                  ]}
                />
              ) : (
                <Image
                  source={Images.volume}
                  style={[playIconStyle, { paddingRight: responsiveWidth(6) }]}
                />
              )}
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    );
  }
}



