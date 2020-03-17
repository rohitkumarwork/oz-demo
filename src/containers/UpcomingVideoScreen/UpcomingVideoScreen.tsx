import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import dateFormat from 'dateformat';
import FAB from 'react-native-fab';
import _ from 'lodash';

// custom modules
import GridView from '../../library/react-native-super-grid';
import { Colors, BaseStyle, sortJsonArray } from '../../constants';
import styles from './styles';
import { Images } from '../../theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../constants/dimensions';
import Preloader from '../../components/preloader';
import MyFlatList from './MyFlatList';

export default function UpcomingVideoScreen(props: any) {
  const deviceResponsive = BaseStyle.DEVICE_WIDTH < BaseStyle.DEVICE_HEIGHT;
  const { container } = styles;
  const [fabIsVisible, setfabIsVisible] = useState(false);
  const [fabDistance, setfabDistance] = useState(0);
  const [datasource, setDataSource] = useState([]);
  const [isDownArrowPressed, setIsDownPressed] = useState(false);
  const [itemTappedId, setitemTappedId] = useState('');
  const [calendarVisible, setCalenderVisible] = useState(false);
  const [firstDate, setfirstDate] = useState('');
  const [scrollPosition] = useState(0);

  // function to return untappped data in front
  const showUnTappedData = (item: any) => {
    let newTime = new Date(item.startTime).toDateString();
    newTime = dateFormat(newTime, 'mmm dd,yyyy');
    return (
      <View style={styles.unTappedViewStyle}>
        <View style={styles.unTappedTopView}>
          <Image source={Images.clock} />
          {displayTime(item.startTime)}

          <TouchableOpacity
            onPress={() => {
              setIsDownPressed(true), setitemTappedId(item.id);
            }}
            style={styles.unTappedDropIcon}
          >
            <Image source={Images.arrow_down} style={styles.iconRightTop} />
          </TouchableOpacity>
        </View>
        <View style={styles.unTappedBottomView}>
          {unTappedBottomView(item, newTime)}
        </View>
      </View>
    );
  };

  // function  to dispaly date
  const displayDate = (date: string) => {
    let newTime = new Date(date).toDateString();
    const day = dateFormat(newTime, 'dddd');
    newTime = dateFormat(newTime, 'dd/mm/yyyy');

    return (
      <View>
        <Text style={styles.textDate}>
          <Text style={styles.displayDayText}>{day}</Text>
          <Text> {newTime}</Text>
        </Text>
      </View>
    );
  };

  // function to display calendar date
  const displayCalendarDate = (date: string) => {
    const newTime = new Date(date).toDateString();

    const threeCharday = dateFormat(newTime, 'ddd');
    const currrentYearDate = dateFormat(newTime, 'dd/mm');
    return (
      <View style={styles.calenderView}>
        <Text
          style={[
            firstDate === date ? styles.selectedTextDate : styles.textDate,
            { fontWeight: 'bold', fontSize: responsiveFontSize(1.6) },
          ]}
        >
          {threeCharday.toUpperCase()}
        </Text>
        <Text
          style={firstDate === date ? styles.selectedTextDate : styles.textDate}
        >
          {currrentYearDate}
        </Text>
      </View>
    );
  };

  // function to display day
  const displayDay = (date: string, item: { id: string }) => {
    let newTime = new Date(date).toDateString();

    newTime = dateFormat(newTime, 'mmm dd,yyyy');

    return (
      <View>
        {isDownArrowPressed && itemTappedId === item.id && (
          <Text style={styles.textCard}>{newTime}</Text>
        )}
        {isDownArrowPressed && itemTappedId !== item.id && (
          <Text
            style={[styles.textLeftBottom, { fontSize: responsiveFontSize(1) }]}
          >
            {newTime}
          </Text>
        )}
        {!isDownArrowPressed && (
          <Text
            style={[styles.textLeftBottom, { fontSize: responsiveFontSize(1) }]}
          >
            {newTime}
          </Text>
        )}
      </View>
    );
  };

  // function  to dispaly time
  const displayTime = (date: string) => {
    let newTime = new Date(date).toDateString();
    newTime = dateFormat(newTime, 'HH:mm');
    return <Text style={styles.textTime}>{newTime}</Text>;
  };

  // function  to return untappedbottom view of component
  const unTappedBottomView = (
    item: { video: { title: string } },
    newTime: string,
  ) => (
    <View style={styles.unTappedBottomChildView}>
      <View>
        <Text
          style={[styles.unTappedVideoTitle, { fontWeight: '600' }]}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {item.video.title}
        </Text>
        <Text
          style={[styles.unTappedTime, { fontWeight: '600' }]}
          numberOfLines={1}
        >
          {newTime}
        </Text>
      </View>
      <Image source={Images.player_play} style={styles.unTappedPlayIcon} />
    </View>
  );

  // function on tabing the day to set the position
  const scrollToIndex = (value: any) => {
    setfirstDate(value);
  };

  // function to view clender bottom flatlist
  const renderCalendar = (item: { startTime: string }) => (
    <View style={{ width: responsiveWidth(20), height: responsiveHeight(10) }}>
      <TouchableOpacity onPress={() => scrollToIndex(item.startTime)}>
        <View
          style={{
            backgroundColor:
              firstDate === item.startTime ? Colors.Black : Colors.white,
            padding: responsiveWidth(0.5),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {displayCalendarDate(item.startTime)}
        </View>
      </TouchableOpacity>
    </View>
  );

  // function to toggle calendar
  const settingStateOnPressRenderItem = () => {
    setCalenderVisible(false);
    setfabDistance(0);
  };

  // function on setting arrow up and arrow down
  const settingStateFastImage = () => {
    setIsDownPressed(false);
    setitemTappedId('');
  };

  // horizontal calendar days flatlist
  const renderItem = (item: any) => {
    if (item) {
      return (
        <View style={{ marginTop: responsiveWidth(1) }}>
          <View style={styles.listHeader}>{displayDate(item.startTime)}</View>
          <TouchableOpacity
            onPress={settingStateOnPressRenderItem}
            style={{ backgroundColor: Colors.Black }}
          >
            <FastImage
              style={styles.image}
              source={{
                uri: item.video.posterUrl,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            >
              {isDownArrowPressed && itemTappedId === item.id && (
                <TouchableWithoutFeedback onPress={settingStateFastImage}>
                  <View style={styles.tappedTopView}>
                    <View style={styles.tappedRightIconView}>
                      <Image
                        source={Images.arrow_up}
                        style={styles.iconRightTop}
                      />
                    </View>
                    <View style={styles.tappedTitleView}>
                      <Text style={styles.textCard}>{item.video.title}</Text>
                      {displayDay(item.startTime, item)}
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )}

              {isDownArrowPressed &&
                itemTappedId !== item.id &&
                showUnTappedData(item)}
              {!isDownArrowPressed && showUnTappedData(item)}
            </FastImage>
          </TouchableOpacity>
        </View>
      );
    }
  };

  // function on click of claender icon
  const onClick = () => {
    setCalenderVisible(!calendarVisible);
    setfabDistance(
      calendarVisible
        ? 0
        : deviceResponsive
        ? responsiveWidth(11)
        : responsiveWidth(6.5),
    );
  };

  // upcoming videos data API
  useEffect(() => {
    props.getUpcomingVideos(props.channelInfo.data.id);
    const { upcomingVideoCollection } = props;

    if (upcomingVideoCollection.data) {
      if (
        upcomingVideoCollection.data.data &&
        upcomingVideoCollection.data.data.length
      ) {
        const listItems = sortJsonArray(
          upcomingVideoCollection.data.data,
          'startTime',
          'des',
        );
        setfabIsVisible(!fabIsVisible);
        setDataSource(listItems);

        setfirstDate(listItems[0].startTime);
      }
    } else {
      setDataSource([]);
    }
  }, []);

  return (
    <View
      style={[
        container,
        {
          backgroundColor: calendarVisible ? '#00000080' : 'transparent',
        },
      ]}
    >
      {datasource == null && <Preloader title="Gathering services..." />}

      <MyFlatList
        scrollEnabled={!calendarVisible}
        scrollPosition={scrollPosition}
        itemDimension={Platform.isTV ? 200 : 300}
        items={datasource}
        horizontal={!!Platform.isTV}
        renderItem={(item: any) => renderItem(item.item[0])}
        height={BaseStyle.DEVICE_HEIGHT / 2.7}
        itemContainerStyle={
          Platform.isTV
            ? {
                height:
                  Platform.OS === 'ios'
                    ? BaseStyle.DEVICE_HEIGHT / 2.2
                    : BaseStyle.DEVICE_HEIGHT / 2.7,
                width: BaseStyle.DEVICE_WIDTH / 2.02,
              }
            : null
        }
        spacing={10}
      />

      <FAB
        buttonColor={Colors.white}
        visible={fabIsVisible}
        iconTextComponent={<Image source={Images.calendar} />}
        snackOffset={fabDistance}
        onClickAction={onClick}
      />

      {calendarVisible && (
        <View
          style={{
            height: deviceResponsive
              ? responsiveWidth(11)
              : responsiveWidth(6.5),
          }}
        >
          <GridView
            items={datasource}
            horizontal
            renderItem={item => renderCalendar(item)}
            spacing={2}
          />
        </View>
      )}
    </View>
  );
}
