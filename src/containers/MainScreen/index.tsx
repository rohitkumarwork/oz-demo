// redux modules
import { connect } from 'react-redux';

// custom modules
import MainScreen from './MainScreen';
import { initApp } from '../../store/Actions/mainActions';
import { getChannelVideos } from '../../store/Actions/playlistActions';
import { momentData } from '../../store/Actions/momentActions';

const mapStateToProps = ({ mainStore, userStore }: any) => ({
  mainStore,
  userStore,
});

const mapDispatchToProps = {
  initApp,
  getChannelVideos,
  momentData,
};
// used to connect main screen  with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
