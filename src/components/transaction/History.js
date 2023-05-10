import PropTypes from 'prop-types';
import Transaction from "./Transactions";
import css from "./trans.module.css"

const TransactionHistory = ({
  items
}) => {
  return (
    <table class={css.history}>
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

TransactionHistory.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}


export default TransactionHistory;
