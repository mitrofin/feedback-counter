import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

export default function Statistics({ good, bad, neutral }) {
  return (
    <ul className={s.statsList}>
      <li className={s.listItem}>
        <p className={s.listText}>Good:{good}</p>
      </li>
      <li className={s.listItem}>
        <p className={s.listText}>Bad:{bad}</p>
      </li>
      <li className={s.listItem}>
        <p className={s.listText}>Neutral:{neutral}</p>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
};
