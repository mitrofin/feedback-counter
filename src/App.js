import { useState } from 'react';

import Section from './components/section/Section.jsx';
import Statistics from './components/statistics/Statistics';
import Feedback from './components/feedback/Feedback';
import Natification from './components/natification/Natification';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const options = ['good', 'bad', 'neutral'];

  const feedbackHandler = options => {
    switch (options) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * good);
  };

  return (
    <>
      <Section title="Please leave feedback!">
        <Feedback options={options} leaveFeedback={feedbackHandler} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Natification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
