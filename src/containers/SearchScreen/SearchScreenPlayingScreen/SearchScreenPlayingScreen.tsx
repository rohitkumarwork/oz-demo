import React, { useEffect } from 'react';
import { View, SafeAreaView, BackHandler } from 'react-native';

// Custom modules
import NoClip from '../../../components/NoClipComponent/NoClip';
import OZPlayer from '../../../components/videoPlayer';

interface Props {
  navigation: { goBack: () => any };
}

function SearchScreenPlayingScreen(props: Props) {
  // Add Event Listner Handleback functionality
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    };
  }, []);

  // function on press back of android
  const hardwareBackPress = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View>
        {/* {isLoading && <Preloader title="Gathering services..." />} */}
        <View>
          <OZPlayer
            showControls
            src="http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8"
            posterUrl="https://d3pwgdagcpl4mv.cloudfront.net/oz/image/upload//v1537765301/m5kqo0bxclp0ckun4hea.jpg"
            posterResizeMode="cover"
          />
        </View>
        <NoClip
          upperTitle="No Clips available"
          lowerTitle=" Tap the Create Clip icon in the video player
                and be the first to create a Clip from this video."
          noOfLine={2}
        />
      </View>
    </SafeAreaView>
  );
}
export default SearchScreenPlayingScreen;
