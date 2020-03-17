// react -redux modules
import { connect } from 'react-redux';

//  custom  modules
import PlaylistScreen from './PlaylistScreen';
import { runVideoStream } from '../../store/Actions/playlistActions';
import { logOut } from '../../store/Actions/logoutAction';

const mapStateToProps = ({ playlistStore, momentStore, userStore }: any) => ({
  playlistStore,
  momentStore,
  userStore,
});

const mapDispatchToProps = {
  logOut,
  runVideoStream,
};

// used to connect playListScreen with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistScreen);
