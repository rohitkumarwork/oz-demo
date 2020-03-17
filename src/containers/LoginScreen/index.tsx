// react redux module
import { connect } from 'react-redux';

//  custom modules
import LoginScreen from './LoginScreen';
import { loginUser } from '../../store/Actions/userActions';

const mapStateToProps = ({ userStore }: any) => ({
  userStore,
});

const mapDispatchToProps = {
  loginUser,
};

// used to connect loginscreen with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
