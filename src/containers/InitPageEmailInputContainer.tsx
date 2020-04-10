import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import InitPageEmailInput from '../components/initPage/InitPageEmailInput';
import { State } from '../store/modules';
import { changeEmailInput } from '../store/modules/emailCheck';

const mapStateToProps = ({ emailCheck }: State): StateProps => ({
  email: emailCheck.email,
  errMsg: emailCheck.errMsg,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeEmailInput: (email: string): object => dispatch(changeEmailInput(email)),
});

type Props = StateProps & DispatchProps;
type StateProps = { email: string; errMsg: string };
type DispatchProps = { changeEmailInput: Function };

class InitPageEmailInputContainer extends Component<Props> {
  handleInput = (email: string): void => {
    const { changeEmailInput: changeInput } = this.props;
    changeInput(email);
  };

  render(): JSX.Element {
    const { email, errMsg } = this.props;
    return <InitPageEmailInput handleInput={this.handleInput} email={email} errMsg={errMsg} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitPageEmailInputContainer);
