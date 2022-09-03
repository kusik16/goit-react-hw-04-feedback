import { useState } from 'react';

import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import Section from '../section/Section';
import Notification from '../Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = (...args) => {
    return [...args].reduce((a, b) => a + b, 0);
  };

  const countPositiveFeedbackPercentage = (total, positive) => {
    return Math.floor((positive * 100) / total);
  };

  const total = countTotalFeedback(good, neutral, bad);
  const positivePercentage = countPositiveFeedbackPercentage(total, good);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          setGood={setGood}
          setNeutral={setNeutral}
          setBad={setBad}
        />
      </Section>
      <Section title="Statistics">
        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
