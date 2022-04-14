import PropTypes from 'prop-types';
import s from './Feedback.module.scss';

export default function Feedback({ options, leaveFeedback }) {
  return (
    <div className={s.buttonWrapper}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={s.button}
          onClick={() => leaveFeedback(option)}
        >
          {option.slice(0, 1).toUpperCase() + option.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
}
Feedback.propTypes = {
  options: PropTypes.array,
  leaveFeedback: PropTypes.func,
};
