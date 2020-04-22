import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import InitPageEmailInput from '../components/initPage/InitPageEmailInput';
import { State } from '../store/modules';
import { changeEmailInput } from '../store/modules/emailCheck';

const mapStateToProps = ({ emailCheck }: State): StateProps => ({
  emailUp: emailCheck.emailUp,
  emailDown: emailCheck.emailDown,
  errMsgUp: emailCheck.errMsgUp,
  errMsgDown: emailCheck.errMsgDown,
});

type StateProps = { emailUp: string; emailDown: string; errMsgUp: string; errMsgDown: string };

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeEmailInput: (emailUp: string, emailDown: string): object =>
    dispatch(changeEmailInput(emailUp, emailDown)),
});

type DispatchProps = { changeEmailInput: Function };

interface ContainerProps {
  location: string;
}

type Props = StateProps & DispatchProps & ContainerProps;

class InitPageEmailInputContainer extends Component<Props> {
  handleInput = (emailUp: string, emailDown: string): void => {
    const { changeEmailInput: changeInput, location } = this.props;
    if (location === 'up') {
      changeInput(emailUp, 'up');
    } else {
      changeInput('down', emailDown);
    }
  };

  render(): JSX.Element {
    const { emailUp, emailDown, location, errMsgUp, errMsgDown } = this.props;
    if (location === 'up') {
      return (
        <InitPageEmailInput
          handleInput={this.handleInput}
          email={emailUp}
          errMsg={errMsgUp}
          location={location}
        />
      );
    }
    return (
      <InitPageEmailInput
        handleInput={this.handleInput}
        email={emailDown}
        errMsg={errMsgDown}
        location={location}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitPageEmailInputContainer);
