import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import InitPageFooterSelect from '../components/initPage/InitPageFooterSelect';
import { State } from '../store/modules';
import { changeLanguage } from '../store/modules/selectLanguage';

const mapStateToProps = ({ selectLanguage }: State): StateProps => ({
  language: selectLanguage.language,
});

type StateProps = { language: string };

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeLanguage: (language: string): object => dispatch(changeLanguage(language)),
});

type DispatchProps = { changeLanguage: Function };

type Props = StateProps & DispatchProps;

function InitPageFooterSelectContainer(props: Props): JSX.Element {
  const handleChange = (language: string): void => {
    const { changeLanguage: changeLang } = props;
    changeLang(language);
  };

  const { language } = props;

  return <InitPageFooterSelect handleChange={handleChange} language={language} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(InitPageFooterSelectContainer);
