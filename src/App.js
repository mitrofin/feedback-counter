import { Component } from 'react';
import Section from './components/section/Section.jsx';
import Statistics from './components/statistics/Statistics';
import Feedback from './components/feedback/Feedback';
/* import Natification from './components/natification/Natification'; */

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
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback!">
          <Feedback options={this.state} leaveFeedback={this.feedbackHandler} />
        </Section>
        <Section title="Statistics">
          {/* <Statistics good={good} neutral={neutral} bad={bad} /> */}
        </Section>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    );
  }
}
