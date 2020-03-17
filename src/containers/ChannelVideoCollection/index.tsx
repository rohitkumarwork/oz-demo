// redux modules
import { connect } from 'react-redux';
// custom modules
import ChannelVideoCollections from './ChannelVideoCollection';
import { logOut } from '../../store/Actions/logoutAction';

const mapStateToProps = ({ playlistStore }: any) => playlistStore;

const mapDispatchToProps = {
  logOut,
};

// used to connect class from redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChannelVideoCollections);
