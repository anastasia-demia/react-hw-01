import PropTypes from 'prop-types';
import Transaction from "./Transactions";

const TransactionHistory = ({
  items
}) => {
  return (
    <table class="transaction-history">
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

TransactionHistory.PropTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}

export default TransactionHistory;
