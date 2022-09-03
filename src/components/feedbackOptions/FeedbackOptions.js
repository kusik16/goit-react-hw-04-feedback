import PropTypes from 'prop-types'

const FeedbackOptions = ({ setBad, setGood, setNeutral }) => {
  return (
    <>
      <button onClick={() => setGood(good => good + 1)}>Good</button>
      <button onClick={() => setBad(bad => bad + 1)}>Bad</button>
      <button onClick={() => setNeutral(neutral => neutral + 1)}>
        Neutral
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  setBad: PropTypes.func.isRequired,
  setGood: PropTypes.func.isRequired,
  setNeutral: PropTypes.func.isRequired,
};