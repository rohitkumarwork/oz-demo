import { connect } from 'react-redux';
import ChannelInfoScreen from './ChannelInfoScreen';

const mapStateToProps = ({ playlistStore }: any) => playlistStore;

export default connect(
  mapStateToProps,
  null,
)(ChannelInfoScreen);
