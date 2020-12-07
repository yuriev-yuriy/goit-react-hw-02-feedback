import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  increaseNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  increaseBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  increase = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    return (
      <div className={s.Feedback}>
        <Section className={s.Section} title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onIncrease={this.increase}
          />
        </Section>
        <Section className={s.Section} title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
