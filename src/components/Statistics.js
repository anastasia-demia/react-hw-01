function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Stats = ({
  title, stats
}) => {
  return (
    <div class="box">
      <section className="statistics">
      <h2 class="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className="stat-item"
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
    </div>
  )}

  export default Stats;