// redux modules
import { connect } from 'react-redux';

// custom modules
import ChannelVideosScreen from './ChannelVideosScreen';
import { initApp } from '../../store/Actions/mainActions';

import { logOut } from '../../store/Actions/logoutAction';

const mapStateToProps = ({ mainStore, userStore }: any) => ({
  mainStore,
  userStore,
});
const mapDispatchToProps = {
  initApp,
  logOut,
};

// To connect class from redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChannelVideosScreen);
