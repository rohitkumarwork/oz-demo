// react-redux module
import { connect } from 'react-redux';

// custom module
import SignUpScreen from './Signup';
import { signUpUser } from '../../store/Actions/userActions';

const mapStateToProps = ({ userStore }: any) => ({
  userStore,
});

const mapDispatchToProps = {
  signUpUser,
};

// used to connect SignUpScreen with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpScreen);
