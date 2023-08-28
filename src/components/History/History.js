import PropTypes from 'prop-types';
import Transaction from 'components/Transactions/Transactions';
import css from "./History.module.css"

const History = ({
  items
}) => {
  return (
    <table className={css.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <Transaction
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
      </tbody>
    </table>
  )
}

History.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}


export default History;
