import PropTypes from 'prop-types';
import s from './Feedback.module.scss';

export default function Feedback({ options, leaveFeedback }) {
  return (
    <div className={s.buttonWrapper}>
      {Object.keys(options).map(key => (
        <button
          key={key}
          type="button"
          className={s.button}
          id={key}
          onClick={e => leaveFeedback(e)}
        >
          {key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
}
Feedback.propTypes = {
  options: PropTypes.object.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
