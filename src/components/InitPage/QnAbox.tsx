import React, { Component } from 'react';
import QnAanswer from './QnAanswer';

interface Props {
  QnA: {
    title: string;
    content: string;
  };
}

export default class QnAbox extends Component<Props> {
  state = {
    isShow: false,
  };

  showAnswer(): void {
    const { isShow } = this.state;
    if (isShow) {
      this.setState({ isShow: false });
    } else {
      this.setState({ isShow: true });
    }
  }

  render(): JSX.Element {
    const { QnA } = this.props;
    const { isShow } = this.state;
    const { title, content } = QnA;
    return (
      <div className="QnAbox" onClick={(): void => this.showAnswer()}>
        <div className="question">
          <div className="question_title">{title}</div>
          <div className="plus">+</div>
        </div>

        {!isShow ? <div /> : <QnAanswer answer={content} />}
      </div>
    );
  }
}
