import React, { useState } from 'react';
import { Wrapper } from './Statistics/Statistics.styled';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = event => {
      const target = event.target.name;
      if (target==="good") {setGood(prevValue=>prevValue+1)}
      if (target==="neutral") {setNeutral(prevValue=>prevValue+1)}
      if (target==="bad") {setBad(prevValue=>prevValue+1)}
    };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  
      return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions onBtnClick={onButtonClick} />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification />
          ) : (
            <Statistics
              ongood={good}
              onneutral={neutral}
              onbad={bad}
              onCountTotalFeedback={countTotalFeedback()}
              onCountPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Wrapper>
    );
  }

