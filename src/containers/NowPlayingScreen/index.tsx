import { connect } from 'react-redux';
import NowPlayingScreen from './NowPlaying';

const mapStateToProps = ({ playlistStore }: any) => playlistStore;

export default connect(
  mapStateToProps,
  null,
)(NowPlayingScreen);
