import { Component } from 'react';
import Section from './components/section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback!"></Section>
        <Section title="Statistics">
          {/* <Statistics good={good} neutral={neutral} bad={bad} /> */}
        </Section>
      </>
    );
  }
}
