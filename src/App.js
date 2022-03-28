import { Component } from 'react';
import Section from './components/section/Section.jsx';
import Statistics from './components/statistics/Statistics';
import Feedback from './components/feedback/Feedback';
import Natification from './components/natification/Natification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  feedbackHandler = e => {
    this.setState(prevState => {
      const buttonId = e.target.id;
      return {
        [buttonId]: prevState[buttonId] + 1,
      };
    });
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbacksTotalAmount = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback!">
          <Feedback options={this.state} leaveFeedback={this.feedbackHandler} />
        </Section>
        <Section title="Statistics">
          {feedbacksTotalAmount === 0 && (
            <Natification message="No feedback given" />
          )}
          {feedbacksTotalAmount > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={feedbacksTotalAmount}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
