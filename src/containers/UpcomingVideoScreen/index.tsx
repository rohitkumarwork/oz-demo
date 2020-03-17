// react-redux module
import { connect } from 'react-redux';

// custom modules
import UpcomingVideoScreen from './UpcomingVideoScreen';
import { getUpcomingVideos } from '../../store/Actions/playlistActions';

const mapStateToProps = ({ playlistStore }: any) => playlistStore;

const mapDispatchToProps = {
  getUpcomingVideos,
};

// function use to connect UpcomingVideoScreen with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpcomingVideoScreen);
