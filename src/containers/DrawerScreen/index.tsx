// redux module
import { connect } from 'react-redux';

// custom modules
import DrawerScreen from './DrawerScreen';
import { logOut } from '../../store/Actions/logoutAction';
import { getMyServices } from '../../store/Actions/drawerActions';

const mapStateToProps = ({ drawerStore }: any) => ({ drawerStore });

const mapDispatchToProps = {
  getMyServices,
  logOut,
};

// To connect DrawerScreen from redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerScreen);
