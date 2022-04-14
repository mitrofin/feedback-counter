import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

import {
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

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
        <p className={s.listText}>
          {/* Good:{good} */}
          <span className={s.iconsGood}>
            <BsFillEmojiSmileFill style={{ width: 40, height: 40 }} />
          </span>
          {good}
        </p>
      </li>
      <li className={s.listItem}>
        <p className={s.listText}>
          {/* Bad:{bad} */}
          <span className={s.iconsBad}>
            <BsFillEmojiFrownFill style={{ width: 40, height: 40 }} />
          </span>
          {bad}
        </p>
      </li>
      <li className={s.listItem}>
        <p className={s.listText}>
          {/* Neutral:{neutral} */}
          <span className={s.iconsNeutral}>
            <BsFillEmojiNeutralFill style={{ width: 40, height: 40 }} />
          </span>
          {neutral}
        </p>
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
