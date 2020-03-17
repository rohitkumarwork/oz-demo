// react-redux module
import { connect } from 'react-redux';

// custom module
import SearchScreen from './SearchScreen';
import { getChannelVideos } from '../../store/Actions/playlistActions';

const mapStateToProps = ({ playlistStore }: any) => playlistStore;

const mapDispatchToProps = {
  getChannelVideos,
};

// function used to connect redux with serch screen
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen);
