import { connect } from 'react-redux';
import SearchTabListScreen from './SearchTabListScreen';

const mapStateToProps = ({ playlistStore }: any) => playlistStore;

export default connect(
  mapStateToProps,
  null,
)(SearchTabListScreen);
