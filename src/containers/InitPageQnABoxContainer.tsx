import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import InitPageQnABox from '../components/initPage/InitPageQnABox';
import { State } from '../store/modules';
import { clickQnA } from '../store/modules/showQnA_Ans';
import QnAContent from '../lib/QnAContent';

const mapStateToProps = ({ showQnAAns }: State): StateProps => ({
  showArr: showQnAAns.showArr,
});

type StateProps = { showArr: number[] };

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  clickQnA: (id: number): object => dispatch(clickQnA(id)),
});

type DispatchProps = { clickQnA: Function };

type Props = StateProps & DispatchProps;

function InitPageQnABoxContainer(props: Props): JSX.Element {
  const handleClick = (id: number): void => {
    const { clickQnA: clickQnAtitle } = props;
    clickQnAtitle(id);
  };

  const { showArr } = props;

  return (
    <div className="QnA_Boxes">
      {QnAContent.map((ele) => (
        <InitPageQnABox contents={ele} handleClick={handleClick} showArr={showArr} key={ele.id} />
      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(InitPageQnABoxContainer);
