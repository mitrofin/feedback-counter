import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

export default function Statistics({
  good,
  bad,
  neutral,
  positivePercentage,
  total,
}) {
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
      <li className={s.listItem}>
        <p className={s.listText}>Total:{total}</p>
      </li>
      <li className={s.listItem}>
        <p className={s.listText}>Positive Feedback:{positivePercentage}%</p>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
