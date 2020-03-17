import { connect } from 'react-redux';
import SearchSelectedInfoScreen from './SearchSelectedInfoScreen';
const mapStateToProps = ({ playlistStore }: any) => playlistStore;
export default connect(
  mapStateToProps,
  null,
)(SearchSelectedInfoScreen);
