import {
  Platform,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';

// custom modules
import {
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../constants/dimensions';
import { Colors } from '../../constants';
import { platform } from 'os';

// style destructuring
interface Style {
  imageContainer: ViewStyle;
  imageBackTV: ImageStyle;
  imageBack: ImageStyle;
  photoText: TextStyle;
  image: ImageStyle;
  myProfile: ViewStyle;
  cameraClick: ViewStyle;
  cameraImage: ViewStyle;
  addProfile: TextStyle;
  cameraContainer: ViewStyle;
  camerasubContainer: ViewStyle;
  textConatiner: ViewStyle;
  photo: TextStyle;
  proofOfConcept: ViewStyle;
}

// styling for myProfileScrren
const styles = StyleSheet.create<Style>({
  imageBackTV: {
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    resizeMode: 'contain',
  },
  imageBack: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignSelf: 'center',
  },
  photoText: {
    color: Colors.white,
    fontSize: getFontSize(12),
    paddingVertical: responsiveHeight(0.5),
  },
  imageContainer: {
    alignSelf: 'center',
  },
  image: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    resizeMode: 'cover',
  },
  myProfile: {
    alignSelf: 'center',
    marginLeft: responsiveWidth(20),
  },
  cameraContainer: {
    height: responsiveHeight(45),
    backgroundColor: '#656565',
  },
  camerasubContainer: {
    alignItems: 'center',
    //  marginTop:responsiveHeight(10),
  },
  cameraClick: {
    borderRadius: responsiveHeight(20),
    height: Platform.isTV ? responsiveHeight(40) : responsiveHeight(20),
    width: Platform.isTV ? responsiveHeight(40) : responsiveHeight(20),
    borderWidth: responsiveWidth(0.3),
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraImage: {
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
  },
  textConatiner: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: responsiveHeight(1),
  },
  addProfile: {
    fontSize: getFontSize(12),
    color: Colors.white,
    alignSelf: 'center',
    // textAlign:'center'
  },
  photo: {
    fontSize: getFontSize(12),
    marginTop: responsiveHeight(1.5),
    color: Colors.white,
    marginLeft: Platform.isTV ? responsiveWidth(2) : responsiveWidth(3),
  },
  proofOfConcept: {
    marginTop: responsiveHeight(5),
  },
});
export default styles;
