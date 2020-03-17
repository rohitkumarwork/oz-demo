import { connect } from 'react-redux';
import SearchSelectedListScreen from './SearchSelectedListScreen';
const mapStateToProps = ({ playlistStore }: any) => playlistStore;
export default connect(
  mapStateToProps,
  null,
)(SearchSelectedListScreen);
