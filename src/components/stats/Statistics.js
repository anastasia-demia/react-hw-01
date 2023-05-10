import PropTypes from 'prop-types';
import css from "./stats.module.css"

function randomHexColor() {
  return `#${Math.floor(Math.random() * 12345678).toString(16)}`;
}

const Stats = ({
  title, stats
}) => {
  return (
    <div class={css.box}>
      <section className={css.statistics}>
      <h2 class={css.title}>{title}</h2>

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
    </div>
  )}

  Stats.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }

  export default Stats;