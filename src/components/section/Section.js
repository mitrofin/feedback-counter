import PropTypes from 'prop-types';
import s from './Section.module.scss';

export default function Section({ title = 'Name Section', children }) {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
